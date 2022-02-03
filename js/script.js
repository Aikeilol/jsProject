import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';

window.addEventListener("DOMContentLoaded", () => {
    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal('[data-modal]', '.modal');
    cards();
    calculator();
    forms('form');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2022-04-15');
});