const htmlElem = document.querySelector('html');
const arrPaths = document.location.pathname.split('/');
const newPaths = arrPaths.map(item => item.replace('.html', ''));
const primaryDir = arrPaths[1];
let pathnames = newPaths.filter(item => item !== '');

const setDirectoryNames = () => {
    if (!primaryDir) {
        htmlElem.classList.add('index');
    } else {
        htmlElem.classList.add(...pathnames);
    }
}

export {
    primaryDir,
    setDirectoryNames
}