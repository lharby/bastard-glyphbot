import './assets/js/utils/includeHTML';
import { htmlElem } from './assets/js/utils/globals';
import { removeLoading } from './assets/js/components/load';
import { setDirectoryNames } from './assets/js/utils/setDirectoryNames';
import { renderSVG } from './assets/js/components/renderSVG';
import { reRender } from './assets/js/components/reRender';
import { fontMap } from './assets/js/components/fontMap';
import { primaryDir } from './assets/js/utils/setDirectoryNames';
import { fontSwitcher } from './assets/js/components/fontSwitcher';

setTimeout(() => {
    removeLoading();
    if (htmlElem?.classList.contains('index')) {
        renderSVG();
    }
}, 100);

document.addEventListener('DOMContentLoaded', () => {
    setDirectoryNames();
    if (primaryDir.match('files')) {
        fontMap('Calluna-Regular.otf');
        fontSwitcher();
    }
});

document.addEventListener('click', (event) => {
    const trigger = event.target as HTMLButtonElement;
        if (trigger.classList.contains('render')) {
        reRender();
    }
});
