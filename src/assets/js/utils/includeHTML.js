/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

class IncludeHTML extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 'Loading...';
        this.loadContent();
    }

    async loadContent() {
        const source = this.getAttribute('src');
        if (!source) {
            throw new Error('No src attribute given.');
        }
        const response = await fetch(source);
        if (response.status !== 200) {
            throw new Error(`Could not load resource: ${source}`);
        }
        const content = await response.text();
        this.innerHTML = content;
    }
}
  
window.customElements.define('html-include', IncludeHTML);