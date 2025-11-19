import os
import sys

ROOT = os.path.dirname(os.path.dirname(__file__))
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)

import build.generate_pll_data as g

sample = 'RGBGOGORROBB'
formula = "x L2 D2 L' U' L D2 L' U L'"  # user example

cube = g.Cube()
# Apply inverse of user-provided algorithm to get target state
inverse = g.invert_algorithm(formula)
cube.apply_algorithm(inverse)

def rotate(p):
    return ''.join([
        p[5], p[4], p[3],
        p[9], p[10], p[11],
        p[0], p[1], p[2],
        p[8], p[7], p[6],
    ])

orientations = []
ops = []

for x in range(4):
    for y in range(4):
        for z in range(4):
            clone = g.Cube()
            clone.faces = {k: v[:] for k, v in cube.faces.items()}
            clone.rotate_cube_x(x)
            clone.rotate_cube_y(y)
            clone.rotate_cube_z(z)
            pattern = clone.pattern_string()
            orientations.append(pattern)
            ops.append((x, y, z))
            if pattern == sample:
                print('Exact match at', (x, y, z))
                raise SystemExit
            cur = pattern
            for _ in range(3):
                cur = rotate(cur)
                if cur == sample:
                    print('Match via U-rotation at', (x, y, z))
                    raise SystemExit
print('No match found')
