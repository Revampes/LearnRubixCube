const OLL_CASES = [
    { name: 'OLL01', topPattern: '00000000', edgePattern: '010111111010', formula: "R U2 R2 F R F' U2 R' F R F'" },
    { name: 'OLL02', topPattern: '00000000', edgePattern: '011111010011', formula: "F R U R' U' S R U R' U' Fw'" },
    { name: 'OLL03', topPattern: '00000001', edgePattern: '110011110010', formula: "Fw R U R' U' Fw' U' F R U R' U' F'" },
    { name: 'OLL04', topPattern: '00100000', edgePattern: '010110011110', formula: "Fw R U R' U' Fw' U F R U R' U' F'" },
    { name: 'OLL05', topPattern: '00001011', edgePattern: '110011100000', formula: "Rw' U2 R U R' U Rw" },
    { name: 'OLL06', topPattern: '01101000', edgePattern: '000110001110', formula: "Rw U2 R' U' R U' Rw'" },
    { name: 'OLL07', topPattern: '01010100', edgePattern: '100000110011', formula: "Rw U R' U R U2 Rw'" },
    { name: 'OLL08', topPattern: '10010010', edgePattern: '011000011100', formula: "Rw' U' R U' R' U2 Rw" },
    { name: 'OLL09', topPattern: '01010001', edgePattern: '001100010110', formula: "R U R' U' R' F R2 U R' U' F'" },
    { name: 'OLL10', topPattern: '00110010', edgePattern: '110001010001', formula: "R U R' U R' F R F' R U2 R'" },
    { name: 'OLL11', topPattern: '00001110', edgePattern: '110010100001', formula: "Rw' R2 U R' U R U2 R' U M'" },
    { name: 'OLL12', topPattern: '00010011', edgePattern: '011100010100', formula: "Lw L2 U' L U' L' U2 L U' M'" },
    { name: 'OLL13', topPattern: '00011100', edgePattern: '110000100011', formula: "F U R U' R2 F' R U R U' R'" },
    { name: 'OLL14', topPattern: '00011001', edgePattern: '011100000110', formula: "R' F R U R' F' R y' R U' R'" },
    { name: 'OLL15', topPattern: '00011001', edgePattern: '110001100010', formula: "Rw' U' Rw R' U' R U Rw' U Rw" },
    { name: 'OLL16', topPattern: '00111000', edgePattern: '010100001110', formula: "Rw U Rw' R U R' U' Rw U' Rw'" },
    { name: 'OLL17', topPattern: '10000001', edgePattern: '011011010010', formula: "R U R' U R' F R F' U2 R' F R F'" },
    { name: 'OLL18', topPattern: '00100001', edgePattern: '010111010010', formula: "R U2 R2 F R F' U2 M' U R U' Rw'" },
    { name: 'OLL19', topPattern: '10100000', edgePattern: '010011011010', formula: "M U R U R' U' M' R' F R F'" },
    { name: 'OLL20', topPattern: '10100101', edgePattern: '010010010010', formula: "Rw U R' U' M2 U R U' R' U' M'" },
    { name: 'OLL21', topPattern: '01011010', edgePattern: '101000000101', formula: "R U2 R' U' R U R' U' R U' R'" },
    { name: 'OLL22', topPattern: '01011010', edgePattern: '001101000001', formula: "R U2 R2 U' R2 U' R2 U2 R" },
    { name: 'OLL23', topPattern: '01011111', edgePattern: '101000000000', formula: "R2 D' R U2 R' D R U2 R" },
    { name: 'OLL24', topPattern: '11111010', edgePattern: '000001001000', formula: "R' U' R' D' R U R' D R2" },
    { name: 'OLL25', topPattern: '11011011', edgePattern: '000000100100', formula: "R U2 R D R' U2 R D' R2" },
    { name: 'OLL26', topPattern: '11011010', edgePattern: '001000001100', formula: "R' U' R U' R' U2 R" },
    { name: 'OLL27', topPattern: '01111010', edgePattern: '100001000001', formula: "L U L' U L U2 L'" },
    { name: 'OLL28', topPattern: '11110101', edgePattern: '000000010010', formula: "Rw U R' U' M U R U' R'" },
    { name: 'OLL29', topPattern: '01110001', edgePattern: '100000010110', formula: "R U R' U' R U' R' F' U' F R U R'" },
    { name: 'OLL30', topPattern: '01010101', edgePattern: '000100110010', formula: "F R' F R2 U' R' U' R U R' F2" },
    { name: 'OLL31', topPattern: '01101001', edgePattern: '100010000110', formula: "R' U' F U R U' R' F' R" },
    { name: 'OLL32', topPattern: '00101011', edgePattern: '110010000100', formula: "R U2 R' U' F' U F R U' R'" },
    { name: 'OLL33', topPattern: '00111001', edgePattern: '110000000110', formula: "R U R' U' R' F R F'" },
    { name: 'OLL34', topPattern: '00011101', edgePattern: '010100100010', formula: "R U R2 U' R' F R U R U' F'" },
    { name: 'OLL35', topPattern: '10001011', edgePattern: '010010100100', formula: "R U2 R2 F R F' R U2 R'" },
    { name: 'OLL36', topPattern: '11001001', edgePattern: '001011000010', formula: "L' U' L U' L' U L U L F' L' F" },
    { name: 'OLL37', topPattern: '11010001', edgePattern: '000000110110', formula: "F R U' R' U' R U R' F'" },
    { name: 'OLL38', topPattern: '01110100', edgePattern: '100000011010', formula: "R U R' U R U' R' U' R' F R F'" },
    { name: 'OLL39', topPattern: '00111100', edgePattern: '010100000011', formula: "R U R' F' U' F U R U2 R'" },
    { name: 'OLL40', topPattern: '10011001', edgePattern: '011001000010', formula: "R' F R U R' U' F' U R" },
    { name: 'OLL41', topPattern: '01010101', edgePattern: '101000010010', formula: "R U R' U R U2 R' F R U R' U' F'" },
    { name: 'OLL42', topPattern: '10110010', edgePattern: '010000010101', formula: "R' U' R U' R' U2 R F R U R' U' F'" },
    { name: 'OLL43', topPattern: '11110000', edgePattern: '000000010111', formula: "R' U' F' U F R" },
    { name: 'OLL44', topPattern: '00101001', edgePattern: '010111000000', formula: "Fw R U R' U' Fw'" },
    { name: 'OLL45', topPattern: '00111001', edgePattern: '010101000010', formula: "F R U R' U' F'" },
    { name: 'OLL46', topPattern: '11000110', edgePattern: '000010111000', formula: "R' U' R' F R F' U R" },
    { name: 'OLL47', topPattern: '01001000', edgePattern: '100010101110', formula: "F' L' U' L U L' U' L U F" },
    { name: 'OLL48', topPattern: '01010000', edgePattern: '001101010011', formula: "F R U R' U' R U R' U' F'" },
    { name: 'OLL49', topPattern: '01001000', edgePattern: '001111000011', formula: "Rw U' Rw2 U Rw2 U Rw2 U' Rw" },
    { name: 'OLL50', topPattern: '00001010', edgePattern: '011111000001', formula: "Rw' U Rw2 U' Rw2 U' Rw2 U Rw'" },
    { name: 'OLL51', topPattern: '00011000', edgePattern: '110000101110', formula: "F U R U' R' U R U' R' F'" },
    { name: 'OLL52', topPattern: '01000010', edgePattern: '001111010001', formula: "R' F' U' F U' R U R' U R" },
    { name: 'OLL53', topPattern: '00001010', edgePattern: '010111101000', formula: "Rw' U' R U' R' U R U' R' U2 Rw" },
    { name: 'OLL54', topPattern: '01001000', edgePattern: '000111101010', formula: "Rw U R' U R U' R' U R U2 Rw'" },
    { name: 'OLL55', topPattern: '00011000', edgePattern: '111000000111', formula: "R' F R U R U' R2 F' R2 U' R' U R U R'" },
    { name: 'OLL56', topPattern: '00011000', edgePattern: '010101101010', formula: "Rw U Rw' U R U' R' U R U' R' Rw U' Rw'" },
    { name: 'OLL57', topPattern: '10111101', edgePattern: '010000000010', formula: "R U R' U' M' U R U' Rw'" }
];

