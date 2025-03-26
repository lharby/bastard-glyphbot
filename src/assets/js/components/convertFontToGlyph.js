const fontPath = './fonts';
const svgElem = document.querySelector('.svg-element');

const convertFontToGlyph = (fontName, letter, x, y) => {
    const url = `${fontPath}/${fontName}`;
    const buffer = fetch(url)
        .then(res => res.arrayBuffer());

    buffer.then(data => {
        const font = opentype.parse(data);
        const glyph = font.getPath(letter, x, y, 400);
        const svgGlyph = glyph.toSVG();
        const template = `<g x=${x} y=${y}>${svgGlyph}</g>`;
        svgElem.insertAdjacentHTML('beforeend', template);
        svgElem.setAttribute('width', (window.innerWidth - 50) + 'px');
        svgElem.setAttribute('height', window.innerHeight + 'px');
    });
}

export {
    convertFontToGlyph
}