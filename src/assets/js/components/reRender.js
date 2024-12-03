import { renderSVG } from "./renderSVG";

const reRender = () => {
    document.addEventListener('click', (event) => {
        // TODO detect via classname
        const svgElem = document.querySelector('svg');
        if (event.target.classList.contains('render')) {
            svgElem.remove();
            renderSVG();            
        }
    });
}

export {
    reRender
}
