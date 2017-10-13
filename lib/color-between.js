'use strict';

const Color = require('color');

const lerp = (start, end, weight) => {
    return start * (1 - weight) + end * weight;
};

module.exports = (startColorString, endColorString, gradientDegree = 0.5, outputFormat = 'hsl') => {
    const startColor = new Color(startColorString);
    const endColor = new Color(endColorString);
    const resultColor = new Color({
        h: lerp(startColor.hue(), endColor.hue(), gradientDegree),
        s: lerp(startColor.saturationl(), endColor.saturationl(), gradientDegree),
        l: lerp(startColor.lightness(), endColor.lightness(), gradientDegree),
        alpha: lerp(startColor.alpha(), endColor.alpha(), gradientDegree),
    });

    if (typeof resultColor[outputFormat] !== 'function') {
        throw new Error(`invalid output format ${outputFormat}`);
    }

    if (outputFormat === 'hex') {
        return resultColor[outputFormat]();
    }
    return resultColor[outputFormat]().string();
};