/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { htmlElem } from '../utils/globals';
import { waitForElement } from '../utils/waitForElement';

const fontPath = '../fonts';

const fontMap = (fontName) => {
    const glyphCount = htmlElem.querySelector('.glyph-count');
    waitForElement('#characters ul',).then(() => {
        useCallback();
    }).catch((error) => {
        console.error('Error:', error);
    });
    const useCallback = () => {
        const url = `${fontPath}/${fontName}`;
        const buffer = fetch(url).then((res) => res.arrayBuffer());
        if (glyphCount) {
            glyphCount.textContent = '';
        }

        buffer.then((data) => {
            const wrapper = htmlElem.querySelector('#characters ul');
            const font = opentype.parse(data);
            const glyphs = font.glyphs.glyphs;
            for (const [key, value] of Object.entries(glyphs)) {
                if (
                    typeof value.unicode !== 'undefined' &&
                    !value.name.startsWith('uni') &&
                    value.path.commands.length !== 0
                ) {
                    const template = `<li>
                        ${String.fromCharCode(value.unicode)}
                        <span class='index-number'>${key}</span>
                    </li>`;
                    wrapper.insertAdjacentHTML('beforeend', template);
                }
            }
            if (glyphCount) {
                glyphCount.textContent = wrapper.querySelectorAll('li').length;
            }
        });
    }
};

fontMap('BigCaslon.otf');

export {
    fontMap
}