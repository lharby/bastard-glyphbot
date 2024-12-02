const elem = document.querySelector('#loading');

const removeLoading = () => {
    elem.classList.remove('loadingclass');
}

export { removeLoading };