const OLL_TEST_CASES = [
    { name: 'OLL21', topPattern: '01011010', edgePattern: '101000000101' },
    { name: 'OLL22', topPattern: '01011010', edgePattern: '001101000001' },
    { name: 'OLL22 (90°)', topPattern: '01011010', edgePattern: '101001001000' },
    { name: 'OLL26', topPattern: '11011010', edgePattern: '001000001100' },
    { name: 'OLL27', topPattern: '01111010', edgePattern: '100001000001' },
    { name: 'OLL33', topPattern: '00111001', edgePattern: '110000000110' },
    { name: 'OLL33 (90°)', topPattern: '01000111', edgePattern: '000110110000' },
    { name: 'OLL33 (180°)', topPattern: '10011100', edgePattern: '011000000011' },
    { name: 'OLL33 (270°)', topPattern: '11100010', edgePattern: '000011011000' },
    { name: 'OLL45', topPattern: '00111001', edgePattern: '010101000010' },
    { name: 'OLL07', topPattern: '01010100', edgePattern: '100000110011' },
    { name: 'OLL09', topPattern: '01010001', edgePattern: '001100010110' },
    { name: 'OLL28', topPattern: '11110101', edgePattern: '000000010010' },
    { name: 'OLL57', topPattern: '10111101', edgePattern: '010000000010' }
];

document.addEventListener('DOMContentLoaded', () => {
    initOLLFeatures();
    initPLLFeatures();
});

function initOLLFeatures() {
    const ollSection = document.querySelector('.oll-section');
    if (!ollSection) {
        return;
    }

    const cells = document.querySelectorAll('.cell');
    const edges = document.querySelectorAll('.edge');
    const resetBtn = document.getElementById('reset-btn');
    const detectBtn = document.getElementById('detect-btn');
    const resultSection = document.querySelector('.result-section');
    const ollCase = document.getElementById('oll-case');
    const ollFormula = document.getElementById('oll-formula');
    const testBtn = document.getElementById('test-btn');
    const testModePanel = document.getElementById('test-mode-panel');

    if (!cells.length || !edges.length || !resetBtn || !detectBtn || !resultSection || !ollCase || !ollFormula) {
        console.warn('OLL interface is missing required elements.');
        return;
    }

    const miniCells = document.querySelectorAll('.mini-cell');
    const miniEdges = document.querySelectorAll('.mini-edge');
    const topOrder = [0, 1, 2, 3, 5, 6, 7, 8];

    const cubeState = {
        top: [false, false, false, false, true, false, false, false, false],
        edges: Array(12).fill(false)
    };

    cells.forEach((cell, index) => {
        if (index === 4) {
            return;
        }
        cell.addEventListener('click', () => {
            cell.classList.toggle('yellow');
            cubeState.top[index] = cell.classList.contains('yellow');
        });
    });

    edges.forEach((edge, index) => {
        edge.addEventListener('click', () => {
            edge.classList.toggle('yellow');
            cubeState.edges[index] = edge.classList.contains('yellow');
        });
    });

    resetBtn.addEventListener('click', resetState);
    detectBtn.addEventListener('click', handleDetect);

    if (testBtn && testModePanel) {
        testBtn.addEventListener('click', () => {
            testModePanel.classList.toggle('hidden');
            if (!testModePanel.classList.contains('hidden')) {
                createTestButtons();
            }
        });
    }

    function resetState() {
        cells.forEach((cell, index) => {
            if (index === 4) {
                return;
            }
            cell.classList.remove('yellow');
            cubeState.top[index] = false;
        });

        cubeState.top[4] = true;

        edges.forEach((edge, index) => {
            edge.classList.remove('yellow');
            cubeState.edges[index] = false;
        });

        resultSection.classList.add('hidden');
        resultSection.classList.remove('visible');
        clearMiniCubePreview();
    }

    function handleDetect() {
        const { topCode, edgeCode } = getStateCodes();
        const detectedCase = detectOLLCase(topCode, edgeCode);

        if (detectedCase) {
            ollCase.textContent = detectedCase.name;
            ollFormula.textContent = detectedCase.formula;
            updateMiniCubePreview(detectedCase.topPattern, detectedCase.edgePattern);
        } else {
            ollCase.textContent = 'Not recognized';
            ollFormula.textContent = 'Try rotating the cube or check the selected stickers.';
            clearMiniCubePreview();
        }

        resultSection.classList.remove('hidden');
        resultSection.classList.add('visible');
    }

    function getStateCodes() {
        let topCode = '';
        topOrder.forEach(index => {
            topCode += cubeState.top[index] ? '1' : '0';
        });

        let edgeCode = '';
        for (let i = 0; i < 12; i++) {
            edgeCode += cubeState.edges[i] ? '1' : '0';
        }

        return { topCode, edgeCode };
    }

    function detectOLLCase(topCode, edgeCode) {
        for (const oll of OLL_CASES) {
            const topVariants = getAllTopRotations(oll.topPattern);
            const edgeVariants = getAllEdgeRotations(oll.edgePattern);

            for (let i = 0; i < 4; i++) {
                if (topVariants[i] === topCode && edgeVariants[i] === edgeCode) {
                    return oll;
                }
            }
        }

        return null;
    }

    function updateMiniCubePreview(topPattern, edgePattern) {
        if (!miniCells.length || !miniEdges.length) {
            return;
        }

        topOrder.forEach((cellIndex, patternIndex) => {
            if (topPattern[patternIndex] === '1') {
                miniCells[cellIndex].classList.add('yellow');
            } else if (cellIndex !== 4) {
                miniCells[cellIndex].classList.remove('yellow');
            }
        });

        miniEdges.forEach((edge, index) => {
            if (edgePattern[index] === '1') {
                edge.classList.add('yellow');
            } else {
                edge.classList.remove('yellow');
            }
        });
    }

    function clearMiniCubePreview() {
        miniCells.forEach((cell, index) => {
            if (index !== 4) {
                cell.classList.remove('yellow');
            }
        });

        miniEdges.forEach(edge => edge.classList.remove('yellow'));
    }

    function createTestButtons() {
        const container = document.getElementById('test-cases-container');
        if (!container) {
            return;
        }

        container.innerHTML = '';

        OLL_TEST_CASES.forEach(testCase => {
            const button = document.createElement('button');
            button.className = 'test-case-btn';
            button.textContent = testCase.name;
            button.addEventListener('click', () => {
                setCubeStateFromPatterns(testCase.topPattern, testCase.edgePattern);
            });
            container.appendChild(button);
        });
    }

    function setCubeStateFromPatterns(topPattern, edgePattern) {
        resetState();

        topOrder.forEach((index, patternIndex) => {
            if (topPattern[patternIndex] === '1') {
                cells[index].classList.add('yellow');
                cubeState.top[index] = true;
            }
        });

        for (let i = 0; i < 12; i++) {
            if (edgePattern[i] === '1') {
                edges[i].classList.add('yellow');
                cubeState.edges[i] = true;
            }
        }
    }
}

