import { renderSVG } from './renderSVG';

const reRender = () => {
    const svgElem = document.querySelector('.svg-element');
    if (svgElem) {
        svgElem.remove();
        renderSVG();            
    }
}

export {
    reRender
}
