import { rndAlphabet } from "../utils/fontUtils";

const arrElems = [0, 1];
const svgURL = 'http://www.w3.org/2000/svg';

const renderSVG = () => {
    // TODO give this a classname
	const svgElem = document.createElementNS(svgURL, 'svg');
	for (let [index] of arrElems.entries()) {
        let rndForm = rndAlphabet();
    	const elem = document.createElementNS(svgURL,'text');
        let xVal = 75;
        if (index === 1) {
            xVal = 250;
        }
        elem.innerHTML = `<tspan x=${xVal} y=${window.innerHeight /2 + 50} >${rndForm}</tspan>`;
        svgElem.appendChild(elem);
    }
    svgElem.setAttribute('width', window.innerWidth + 'px');
    svgElem.setAttribute('height', window.innerHeight + 'px');
    document.body.appendChild(svgElem);
}

export {
    renderSVG
}