function initPLLFeatures() {
    const pllSection = document.querySelector('.pll-section');
    if (!pllSection) {
        return;
    }

    const colorPalette = document.getElementById('pll-color-palette');
    const edgeSlots = pllSection.querySelectorAll('.pll-edge');
    const patternInput = document.getElementById('pll-pattern-input');
    const detectBtn = document.getElementById('pll-detect');
    const resetBtn = document.getElementById('pll-reset');
    const statusEl = document.getElementById('pll-status');
    const resultSection = document.getElementById('pll-result-section');
    const pllCaseEl = document.getElementById('pll-case');
    const pllFormulaEl = document.getElementById('pll-formula');
    const normalizedEl = document.getElementById('pll-normalized');
    const rotationEl = document.getElementById('pll-rotation');
    const sampleButtons = document.querySelectorAll('#pll-sample-list .test-case-btn');
    const previewCanvas = document.getElementById('pll-preview');
    const libraryContainer = document.getElementById('pll-case-table');

    if (!colorPalette || edgeSlots.length !== 12 || !patternInput || !detectBtn || !resetBtn || !resultSection || !pllCaseEl || !pllFormulaEl) {
        console.warn('PLL interface is missing required elements.');
        return;
    }

    const colorButtons = colorPalette.querySelectorAll('.color-chip');
    let selectedColor = 'R';
    const currentPattern = new Array(12).fill(''); // Stored as front -> right -> back -> left
    const domToPatternIndex = edgeSlots.length === 12 ? [
        0, 1, 2,      // front (top edge slots)
        9, 10, 11,    // left column slots appear next in DOM
        3, 4, 5,      // right column slots
        6, 7, 8       // rear/bottom slots
    ] : [];
    const patternToDomIndex = new Array(12).fill(0);
    domToPatternIndex.forEach((patternIdx, domIdx) => {
        patternToDomIndex[patternIdx] = domIdx;
    });
    let pllCases = [];

    edgeSlots.forEach((slot, index) => {
        const labelEl = slot.querySelector('.slot-label');
        slot.dataset.index = String(index);
        slot.dataset.label = (labelEl ? labelEl.textContent : slot.textContent || '') || String(index + 1);
        slot.addEventListener('click', () => {
            if (!selectedColor) {
                return;
            }
            const patternIndex = domToPatternIndex[index] ?? index;
            currentPattern[patternIndex] = currentPattern[patternIndex] === selectedColor ? '' : selectedColor;
            syncPatternInput();
            renderSlots();
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedColor = button.dataset.color || '';
            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    if (colorButtons.length) {
        colorButtons[0].classList.add('active');
    }

    patternInput.addEventListener('input', () => {
        const sanitized = sanitizePattern(patternInput.value);
        patternInput.value = sanitized;
        applyPatternString(sanitized, false);
    });

    resetBtn.addEventListener('click', () => {
        currentPattern.fill('');
        renderSlots();
        patternInput.value = '';
        setStatus('');
        hidePLLResult();
        clearPLLPreview();
    });

    sampleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pattern = button.dataset.pattern || '';
            applyPatternString(pattern);
            setStatus(`Sample pattern loaded: ${button.textContent}`);
        });
    });

    detectBtn.addEventListener('click', () => {
        if (!pllCases.length) {
            setStatus('PLL dataset is still loading. Please wait a moment.', 'error');
            return;
        }

        const pattern = sanitizePattern(getCurrentPatternString());
        if (pattern.length !== 12) {
            setStatus('Please fill all 12 edge slots before detecting.', 'error');
            hidePLLResult(false);
            drawPLLPreview(getPreviewPatternString());
            return;
        }

        const detection = detectPLLCase(pattern, pllCases);
        if (detection) {
            setStatus(`Matched ${detection.case.name} after ${detection.rotation * 90}° rotation.`, 'success');
            showPLLResult(detection);
        } else {
            setStatus('No matching PLL case found. Double-check the colors and orientation.', 'error');
            hidePLLResult(false);
        }
    });

    renderSlots();

    fetch('data/pll.json')
        .then(response => response.json())
        .then(data => {
            pllCases = data;
            setStatus('PLL dataset ready. Enter a pattern to begin.', 'success');
            populatePLLTable(data);
        })
        .catch(error => {
            console.error('Unable to load PLL data', error);
            setStatus('Unable to load PLL data. Please refresh the page.', 'error');
        });

    function renderSlots() {
        edgeSlots.forEach((slot, index) => {
            const patternIndex = domToPatternIndex[index] ?? index;
            const value = currentPattern[patternIndex];
            const labelEl = slot.querySelector('.slot-label');
            if (labelEl) {
                labelEl.textContent = value || slot.dataset.label;
            }
            slot.classList.toggle('filled', Boolean(value));
            slot.dataset.color = value || '';
        });
        if (!resultSection.classList.contains('hidden')) {
            hidePLLResult(false);
        }
        updateLivePreview();
    }

    function applyPatternString(str, updateInput = true) {
        for (let i = 0; i < 12; i++) {
            currentPattern[i] = str[i] || '';
        }
        renderSlots();
        if (updateInput) {
            patternInput.value = currentPattern.join('');
        }
    }

    function getCurrentPatternString() {
        return currentPattern.join('');
    }

    function syncPatternInput() {
        patternInput.value = currentPattern.join('');
    }

    function getPreviewPatternString() {
        return currentPattern.map(ch => ch || ' ').join('');
    }

    function updateLivePreview() {
        drawPLLPreview(getPreviewPatternString());
    }

    function sanitizePattern(value) {
        return (value || '')
            .toUpperCase()
            .replace(/[^RGBO]/g, '')
            .slice(0, 12);
    }

    function detectPLLCase(pattern, cases) {
        const rotations = getPatternRotations(pattern);
        for (let i = 0; i < rotations.length; i++) {
            const normalizedInput = normalizePattern(rotations[i]);
            const match = cases.find(item => item.normalizedPattern === normalizedInput);
            if (match) {
                return {
                    case: match,
                    rotation: i,
                    rotatedPattern: rotations[i],
                    normalized: normalizedInput
                };
            }
        }
        return null;
    }

    function showPLLResult(detection) {
        pllCaseEl.textContent = detection.case.name;
        pllFormulaEl.textContent = detection.case.formula;
        normalizedEl.textContent = detection.normalized;
        rotationEl.textContent = `${detection.rotation * 90}°`;
        drawPLLPreview(detection.rotatedPattern);
        resultSection.classList.remove('hidden');
        resultSection.classList.add('visible');
    }

    function hidePLLResult(clear = true) {
        if (clear) {
            pllCaseEl.textContent = '–';
            pllFormulaEl.textContent = 'Waiting for input…';
            normalizedEl.textContent = '–';
            rotationEl.textContent = '0°';
            clearPLLPreview();
        }
        resultSection.classList.add('hidden');
        resultSection.classList.remove('visible');
    }

    function setStatus(message, state) {
        if (!statusEl) {
            return;
        }
        statusEl.textContent = message || '';
        statusEl.classList.remove('error', 'success');
        if (state) {
            statusEl.classList.add(state);
        }
    }

    function drawPLLPreview(pattern) {
        if (!previewCanvas) {
            return;
        }
        const ctx = previewCanvas.getContext('2d');
        if (!ctx) {
            return;
        }
        const { width, height } = previewCanvas;
        ctx.clearRect(0, 0, width, height);

        if (!pattern || pattern.length !== 12) {
            return;
        }

        const colors = {
            R: '#cf1020', // vivid red
            G: '#0a8754', // deep green
            B: '#0057d9', // saturated blue
            O: '#ff7a18'  // bright orange
        };
        const fallback = '#bdc3c7';

        const size = Math.min(width, height) * 0.75;
        const squareX = (width - size) / 2;
        const squareY = (height - size) / 2;
        const segment = size / 3;
        const thickness = segment * 0.5;
        const gap = thickness * 0.2;

        const outerGradient = ctx.createLinearGradient(squareX, squareY, squareX + size, squareY + size);
        outerGradient.addColorStop(0, '#f7f8fa');
        outerGradient.addColorStop(1, '#dfe7ef');
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 4;
        ctx.fillStyle = outerGradient;
        ctx.fillRect(squareX, squareY, size, size);
        ctx.restore();
        ctx.strokeStyle = '#1f2d3d';
        ctx.lineWidth = 2;
        ctx.strokeRect(squareX, squareY, size, size);

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.lineWidth = 1;
        for (let i = 1; i < 3; i++) {
            const offset = squareX + i * segment;
            ctx.beginPath();
            ctx.moveTo(offset, squareY);
            ctx.lineTo(offset, squareY + size);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(squareX, squareY + i * segment);
            ctx.lineTo(squareX + size, squareY + i * segment);
            ctx.stroke();
        }

        const centerSize = segment - 2 * gap;
        const centerX = squareX + segment + gap;
        const centerY = squareY + segment + gap;
        const centerGradient = ctx.createLinearGradient(centerX, centerY, centerX + centerSize, centerY + centerSize);
        centerGradient.addColorStop(0, '#ffe066');
        centerGradient.addColorStop(1, '#f2c94c');
        ctx.fillStyle = centerGradient;
        ctx.fillRect(centerX, centerY, centerSize, centerSize);
        ctx.strokeStyle = '#cfa00c';
        ctx.strokeRect(centerX, centerY, centerSize, centerSize);

        const drawSticker = (colorCode, x, y, w, h) => {
            const base = colors[colorCode] || fallback;
            const stickerGradient = ctx.createLinearGradient(x, y, x + w, y + h);
            stickerGradient.addColorStop(0, base);
            stickerGradient.addColorStop(1, shadeColor(base, -20));
            ctx.fillStyle = stickerGradient;
            ctx.fillRect(x, y, w, h);
            ctx.strokeStyle = '#222';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, w, h);
        };

        for (let i = 0; i < 3; i++) {
            const x = squareX + i * segment + gap;
            const y = squareY + size - thickness - gap;
            drawSticker(pattern[i], x, y, segment - 2 * gap, thickness);
        }

        for (let i = 0; i < 3; i++) {
            const idx = 3 + i;
            const x = squareX + size - thickness - gap;
            const y = squareY + size - (i + 1) * segment + gap;
            drawSticker(pattern[idx], x, y, thickness, segment - 2 * gap);
        }

        for (let i = 0; i < 3; i++) {
            const idx = 6 + i;
            const x = squareX + size - (i + 1) * segment + gap;
            const y = squareY + gap;
            drawSticker(pattern[idx], x, y, segment - 2 * gap, thickness);
        }

        for (let i = 0; i < 3; i++) {
            const idx = 9 + i;
            const x = squareX + gap;
            const y = squareY + i * segment + gap;
            drawSticker(pattern[idx], x, y, thickness, segment - 2 * gap);
        }

        ctx.fillStyle = '#1f2d3d';
        ctx.font = '13px "Segoe UI", Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Front', width / 2, squareY + size + 24);
    }

    function shadeColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const r = Math.min(255, Math.max(0, (num >> 16) + percent));
        const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + percent));
        const b = Math.min(255, Math.max(0, (num & 0x0000FF) + percent));
        return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
    }

    function clearPLLPreview() {
        if (!previewCanvas) {
            return;
        }
        const ctx = previewCanvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        }
    }

    function populatePLLTable(data) {
        if (!libraryContainer) {
            return;
        }
        libraryContainer.innerHTML = data
            .map(item => {
                const name = escapeHtml(item.name);
                const formula = escapeHtml(item.formula);
                const pattern = escapeHtml(item.pattern);
                return `
                    <div class="pll-card">
                        <h4>${name}</h4>
                        <p>${formula}</p>
                        <code>${pattern}</code>
                    </div>
                `;
            })
            .join('');
    }
}

