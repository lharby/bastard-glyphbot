import { renderSVG } from "./renderSVG";

const reRender = () => {
    document.addEventListener('click', (event) => {
        const svgElem = document.querySelector('.svg-element');
        if (event.target.classList.contains('render')) {
            svgElem.remove();
            renderSVG();            
        }
    });
}

export {
    reRender
}
