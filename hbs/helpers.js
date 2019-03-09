// Partials 
const hbs = require('hbs');

// Helpers
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');

    words.forEach((word, id) => {
        words[id] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
})