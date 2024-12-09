const fontPath = './fonts';

const convertFontToGlyph = (fontName) => {
    const url = `${fontPath}/${fontName}`;
    const buffer = fetch(url)
        .then(res => res.arrayBuffer());

    buffer.then(data => {
        const font = opentype.parse(data);
        const arrGlyhps = font.glyphs.glyphs;
        console.log(arrGlyhps);
    });
}

export {
    convertFontToGlyph
}