import { rndAlphabet, rndFontFamily, rndGlyph } from "../utils/fontUtils";
import { convertFontToGlyph } from "./convertFontToGlyph";

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
    	const elem = document.createElementNS(svgURL, 'text');
        let xVal = 75;
        let yVal = 200;
        elem.setAttribute('class', className);
        if (index === 1) {
            xVal = 250;
            rndForm = rndGlyph();
        }
        elem.innerHTML = `<tspan x=${xVal} y=${yVal} >${rndForm}</tspan>`;
        svgElem.appendChild(elem);
        console.log(rndFontFamilyInit, rndForm, className);
        convertFontToGlyph(rndFontFamilyInit, rndForm, xVal, yVal); // TODO get this working! Move outside of loop?
    }
    svgElem.setAttribute('width', (window.innerWidth - 50) + 'px');
    svgElem.setAttribute('height', window.innerHeight + 'px');
    document.body.appendChild(svgElem);
}

export {
    renderSVG
}