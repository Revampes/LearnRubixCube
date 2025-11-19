import json
import os
from typing import List

import pycuber as pc

ALGORITHMS = [
    {"name": "Aa Perm", "formula": "x (R' U R') D2 (R U' R') D2 R2 x'"},
    {"name": "Ab Perm", "formula": "x R2 D2 (R U R') D2 (R U' R) x'"},
    {"name": "E Perm", "formula": "y x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x"},
    {"name": "F Perm", "formula": "y (R' U' F') (R U R' U') R' F R2 (U' R' U') (R U R' U) R"},
    {"name": "Ga Perm", "formula": "R2 (U R' U R' U' R U') R2 D (U' R' U R) D'"},
    {"name": "Gb Perm", "formula": "(R' U' R U) D' R2 (U R' U R U' R U') R2 D"},
    {"name": "Gc Perm", "formula": "R2 (U' R U' R U R' U) R2 D' (U R U' R') D"},
    {"name": "Gd Perm", "formula": "(R U R' U') D R2 (U' R U' R' U R' U) R2 D'"},
    {"name": "H Perm", "formula": "(M2 U' M2) U2 (M2 U' M2)"},
    {"name": "Ja Perm", "formula": "y (R' U L') U2 (R U' R') U2 R L"},
    {"name": "Jb Perm", "formula": "(R U R' F') (R U R' U') R' F R2 U' R'"},
    {"name": "Na Perm", "formula": "(R U R' U) (R U R' F') (R U R' U') R' F R2 U' R' U2 (R U' R')"},
    {"name": "Nb Perm", "formula": "(R' U R U' R') (F' U' F) (R U R') (F R' F') (R U' R)"},
    {"name": "Ra Perm", "formula": "y (R U' R' U') (R U R D) (R' U' R D') (R' U2 R')"},
    {"name": "Rb Perm", "formula": "(R' U2) (R U2) (R' F R) (U R' U' R') F' R2"},
    {"name": "T Perm", "formula": "(R U R' U') (R' F R2) (U' R' U') (R U R' F')"},
    {"name": "Ua Perm", "formula": "y2 (M2 U M) U2 (M' U M2)"},
    {"name": "Ub Perm", "formula": "y2 (M2 U' M) U2 (M' U' M2)"},
    {"name": "V Perm", "formula": "(R' U R' U') (R D' R' D) (R' U D') (R2 U' R2) D R2"},
    {"name": "Y Perm", "formula": "F R (U' R' U') (R U R' F') (R U R' U') (R' F R F')"},
    {"name": "Z Perm", "formula": "(M2 U) (M2 U) (M' U2) M2 (U2 M')"}
]

COLOR_MAP = {
    'green': 'G',
    'orange': 'R',  # pycuber's right face is orange; treat as red slot
    'blue': 'B',
    'red': 'O'      # pycuber's left face is red; treat as orange slot
}


def normalize(pattern: str) -> str:
    mapping = {}
    next_code = ord('A')
    normalized: List[str] = []
    for ch in pattern:
        if ch not in mapping:
            mapping[ch] = chr(next_code)
            next_code += 1
        normalized.append(mapping[ch])
    return ''.join(normalized)


def invert_move(move: str) -> str:
    move = move.strip()
    if not move:
        return ''
    if move.endswith("2"):
        return move
    if move.endswith("'"):
        return move[:-1]
    return move + "'"


def invert_algorithm(alg: str) -> str:
    tokens = [tok for tok in alg.split() if tok]
    return ' '.join(invert_move(tok) for tok in reversed(tokens))


def extract_pattern(cube: pc.Cube) -> str:
    front = cube.get_face('F')
    right = cube.get_face('R')
    back = cube.get_face('B')
    left = cube.get_face('L')
    ordered_stickers = [
        front[0][0], front[0][1], front[0][2],
        right[0][2], right[0][1], right[0][0],
        back[0][2], back[0][1], back[0][0],
        left[0][0], left[0][1], left[0][2],
    ]
    pattern_chars = []
    for sticker in ordered_stickers:
        colour = getattr(sticker, 'colour', '').lower()
        mapped = COLOR_MAP.get(colour)
        if not mapped:
            raise ValueError(f"Unexpected sticker colour: {colour}")
        pattern_chars.append(mapped)
    return ''.join(pattern_chars)


def sanitize_formula(raw: str) -> str:
    return raw.replace('(', '').replace(')', '')


def main() -> None:
    cases = []
    for info in ALGORITHMS:
        cube = pc.Cube()
        cleaned = sanitize_formula(info['formula'])
        scramble_formula = invert_algorithm(cleaned)
        cube(pc.Formula(scramble_formula))
        pattern = extract_pattern(cube)
        cases.append({
            'name': info['name'],
            'formula': info['formula'],
            'pattern': pattern,
            'normalizedPattern': normalize(pattern)
        })
    out_path = os.path.join(os.path.dirname(__file__), 'pll.json')
    with open(out_path, 'w', encoding='utf-8') as fh:
        json.dump(cases, fh, indent=2)
    print(f'Generated {len(cases)} PLL cases -> {out_path}')


if __name__ == '__main__':
    main()
