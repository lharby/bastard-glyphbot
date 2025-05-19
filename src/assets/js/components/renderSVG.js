/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { rndAlphabet, rndFontFamily, rndGlyph } from '../utils/fontUtils';
import { convertFontToGlyph } from './convertFontToGlyph';

// TODO change this to min 2, max 3;
const arrElems = [0, 1];
const svgURL = 'http://www.w3.org/2000/svg';

const renderSVG = () => {
    // TODO don't create this, just append it to the single svg-element. 
    // Do we need to store the fonts in memory? 
	const svgElem = document.createElementNS(svgURL, 'svg');
    svgElem.setAttribute('class', 'svg-element');
	for (let [index] of arrElems.entries()) {
        const rndFontFamilyInit = rndFontFamily();
        const className = rndFontFamilyInit.split('.')[0].toLowerCase();
        let rndForm = rndAlphabet();
    	const elem = document.createElementNS(svgURL, 'text');
        let xVal = 75;
        let yVal = 400;
        elem.setAttribute('class', className);
        if (index === 1) {
            xVal = 250;
            rndForm = rndGlyph();
        }
        elem.innerHTML = `<tspan x=${xVal} y=${yVal} >${rndForm}</tspan>`;
        svgElem.appendChild(elem);
        console.table(`glyph: ${index + rndForm}`);
        convertFontToGlyph(rndFontFamilyInit, rndForm, xVal, yVal);
    }
    svgElem.setAttribute('width', (window.innerWidth - 50) + 'px');
    svgElem.setAttribute('height', window.innerHeight + 'px');
    // After convertFontToGlyph can we remove this from the DOM?
    // Or add it to an element off the canvas/hidden etc. 
    document.body.appendChild(svgElem);
}

export {
    renderSVG
}