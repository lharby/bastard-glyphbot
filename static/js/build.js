// src/assets/js/utils/includeHTML.js
class IncludeHTML extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Loading...";
    this.loadContent();
  }
  async loadContent() {
    const source = this.getAttribute("src");
    if (!source) {
      throw new Error("No src attribute given.");
    }
    const response = await fetch(source);
    if (response.status !== 200) {
      throw new Error(`Could not load resource: ${source}`);
    }
    const content = await response.text();
    this.innerHTML = content;
  }
}
window.customElements.define("html-include", IncludeHTML);

// src/assets/js/utils/globals.js
var htmlElem = document.querySelector("html");

// src/assets/js/components/load.js
var elem = document.querySelector("#loading");
var removeLoading = () => {
  elem.classList.remove("loadingclass");
};

// src/assets/js/utils/setDirectoryNames.js
var htmlElem2 = document.querySelector("html");
var arrPaths = document.location.pathname.split("/");
var newPaths = arrPaths.map((item) => item.replace(".html", ""));
var primaryDir = arrPaths[1];
var pathnames = newPaths.filter((item) => item !== "");
var setDirectoryNames = () => {
  if (!primaryDir) {
    htmlElem2.classList.add("index");
  } else {
    htmlElem2.classList.add(...pathnames);
  }
};

// src/assets/js/utils/fontUtils.js
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var glyphs = "!#$%&()*+-/:;<=>?@[]^_{|}~\xA1\xA2\xA3\xA4\xA5\xA6\xA7\xA9\xAA\xAB\xAC-\xAE\xB0\xB1\xB5\xB6\xBB\xBF\xC0\xC1\xC2\xC3\xC4\xC5\xC6\xC7\xC8\xC9\xCA\xCB\xCC\xCD\xCE\xCF\xD0\xD1\xD2\xD3\xD4\xD5\xD6\xD7\xD8\xD9\xDA\xDB\xDC\xDD\xDE\xDF\xE0\xE1\xE2\xE3\xE4\xE5\xE6\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF0\xF1\xF2\xF3\xF4\xF5\xF6\xF7\xF8\xF9\xFA\xFB\xFC\xFD\xFE\xFF\u0100\u0101\u0102\u0103\u0104\u0105\u0106\u0107\u0108\u0109\u010A\u010B\u010C\u010D\u010E\u010F\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u0118\u0119\u011A\u011B\u011C\u011D\u011E\u011F\u0120\u0121\u0122\u0123\u0124\u0125\u0126\u0127\u0128\u0129\u012A\u012B\u012C\u012D\u012E\u012F\u0130\u0131\u0132\u0133\u0134\u0135\u0136\u0137\u0138\u0139\u013A\u013B\u013C\u013D\u013E\u013F\u0140\u0141\u0142\u0143\u0144\u0145\u0146\u0147\u0148\u0149\u014A\u014B\u014C\u014D\u014E\u014F\u0150\u0151\u0152\u0153\u0154\u0155\u0156\u0157\u0158\u0159\u015A\u015B\u015C\u015D\u015E\u015F\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016A\u016B\u016C\u016D\u016E\u016F\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\u0179\u017A\u017B\u017C\u017D\u017E\u0192\u01FA\u01FB\u01FC\u01FD\u01FE\u01FF\u0218\u0219\u021A\u021B\u02DA\u02DC;\u0385\u0386\xB7\u0388\u0389\u038A\u038C\u038E\u038F\u0390\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C\u039D\u039E\u039F\u03A0\u03A1\u03A3\u03A4\u03A5\u03A6\u03A7\u03A8\u03A9\u03AA\u03AB\u03AC\u03AD\u03AE\u03AF\u03B0\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BB\u03BC\u03BD\u03BE\u03BF\u03C0\u03C1\u03C2\u03C3\u03C4\u03C5\u03C6\u03C7\u03C8\u03C9\u03CA\u03CB\u03CC\u03CD\u03CE\u0400\u0401\u0402\u0403\u0404\u0405\u0406\u0407\u0408\u0409\u040A\u040B\u040C\u040D\u040E\u040F\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E\u044F\u0450\u0451\u0452\u0453\u0454\u0455\u0456\u0457\u0458\u0459\u045A\u045B\u045C\u045D\u045E\u045F\u0462\u0463\u0472\u0473\u0474\u0475\u0490\u0491\u1E80\u1E81\u1E82\u1E83\u1E84\u1E85\u1EF2\u1EF3\u2020\u2021\u2030\u2032\u2033\u2039\u203A\u203D\u2044\u20AC\u2105\u2113\u2116\u2117\u2122\u03A9\u212E\u215B\u215C\u215D\u215E\u2202\u2206\u220F\u2211\u2215\u2219\u221A\u221E\u222B\u2248\u2260\u2264\u2265\uFB00\uFB01\uFB02\uFB03\uFB04";
var arrAlphabet = [...alphabet];
var arrGlyphs = [...glyphs];
var arrFontFamilies = [
  "BigCaslon.otf",
  "Calluna-Regular.otf",
  "CascadiaCode-Light.otf",
  "Fette-Fraktur.otf",
  "HelveticaNeue-Bold.otf",
  "LoRes-Bold.otf",
  "WSH-Grotesk-Regular.otf",
  "Zapfino.otf"
];
var rndAlphabet = () => arrAlphabet[Math.floor(Math.random() * arrAlphabet.length)].toString();
var rndGlyph = () => arrGlyphs[Math.floor(Math.random() * arrAlphabet.length)].toString();
var rndFontFamily = () => arrFontFamilies[Math.floor(Math.random() * arrFontFamilies.length)].toString();

