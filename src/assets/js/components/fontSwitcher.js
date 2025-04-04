/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { htmlElem } from '../utils/globals';
import { waitForElement } from '../utils/waitForElement';
import { fontMap } from './fontMap';

const fontSwitcher = () => {
    waitForElement('#characters').then(() => {
        useCallback();
    }).catch((error) => {
        console.error('Error:', error);
    });
    const useCallback = () => {
        const trigger = htmlElem.querySelector('[name="change-font"]');
        const wrapper = htmlElem.querySelector('#characters');
        const list = wrapper.querySelector('ul');
        trigger.addEventListener('change', (event) => {
            list.replaceChildren();
            wrapper.removeAttribute('class');
            wrapper.classList.add(event.target.value);
            const { text } = [...trigger.options].find((option) => option.selected);
            fontMap(`${text}.otf`);
            return;
        });
    }
}

export {
    fontSwitcher
}