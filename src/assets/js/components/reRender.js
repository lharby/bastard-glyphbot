/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

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
