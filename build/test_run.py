import os
import sys

ROOT_DIR = os.path.dirname(os.path.dirname(__file__))
if ROOT_DIR not in sys.path:
	sys.path.insert(0, ROOT_DIR)

import build.generate_pll_data as g

cube = g.Cube()
formula = "R' B' R U' R D R' U R D' R2 B R"
inverse = g.invert_algorithm(formula)
cube.apply_algorithm(inverse)
print('F scramble', cube.faces['F'])
print('L scramble', cube.faces['L'])
print('R scramble', cube.faces['R'])
print('B scramble', cube.faces['B'])
print('pattern', cube.pattern_string())

cube.apply_algorithm(formula)
print('F restored', cube.faces['F'])

with open('build/out.txt', 'w') as fh:
	fh.write('pattern=' + cube.pattern_string())
