import { removeLoading } from './assets/js/components/load';
import { renderSVG } from './assets/js/components/renderSVG';
import { reRender } from './assets/js/components/reRender';

setTimeout(() => {
    removeLoading();
    renderSVG();
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.render');
    trigger?.addEventListener('click', () => {
        reRender();
    });
});
