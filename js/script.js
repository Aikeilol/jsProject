window.addEventListener("DOMContentLoaded", () => {
    const tabs = require('./modules/tabs');
    const modal = require('./modules/modal');
    const cards = require('./modules/cards');
    const calculator = require('./modules/calculator');
    const forms = require('./modules/forms');
    const slider = require('./modules/slider');
    const timer = require('./modules/timer');

    tabs();
    modal();
    cards();
    calculator();
    forms();
    slider();
    timer();
});