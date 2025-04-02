// TODO change this to use opentypejs import
import { htmlElem } from '../utils/globals';
import { arrAlphabet, arrGlyphs } from '../utils/fontUtils';
import { waitForElement } from '../utils/waitForElement';

const fontMap = () => {
    waitForElement('.characters ul',).then(() => {
        useCallback();
    }).catch((error) => {
        console.error('Error:', error);
    });
    const useCallback = () => {
        const wrapper = htmlElem.querySelector('.characters ul');
        const arrGlyphMap = arrAlphabet.concat(arrGlyphs);
        arrGlyphMap.forEach((item, index) => {
            if (item !== null) {
                const template = `<li>${item}<span class='index-number'>${index}</span></li>`;
                wrapper.insertAdjacentHTML('beforeend', template);
            } else {
                console.log('item: ', item);
            }
        });
    }
}

export {
    fontMap
}