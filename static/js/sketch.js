const arrElems = [0, 1];

function preload() {
    loadFont('../fonts/BigCaslon.otf');
    loadFont('../fonts/Calluna-Regular.otf');
    loadFont('../fonts/Fette-Fraktur.otf');
    loadFont('../fonts/HelveticaNeue-Bold.otf');
    loadFont('../fonts/LoRes-Bold.otf');
    loadFont('../fonts/WSH-Grotesk-Regular.otf');
    loadFont('../fonts/Zapfino.otf');
}

function setup() {
    noCanvas();
    const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (let [index, item] of arrElems.entries()) {
        let rndFontFamilyInit = rndFontFamily();
        let xVal = 75;
        let rndClass = '';
        let rndForm = rndAlphabet();
        elem = document.createElementNS('http://www.w3.org/2000/svg','text');
        className = rndFontFamilyInit.split('.')[0].toLowerCase();
        elem.setAttribute('class', className);
        if (index === 1) {
            xVal = 250;
            rndForm = rndGlyph();
            rndClass = 'outline';
        }
        elem.innerHTML = `<tspan class="${rndClass}" x="${xVal}" y="500">${rndForm}</tspan>`;
        svgElem.appendChild(elem);
        console.log(className);
    }
    svgElem.setAttribute('width', windowWidth);
    svgElem.setAttribute('height', windowHeight);
    document.body.appendChild(svgElem);
}