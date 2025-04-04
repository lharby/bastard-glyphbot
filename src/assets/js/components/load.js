/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

const elem = document.querySelector('#loading');

const removeLoading = () => {
    elem.classList.remove('loadingclass');
}

export { 
    removeLoading
};