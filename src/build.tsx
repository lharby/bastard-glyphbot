import { rndAlphabet, rndGlyph, rndFontFamily } from './assets/js/utils/fontUtils';
import { removeLoading } from './assets/js/components/load';

console.log(rndAlphabet(), rndGlyph(), rndFontFamily());

setTimeout(() => {
    removeLoading();
}, 1000)

