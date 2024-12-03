import { rndAlphabet, rndFontFamily, rndGlyph } from "../utils/fontUtils";

// TODO change this to min 2, max 3;
const arrElems = [0, 1];
const svgURL = 'http://www.w3.org/2000/svg';

const renderSVG = () => {
	const svgElem = document.createElementNS(svgURL, 'svg');
    svgElem.setAttribute('class', 'svg-element');
	for (let [index] of arrElems.entries()) {
        const rndFontFamilyInit = rndFontFamily();
        const className = rndFontFamilyInit.split('.')[0].toLowerCase();
        let rndForm = rndAlphabet();
    	const elem = document.createElementNS(svgURL,'text');
        let xVal = 75;
        elem.setAttribute('class', className);
        if (index === 1) {
            xVal = 250;
            rndForm = rndGlyph();
        }
        elem.innerHTML = `<tspan x=${xVal} y=${window.innerHeight /2 + 100} >${rndForm}</tspan>`;
        svgElem.appendChild(elem);
        console.log(rndForm, className);
    }
    svgElem.setAttribute('width', (window.innerWidth - 50) + 'px');
    svgElem.setAttribute('height', window.innerHeight + 'px');
    document.body.appendChild(svgElem);
}

export {
    renderSVG
}