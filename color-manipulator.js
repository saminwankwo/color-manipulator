const Color = require('color');

function lighten(color, amount) {
    return Color(color).lighten(amount).hex();
}

function darken(color, amount) {
    return Color(color).darken(amount).hex();
}

function saturate(color, amount) {
    return Color(color).saturate(amount).hex();
}

function desaturate(color, amount) {
    return Color(color).desaturate(amount).hex();
}

module.exports = {
    lighten,
    darken,
    saturate,
    desaturate
};