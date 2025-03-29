const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const glyphs =
    "!#$%&()*+-/:;<=>?@[]^_{|}~¡¢£¤¥¦§©ª«¬-®°±µ¶»¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžƒǺǻǼǽǾǿȘșȚț˚˜;΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѢѣѲѳѴѵҐґẀẁẂẃẄẅỲỳ†‡‰′″‹›‽⁄€℅ℓ№℗™Ω℮⅛⅜⅝⅞∂∆∏∑∕∙√∞∫≈≠≤≥ﬀﬁﬂﬃﬄ";

const arrAlphabet = [...alphabet];

const arrGlyphs = [...glyphs];

const arrFontFamilies = [
    'BigCaslon.otf',
    'Calluna-Regular.otf',
    'CascadiaCode-Light.otf',
    'Fette-Fraktur.otf',
    'HelveticaNeue-Bold.otf',
    'LoRes-Bold.otf',
    'WSH-Grotesk-Regular.otf',
    'Zapfino.otf'
];

const rndAlphabet = () => arrAlphabet[Math.floor(Math.random() * arrAlphabet.length)].toString(); 
const rndGlyph = () => arrGlyphs[Math.floor(Math.random() * arrAlphabet.length)].toString();
const rndFontFamily = () => arrFontFamilies[Math.floor(Math.random() * arrFontFamilies.length)].toString();

export {
    arrFontFamilies,
    rndAlphabet,
    rndGlyph,
    rndFontFamily
}