function getAllTopRotations(topPattern) {
    const rotations = [topPattern];
    let current = topPattern;
    for (let i = 0; i < 3; i++) {
        current = rotateTopPattern(current);
        rotations.push(current);
    }
    return rotations;
}

function rotateTopPattern(pattern) {
    const map = [5, 3, 0, 6, 1, 7, 4, 2];
    let rotated = '';
    for (let i = 0; i < 8; i++) {
        rotated += pattern[map[i]];
    }
    return rotated;
}

function getAllEdgeRotations(edgePattern) {
    const rotations = [edgePattern];
    let current = edgePattern;
    for (let i = 0; i < 3; i++) {
        current = rotateEdgeSequence(current);
        rotations.push(current);
    }
    return rotations;
}

function rotateEdgeSequence(sequence) {
    if (!sequence || sequence.length !== 12) {
        return sequence;
    }
    return (
        sequence[5] + sequence[4] + sequence[3] +
        sequence[6] + sequence[7] + sequence[8] +
        sequence[11] + sequence[10] + sequence[9] +
        sequence[0] + sequence[1] + sequence[2]
    );
}

function getPatternRotations(pattern) {
    const rotations = [];
    let current = pattern;
    for (let i = 0; i < 4; i++) {
        rotations.push(current);
        current = rotateEdgeSequence(current);
    }
    return rotations;
}