// src/assets/js/components/convertFontToGlyph.js
var fontPath = "/fonts";
var svgElem = document.querySelector(".svg-element");
var convertFontToGlyph = (fontName, letter, x, y) => {
  const url = `${fontPath}/${fontName}`;
  const buffer = fetch(url).then((res) => res.arrayBuffer());
  buffer.then((data) => {
    if (svgElem) {
      const font = opentype.parse(data);
      const glyph = font.getPath(letter, x, y, 400);
      const svgGlyph = glyph.toSVG();
      const template = `<g x=${x} y=${y}>${svgGlyph}</g>`;
      svgElem.insertAdjacentHTML("beforeend", template);
      svgElem.setAttribute("width", window.innerWidth - 50 + "px");
      svgElem.setAttribute("height", window.innerHeight + "px");
      console.log(font);
    }
  });
};

// src/assets/js/components/renderSVG.js
var arrElems = [0, 1];
var svgURL = "http://www.w3.org/2000/svg";
var renderSVG = () => {
  const svgElem2 = document.createElementNS(svgURL, "svg");
  svgElem2.setAttribute("class", "svg-element");
  for (let [index] of arrElems.entries()) {
    const rndFontFamilyInit = rndFontFamily();
    const className = rndFontFamilyInit.split(".")[0].toLowerCase();
    let rndForm = rndAlphabet();
    const elem2 = document.createElementNS(svgURL, "text");
    let xVal = 75;
    let yVal = 400;
    elem2.setAttribute("class", className);
    if (index === 1) {
      xVal = 250;
      rndForm = rndGlyph();
    }
    elem2.innerHTML = `<tspan x=${xVal} y=${yVal} >${rndForm}</tspan>`;
    svgElem2.appendChild(elem2);
    console.log(rndFontFamilyInit, rndForm, className);
    convertFontToGlyph(rndFontFamilyInit, rndForm, xVal, yVal);
  }
  svgElem2.setAttribute("width", window.innerWidth - 50 + "px");
  svgElem2.setAttribute("height", window.innerHeight + "px");
  document.body.appendChild(svgElem2);
};

// src/assets/js/components/reRender.js
var reRender = () => {
  const svgElem2 = document.querySelector(".svg-element");
  if (svgElem2) {
    svgElem2.remove();
    renderSVG();
  }
};

// src/assets/js/utils/waitForElement.js
var waitForElement = (selector) => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
  });
};

// src/assets/js/components/fontMap.js
var fontPath2 = "../fonts";
var fontMap = (fontName) => {
  const glyphCount = htmlElem.querySelector(".glyph-count");
  waitForElement("#characters ul").then(() => {
    useCallback();
  }).catch((error) => {
    console.error("Error:", error);
  });
  const useCallback = () => {
    const url = `${fontPath2}/${fontName}`;
    const buffer = fetch(url).then((res) => res.arrayBuffer());
    if (glyphCount) {
      glyphCount.textContent = "";
    }
    buffer.then((data) => {
      const wrapper = htmlElem.querySelector("#characters ul");
      const font = opentype.parse(data);
      const glyphs2 = font.glyphs.glyphs;
      for (const [key, value] of Object.entries(glyphs2)) {
        if (typeof value.unicode !== "undefined" && !value.name.startsWith("uni") && value.path.commands.length !== 0) {
          const template = `<li>
                        ${String.fromCharCode(value.unicode)}
                        <span class='index-number'>${key}</span>
                    </li>`;
          wrapper.insertAdjacentHTML("beforeend", template);
        }
      }
      if (glyphCount) {
        glyphCount.textContent = wrapper.querySelectorAll("li").length;
      }
    });
  };
};
fontMap("BigCaslon.otf");

// src/assets/js/components/fontSwitcher.js
var fontSwitcher = () => {
  waitForElement("#characters").then(() => {
    useCallback();
  }).catch((error) => {
    console.error("Error:", error);
  });
  const useCallback = () => {
    const trigger = htmlElem.querySelector('[name="change-font"]');
    const wrapper = htmlElem.querySelector("#characters");
    const list = wrapper.querySelector("ul");
    trigger.addEventListener("change", (event) => {
      list.replaceChildren();
      wrapper.removeAttribute("class");
      wrapper.classList.add(event.target.value);
      const { text } = [...trigger.options].find((option) => option.selected);
      fontMap(`${text}.otf`);
      return;
    });
  };
};

// src/build.tsx
setTimeout(() => {
  removeLoading();
  if (htmlElem?.classList.contains("index")) {
    renderSVG();
  }
}, 100);
document.addEventListener("DOMContentLoaded", () => {
  setDirectoryNames();
  if (primaryDir.match("files")) {
    fontMap("Calluna-Regular.otf");
    fontSwitcher();
  }
});
document.addEventListener("click", (event) => {
  const trigger = event.target;
  if (trigger.classList.contains("render")) {
    reRender();
  }
});
