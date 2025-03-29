import { htmlElem } from "../utils/globals";
const fontPath = '/fonts';

const fontMap = (fontName) => {
    const url = `${fontPath}/${fontName}`;
    const buffer = fetch(url)
        .then(res => res.arrayBuffer());

    buffer.then(data => {
        const wrapper = htmlElem.querySelector('.characters ul');
        const font = opentype.parse(data);
        const glyphs = font.glyphs.glyphs;
        for (const [key, value] of Object.entries(glyphs)) {
            if (value.name !== null) {
                const template = `<li>${value.name}</li>`;
                wrapper.insertAdjacentHTML('beforeend', template);
                console.log(value);
            }
        }
    });
}

export {
    fontMap
}