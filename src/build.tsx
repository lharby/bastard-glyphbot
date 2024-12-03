import { removeLoading } from './assets/js/components/load';
import { renderSVG } from './assets/js/components/renderSVG';
import { reRender } from './assets/js/components/reRender';

setTimeout(() => {
    removeLoading();
    renderSVG();
    reRender();
}, 1000);

