import json
import os
import re
import urllib.request

CASES = ['Aa','Ab','E','F','Ga','Gb','Gc','Gd','H','Ja','Jb','Na','Nb','Ra','Rb','T','Ua','Ub','V','Y','Z']
BASE_URL = 'https://speedcubedb.com/a/3x3/PLL/{}'

def fetch_alg(case):
    url = BASE_URL.format(case)
    html = urllib.request.urlopen(url).read().decode('utf-8')
    match = re.search(r'Standard Alg:(.*?)<', html, re.S)
    if not match:
        raise ValueError(f'Could not find Standard Alg for {case}')
    alg = match.group(1).strip()
    alg = alg.replace('\xa0', ' ').replace('\n', ' ').replace('\r', ' ')
    alg = ' '.join(alg.split())
    return alg

def main():
    data = {}
    for case in CASES:
        data[case] = fetch_alg(case)
    out_path = os.path.join(os.path.dirname(__file__), 'pll_algs.json')
    with open(out_path, 'w', encoding='utf-8') as fh:
        json.dump(data, fh, indent=2)
    print(f'Saved standard algorithms -> {out_path}')

if __name__ == '__main__':
    main()
