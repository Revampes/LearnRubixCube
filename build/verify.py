import build.generate_pll_data as g

cube = g.Cube()
formula = "R' B' R U' R D R' U R D' R2 B R"
inverse = g.invert_algorithm(formula)
cube.apply_algorithm(inverse)
scrambled = cube.pattern_string()
cube.apply_algorithm(formula)
solved = cube.pattern_string()
print('scrambled', scrambled)
print('solved', solved)
