/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

const waitForElement = (selector) => {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                resolve(element);
            }
        }, 100);
    });
}

export {
    waitForElement
}