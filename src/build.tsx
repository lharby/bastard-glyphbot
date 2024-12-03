import { rndAlphabet, rndGlyph, rndFontFamily } from './assets/js/utils/fontUtils';
import { removeLoading } from './assets/js/components/load';
import { renderSVG } from './assets/js/components/renderSVG';
import { reRender } from './assets/js/components/reRender';

console.log(rndAlphabet(), rndGlyph(), rndFontFamily());

setTimeout(() => {
    removeLoading();
    renderSVG();
    reRender();
}, 1000);