function normalizePattern(pattern) {
    const mapping = new Map();
    let nextCode = 65; // 'A'
    let normalized = '';
    for (const ch of pattern) {
        if (!mapping.has(ch)) {
            mapping.set(ch, String.fromCharCode(nextCode));
            nextCode += 1;
        }
        normalized += mapping.get(ch);
    }
    return normalized;
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的单元格和边缘块
    const cells = document.querySelectorAll('.cell');
    const edges = document.querySelectorAll('.edge');
    const resetBtn = document.getElementById('reset-btn');
    const detectBtn = document.getElementById('detect-btn');
    const resultSection = document.querySelector('.result-section');
    const ollCase = document.getElementById('oll-case');
    const ollFormula = document.getElementById('oll-formula');

    // 初始化魔方状态
    let cubeState = {
        top: [
            false, false, false,  // 左上角、中上、右上角
            false, true,  false,  // 左中、中心(固定)、右中
            false, false, false   // 左下角、中下、右下角
        ],
        edges: [
            false, false, false,  // 顶部边缘块
            false, false, false,  // 左侧边缘块
            false, false, false,  // 右侧边缘块
            false, false, false   // 底部边缘块
        ]
    };

    // 为每个单元格添加点击事件
    cells.forEach((cell, index) => {
        // 跳过中心块（索引4）
        if (index === 4) return;
        
        cell.addEventListener('click', function() {
            // 切换黄色状态
            cell.classList.toggle('yellow');
            // 更新魔方状态
            cubeState.top[index] = cell.classList.contains('yellow');
        });
    });

    // 为每个边缘块添加点击事件
    edges.forEach((edge, index) => {
        edge.addEventListener('click', function() {
            // 切换黄色状态
            edge.classList.toggle('yellow');
            // 更新魔方状态
            cubeState.edges[index] = edge.classList.contains('yellow');
        });
    });

    // 重置按钮功能
    resetBtn.addEventListener('click', function() {
        // 重置所有单元格（保留中心块）
        cells.forEach((cell, index) => {
            if (index === 4) return;
            cell.classList.remove('yellow');
            cubeState.top[index] = false;
        });
        
        // 重置所有边缘块
        edges.forEach((edge, index) => {
            edge.classList.remove('yellow');
            cubeState.edges[index] = false;
        });
        
        // 隐藏结果区域
        resultSection.classList.remove('visible');
    });

    // 识别OLL情况
    detectBtn.addEventListener('click', function() {
        // 获取当前魔方状态的编码
        const stateCode = getStateCode();
        
        // 调试：显示当前状态码
        console.log('='.repeat(60));
        console.log('Current state code:', stateCode);
        
        // Test rotation for OLL33
        console.log('\n--- OLL33 Rotation Test ---');
        const oll33Top = '00111001';
        const oll33Edge = '110000000110';
        const oll33TopRotations = getAllTopRotations(oll33Top);
        const oll33EdgeRotations = getAllEdgeRotations(oll33Edge);
        
        console.log('Expected:');
        console.log('  0° - Top: 00111001, Edge: 110000000110');
        console.log(' 90° - Top: 01000111, Edge: 000110110000');
        console.log('180° - Top: 10011100, Edge: 011000000011');
        console.log('270° - Top: 11100010, Edge: 000011011000');
        
        console.log('\nActual:');
        for (let i = 0; i < 4; i++) {
            console.log(`${i * 90}°`.padStart(4) + ` - Top: ${oll33TopRotations[i]}, Edge: ${oll33EdgeRotations[i]}`);
        }
        
        // Test rotation for OLL22
        console.log('\n--- OLL22 Rotation Test ---');
        const oll22Top = '01011010';
        const oll22Edge = '001101000001';
        const oll22TopRotations = getAllTopRotations(oll22Top);
        const oll22EdgeRotations = getAllEdgeRotations(oll22Edge);
        
        console.log('Expected:');
        console.log('  0° - Top: 01011010, Edge: 001101000001');
        console.log(' 90° - Top: 01011010, Edge: 101001001000');
        console.log('180° - Top: 01011010, Edge: 100000101100');
        console.log('270° - Top: 01011010, Edge: 000100100101');
        
        console.log('\nActual:');
        for (let i = 0; i < 4; i++) {
            console.log(`${i * 90}°`.padStart(4) + ` - Top: ${oll22TopRotations[i]}, Edge: ${oll22EdgeRotations[i]}`);
        }
        
        console.log('\n--- Detection ---');
        
        // 识别OLL情况
        const detectedCase = detectOLLCase(stateCode);
        
        // 显示结果
        if (detectedCase) {
            ollCase.textContent = detectedCase.name;
            ollFormula.textContent = detectedCase.formula;
            
            // Update the mini cube preview
            updateMiniCubePreview(detectedCase.topPattern, detectedCase.edgePattern);
            
            resultSection.classList.add('visible');
        } else {
            ollCase.textContent = 'Not recognized';
            ollFormula.textContent = 'Please try a different OLL case';
            
            // Clear the mini cube preview
            clearMiniCubePreview();
            
            resultSection.classList.add('visible');
        }
    });

    // 获取当前魔方状态的编码
    function getStateCode() {
        // 顶面状态编码（8位，跳过中心块）
        // 顶面位置顺序：
        // 0: 左上角, 1: 上边,   2: 右上角
        // 3: 左边,   4: 中心(跳过), 5: 右边
        // 6: 左下角, 7: 下边,   8: 右下角
        let topCode = '';
        const topOrder = [0, 1, 2, 3, 5, 6, 7, 8]; // 跳过中心块(4)
        for (const index of topOrder) {
            topCode += cubeState.top[index] ? '1' : '0';
        }
        
        // 边缘块状态编码（12位）
        // 边缘块在UI中的分布：
        // Top edges (edge-1, edge-2, edge-3): 前面的上中、中上、上右
        // Left edges (edge-4, edge-5, edge-6): 左面的上中、中中、下中
        // Right edges (edge-7, edge-8, edge-9): 右面的上中、中中、下中
        // Bottom edges (edge-10, edge-11, edge-12): 后面的下中、中下、下右
        
        // 重新映射为标准的四个面的边缘块（每面3个）
        // 前面(F): edge-1(左), edge-2(中), edge-3(右)
        // 左面(L): edge-4(上), edge-5(中), edge-6(下)
        // 右面(R): edge-7(上), edge-8(中), edge-9(下)
        // 后面(B): edge-10(左), edge-11(中), edge-12(右)
        let edgeCode = '';
        for (let i = 0; i < 12; i++) {
            edgeCode += cubeState.edges[i] ? '1' : '0';
        }
        
        return topCode + edgeCode;
    }

    // 识别OLL情况
    function detectOLLCase(stateCode) {
        // 分离顶面和边缘块编码
        const topCode = stateCode.substring(0, 8);
        const edgeCode = stateCode.substring(8, 20);
        
        // 调试：显示分离的编码
        console.log('\n=== Detection Input ===');
        console.log('Current state - Top:', topCode, 'Edge:', edgeCode);
        
        // OLL case database (from cases file)
        const ollCases = [
            { name: 'OLL01', topPattern: '00000000', edgePattern: '010111111010', formula: "R U2 R2 F R F' U2 R' F R F'" },
            { name: 'OLL02', topPattern: '00000000', edgePattern: '011111010011', formula: "F R U R' U' S R U R' U' Fw'" },
            { name: 'OLL03', topPattern: '00000001', edgePattern: '110011110010', formula: "Fw R U R' U' Fw' U' F R U R' U' F'" },
            { name: 'OLL04', topPattern: '00100000', edgePattern: '010110011110', formula: "Fw R U R' U' Fw' U F R U R' U' F'" },
            { name: 'OLL05', topPattern: '00001011', edgePattern: '110011100000', formula: "Rw' U2 R U R' U Rw" },
            { name: 'OLL06', topPattern: '01101000', edgePattern: '000110001110', formula: "Rw U2 R' U' R U' Rw'" },
            { name: 'OLL07', topPattern: '01010100', edgePattern: '100000110011', formula: "Rw U R' U R U2 Rw'" },
            { name: 'OLL08', topPattern: '10010010', edgePattern: '011000011100', formula: "Rw' U' R U' R' U2 Rw" },
            { name: 'OLL09', topPattern: '01010001', edgePattern: '001100010110', formula: "R U R' U' R' F R2 U R' U' F'" },
            { name: 'OLL10', topPattern: '00110010', edgePattern: '110001010001', formula: "R U R' U R' F R F' R U2 R'" },
            { name: 'OLL11', topPattern: '00001110', edgePattern: '110010100001', formula: "Rw' R2 U R' U R U2 R' U M'" },
            { name: 'OLL12', topPattern: '00010011', edgePattern: '011100010100', formula: "Lw L2 U' L U' L' U2 L U' M'" },
            { name: 'OLL13', topPattern: '00011100', edgePattern: '110000100011', formula: "F U R U' R2 F' R U R U' R'" },
            { name: 'OLL14', topPattern: '00011001', edgePattern: '011100000110', formula: "R' F R U R' F' R y' R U' R'" },
            { name: 'OLL15', topPattern: '00011001', edgePattern: '110001100010', formula: "Rw' U' Rw R' U' R U Rw' U Rw" },
            { name: 'OLL16', topPattern: '00111000', edgePattern: '010100001110', formula: "Rw U Rw' R U R' U' Rw U' Rw'" },
            { name: 'OLL17', topPattern: '10000001', edgePattern: '011011010010', formula: "R U R' U R' F R F' U2 R' F R F'" },
            { name: 'OLL18', topPattern: '00100001', edgePattern: '010111010010', formula: "R U2 R2 F R F' U2 M' U R U' Rw'" },
            { name: 'OLL19', topPattern: '10100000', edgePattern: '010011011010', formula: "M U R U R' U' M' R' F R F'" },
            { name: 'OLL20', topPattern: '10100101', edgePattern: '010010010010', formula: "Rw U R' U' M2 U R U' R' U' M'" },
            { name: 'OLL21', topPattern: '01011010', edgePattern: '101000000101', formula: "R U2 R' U' R U R' U' R U' R'" },
            { name: 'OLL22', topPattern: '01011010', edgePattern: '001101000001', formula: "R U2 R2 U' R2 U' R2 U2 R" },
            { name: 'OLL23', topPattern: '01011111', edgePattern: '101000000000', formula: "R2 D' R U2 R' D R U2 R" },
            { name: 'OLL24', topPattern: '11111010', edgePattern: '000001001000', formula: "R' U' R' D' R U R' D R2" },
            { name: 'OLL25', topPattern: '11011011', edgePattern: '000000100100', formula: "R U2 R D R' U2 R D' R2" },
            { name: 'OLL26', topPattern: '11011010', edgePattern: '001000001100', formula: "R' U' R U' R' U2 R" },
            { name: 'OLL27', topPattern: '01111010', edgePattern: '100001000001', formula: "L U L' U L U2 L'" },
            { name: 'OLL28', topPattern: '11110101', edgePattern: '000000010010', formula: "Rw U R' U' M U R U' R'" },
            { name: 'OLL29', topPattern: '01110001', edgePattern: '100000010110', formula: "R U R' U' R U' R' F' U' F R U R'" },
            { name: 'OLL30', topPattern: '01010101', edgePattern: '000100110010', formula: "F R' F R2 U' R' U' R U R' F2" },
            { name: 'OLL31', topPattern: '01101001', edgePattern: '100010000110', formula: "R' U' F U R U' R' F' R" },
            { name: 'OLL32', topPattern: '00101011', edgePattern: '110010000100', formula: "R U2 R' U' F' U F R U' R'" },
            { name: 'OLL33', topPattern: '00111001', edgePattern: '110000000110', formula: "R U R' U' R' F R F'" },
            { name: 'OLL34', topPattern: '00011101', edgePattern: '010100100010', formula: "R U R2 U' R' F R U R U' F'" },
            { name: 'OLL35', topPattern: '10001011', edgePattern: '010010100100', formula: "R U2 R2 F R F' R U2 R'" },
            { name: 'OLL36', topPattern: '11001001', edgePattern: '001011000010', formula: "L' U' L U' L' U L U L F' L' F" },
            { name: 'OLL37', topPattern: '11010001', edgePattern: '000000110110', formula: "F R U' R' U' R U R' F'" },
            { name: 'OLL38', topPattern: '01110100', edgePattern: '100000011010', formula: "R U R' U R U' R' U' R' F R F'" },
            { name: 'OLL39', topPattern: '00111100', edgePattern: '010100000011', formula: "R U R' F' U' F U R U2 R'" },
            { name: 'OLL40', topPattern: '10011001', edgePattern: '011001000010', formula: "R' F R U R' U' F' U R" },
            { name: 'OLL41', topPattern: '01010101', edgePattern: '101000010010', formula: "R U R' U R U2 R' F R U R' U' F'" },
            { name: 'OLL42', topPattern: '10110010', edgePattern: '010000010101', formula: "R' U' R U' R' U2 R F R U R' U' F'" },
            { name: 'OLL43', topPattern: '11110000', edgePattern: '000000010111', formula: "R' U' F' U F R" },
            { name: 'OLL44', topPattern: '00101001', edgePattern: '010111000000', formula: "Fw R U R' U' Fw'" },
            { name: 'OLL45', topPattern: '00111001', edgePattern: '010101000010', formula: "F R U R' U' F'" },
            { name: 'OLL46', topPattern: '11000110', edgePattern: '000010111000', formula: "R' U' R' F R F' U R" },
            { name: 'OLL47', topPattern: '01001000', edgePattern: '100010101110', formula: "F' L' U' L U L' U' L U F" },
            { name: 'OLL48', topPattern: '01010000', edgePattern: '001101010011', formula: "F R U R' U' R U R' U' F'" },
            { name: 'OLL49', topPattern: '01001000', edgePattern: '001111000011', formula: "Rw U' Rw2 U Rw2 U Rw2 U' Rw" },
            { name: 'OLL50', topPattern: '00001010', edgePattern: '011111000001', formula: "Rw' U Rw2 U' Rw2 U' Rw2 U Rw'" },
            { name: 'OLL51', topPattern: '00011000', edgePattern: '110000101110', formula: "F U R U' R' U R U' R' F'" },
            { name: 'OLL52', topPattern: '01000010', edgePattern: '001111010001', formula: "R' F' U' F U' R U R' U R" },
            { name: 'OLL53', topPattern: '00001010', edgePattern: '010111101000', formula: "Rw' U' R U' R' U R U' R' U2 Rw" },
            { name: 'OLL54', topPattern: '01001000', edgePattern: '000111101010', formula: "Rw U R' U R U' R' U R U2 Rw'" },
            { name: 'OLL55', topPattern: '00011000', edgePattern: '111000000111', formula: "R' F R U R U' R2 F' R2 U' R' U R U R'" },
            { name: 'OLL56', topPattern: '00011000', edgePattern: '010101101010', formula: "Rw U Rw' U R U' R' U R U' R' Rw U' Rw'" },
            { name: 'OLL57', topPattern: '10111101', edgePattern: '010000000010', formula: "R U R' U' M' U R U' Rw'" }
        ];

        // 检查当前状态是否匹配任何OLL情况（包括旋转）
        for (const oll of ollCases) {
            // 获取顶面图案和边缘块的所有旋转变体
            const topVariants = getAllTopRotations(oll.topPattern);
            const edgeVariants = getAllEdgeRotations(oll.edgePattern);
            
            // Debug: Log patterns for OLL33 and OLL22
            if (oll.name === 'OLL33' || oll.name === 'OLL22') {
                console.log(`\nChecking ${oll.name}:`);
                console.log(`  Original - Top: ${oll.topPattern}, Edge: ${oll.edgePattern}`);
                for (let i = 0; i < 4; i++) {
                    console.log(`  ${i * 90}° - Top: ${topVariants[i]}, Edge: ${edgeVariants[i]}`);
                }
            }
            
            // 检查所有旋转组合
            for (let i = 0; i < 4; i++) {
                if (topVariants[i] === topCode && edgeVariants[i] === edgeCode) {
                    console.log(`\n✓ Match found: ${oll.name} at rotation ${i * 90}°`);
                    console.log(`  Pattern - Top: ${topVariants[i]}, Edge: ${edgeVariants[i]}`);
                    return oll;
                }
            }
        }

        // 调试：显示未识别的状态
        console.log('Unrecognized state - Top:', topCode, 'Edge:', edgeCode);
        
        return null;  // 未识别的情况
    }
    
    // 获取顶面图案的所有旋转变体
    function getAllTopRotations(topPattern) {
        const rotations = [topPattern];
        let current = topPattern;
        
        // 添加90度、180度、270度旋转状态
        for (let i = 0; i < 3; i++) {
            current = rotateTopPattern(current);
            rotations.push(current);
        }
        
        return rotations;
    }
    
    // 旋转顶面图案90度
    function rotateTopPattern(pattern) {
        // Pattern has 8 bits representing positions (excluding center):
        // Bit index: 0 1 2 3 4 5 6 7
        // Position:  0 1 2 3 5 6 7 8 (skipping center at position 4)
        // Layout:    0 1 2
        //            3 X 5
        //            6 7 8
        // 
        // After 90° clockwise: 6 3 0
        //                      7 X 1
        //                      8 5 2
        // 
        // Mapping: new bit i gets value from old bit map[i]
        // New bit 0 (pos 6) ← Old bit 5 (pos 6)
        // New bit 1 (pos 3) ← Old bit 3 (pos 3)
        // New bit 2 (pos 0) ← Old bit 0 (pos 0)
        // New bit 3 (pos 7) ← Old bit 6 (pos 7)
        // New bit 4 (pos 1) ← Old bit 1 (pos 1)
        // New bit 5 (pos 8) ← Old bit 7 (pos 8)
        // New bit 6 (pos 5) ← Old bit 4 (pos 5)
        // New bit 7 (pos 2) ← Old bit 2 (pos 2)
        const map = [5, 3, 0, 6, 1, 7, 4, 2];
        let rotated = '';
        for (let i = 0; i < 8; i++) {
            rotated += pattern[map[i]];
        }
        return rotated;
    }

    // 获取状态的所有旋转变体（0度、90度、180度、270度）
    function getAllRotations(stateCode) {
        const rotations = [];
        let current = stateCode;
        
        // 添加原始状态
        rotations.push(current);
        
        // 添加90度、180度、270度旋转状态
        for (let i = 0; i < 3; i++) {
            current = rotateState(current, 90);
            rotations.push(current);
        }
        
        return rotations;
    }
    
    // 获取边缘块图案的所有旋转变体
    function getAllEdgeRotations(edgePattern) {
        const rotations = [edgePattern];
        let current = edgePattern;
        
        // 添加90度、180度、270度旋转状态
        for (let i = 0; i < 3; i++) {
            current = rotateEdgePattern(current);
            rotations.push(current);
        }
        
        return rotations;
    }

    // 将状态旋转指定角度（90度的倍数）
    function rotateState(stateCode, angle) {
        if (angle % 90 !== 0) {
            return stateCode; // 只支持90度的倍数旋转
        }
        
        const rotations = angle / 90;
        let result = stateCode;
        
        for (let i = 0; i < rotations; i++) {
            result = rotate90Degrees(result);
        }
        
        return result;
    }

    // 将状态旋转90度
    function rotate90Degrees(stateCode) {
        // 解析状态码
        const top = stateCode.substring(0, 8);
        const edges = stateCode.substring(8, 20);
        
        // 顶面旋转90度
        const rotatedTop = rotateTopPattern(top);
        
        // 边缘块旋转90度
        const rotatedEdges = rotateEdgePattern(edges);
        
        return rotatedTop + rotatedEdges;
    }
    
    // 将边缘块图案旋转90度
    function rotateEdgePattern(edgePattern) {
        // Edge pattern layout (12 bits):
        // Front: 0,1,2 (left, center, right)
        // Left:  3,4,5 (top, center, bottom)
        // Right: 6,7,8 (top, center, bottom)  
        // Back:  9,10,11 (left, center, right)
        
        // When rotating 90° clockwise (viewed from top):
        // F → R (no reverse)
        // R → B (REVERSE)
        // B → L (no reverse)
        // L → F (REVERSE)
        
        let rotated = '';
        
        // New Front ← Old Left (REVERSED)
        rotated += edgePattern[5] + edgePattern[4] + edgePattern[3];
        
        // New Left ← Old Back (no reversal)
        rotated += edgePattern[9] + edgePattern[10] + edgePattern[11];
        
        // New Right ← Old Front (no reversal)
        rotated += edgePattern[0] + edgePattern[1] + edgePattern[2];
        
        // New Back ← Old Right (REVERSED)
        rotated += edgePattern[8] + edgePattern[7] + edgePattern[6];
        
        return rotated;
    }

    // 初始化页面
    function initPage() {
        // 检查当前页面是首页还是OLL页面
        if (window.location.pathname.includes('oll.html')) {
            // OLL页面初始化
            console.log('OLL页面已加载');
            
            // 添加测试模式按钮事件
            const testBtn = document.getElementById('test-btn');
            const testModePanel = document.getElementById('test-mode-panel');
            
            if (testBtn && testModePanel) {
                testBtn.addEventListener('click', function() {
                    testModePanel.classList.toggle('hidden');
                    if (!testModePanel.classList.contains('hidden')) {
                        createTestButtons();
                    }
                });
            }
        } else if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            // 首页初始化
            console.log('首页已加载');
        }
    }
    
    // 创建测试按钮
    function createTestButtons() {
        const container = document.getElementById('test-cases-container');
        if (!container) return;
        
        // 清空容器
        container.innerHTML = '';
        
        // 测试用的OLL情况 - 常见的OLL案例（已修正）
        const testCases = [
            { name: 'OLL21', topPattern: '01011010', edgePattern: '101000000101' },
            { name: 'OLL22', topPattern: '01011010', edgePattern: '001101000001' },
            { name: 'OLL22 (90°)', topPattern: '01011010', edgePattern: '101001001000' },
            { name: 'OLL26', topPattern: '11011010', edgePattern: '001000001100' },
            { name: 'OLL27', topPattern: '01111010', edgePattern: '100001000001' },
            { name: 'OLL33', topPattern: '00111001', edgePattern: '110000000110' },
            { name: 'OLL33 (90°)', topPattern: '01000111', edgePattern: '000110110000' },
            { name: 'OLL33 (180°)', topPattern: '10011100', edgePattern: '011000000011' },
            { name: 'OLL33 (270°)', topPattern: '11100010', edgePattern: '000011011000' },
            { name: 'OLL45', topPattern: '00111001', edgePattern: '010101000010' },
            { name: 'OLL07', topPattern: '01010100', edgePattern: '100000110011' },
            { name: 'OLL09', topPattern: '01010001', edgePattern: '001100010110' },
            { name: 'OLL28', topPattern: '11110101', edgePattern: '000000010010' },
            { name: 'OLL57', topPattern: '10111101', edgePattern: '010000000010' }
        ];
        
        // 创建测试按钮
        testCases.forEach(testCase => {
            const button = document.createElement('button');
            button.className = 'test-case-btn';
            button.textContent = testCase.name;
            
            button.addEventListener('click', function() {
                setCubeStateFromPatterns(testCase.topPattern, testCase.edgePattern);
            });
            
            container.appendChild(button);
        });
    }
    
    // 根据状态码设置魔方状态
    function setCubeState(stateCode) {
        // 重置魔方状态
        resetBtn.click();
        
        // 解析状态码
        const topCode = stateCode.substring(0, 8);
        const edgeCode = stateCode.substring(8, 20);
        
        setCubeStateFromPatterns(topCode, edgeCode);
    }
    
    // 根据顶面和边缘块图案设置魔方状态
    function setCubeStateFromPatterns(topPattern, edgePattern) {
        // 重置魔方状态
        resetBtn.click();
        
        // 顶面位置顺序：[0, 1, 2, 3, 5, 6, 7, 8]
        const topOrder = [0, 1, 2, 3, 5, 6, 7, 8];
        
        // 设置顶面状态
        for (let i = 0; i < 8; i++) {
            const index = topOrder[i];
            if (topPattern[i] === '1') {
                cells[index].classList.add('yellow');
                cubeState.top[index] = true;
            }
        }
        
        // 设置边缘块状态
        for (let i = 0; i < 12; i++) {
            if (edgePattern[i] === '1') {
                edges[i].classList.add('yellow');
                cubeState.edges[i] = true;
            }
        }
    }
    
    // 更新迷你魔方预览
    function updateMiniCubePreview(topPattern, edgePattern) {
        const miniCells = document.querySelectorAll('.mini-cell');
        const miniEdges = document.querySelectorAll('.mini-edge');
        
        // 顶面位置顺序：[0, 1, 2, 3, 5, 6, 7, 8]
        const topOrder = [0, 1, 2, 3, 5, 6, 7, 8];
        
        // 设置顶面状态
        for (let i = 0; i < 8; i++) {
            const index = topOrder[i];
            if (topPattern[i] === '1') {
                miniCells[index].classList.add('yellow');
            } else {
                miniCells[index].classList.remove('yellow');
            }
        }
        
        // 设置边缘块状态
        for (let i = 0; i < 12; i++) {
            if (edgePattern[i] === '1') {
                miniEdges[i].classList.add('yellow');
            } else {
                miniEdges[i].classList.remove('yellow');
            }
        }
    }
    
    // 清除迷你魔方预览
    function clearMiniCubePreview() {
        const miniCells = document.querySelectorAll('.mini-cell');
        const miniEdges = document.querySelectorAll('.mini-edge');
        
        // 清除所有黄色（除了中心块）
        miniCells.forEach((cell, index) => {
            if (index !== 4) { // Skip center cell
                cell.classList.remove('yellow');
            }
        });
        
        miniEdges.forEach(edge => {
            edge.classList.remove('yellow');
        });
    }

    // 初始化页面
    initPage();
});
