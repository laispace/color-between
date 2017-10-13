const colorBetween = require('./index');
const expect = require('expect');

describe('get color between two hsl colors', () => {
    it('get default color between two hsl colors', () => {
        expect(colorBetween('hsl(0, 100%, 100%)', 'hsl(100, 0%, 0%)')).toEqual('hsl(50, 50%, 50%)');
    });
    it('get default color between two hsla colors', () => {
        expect(colorBetween('hsl(0, 100%, 100%, 0)', 'hsl(100, 0%, 0%, 1)')).toEqual('hsla(50, 50%, 50%, 0.5)');
    });
    it('get 25% color between two hsl colors', () => {
        expect(colorBetween('hsl(0, 100%, 100%)', 'hsl(100, 100%, 100%)', 0.25)).toEqual('hsl(25, 100%, 100%)');
    });
    it('get 50% color between two hsl colors', () => {
        expect(colorBetween('hsl(0, 100%, 100%)', 'hsl(100, 100%, 100%)', 0.5)).toEqual('hsl(50, 100%, 100%)');
    });
    it('get 75% color between two hsl colors', () => {
        expect(colorBetween('hsl(0, 100%, 100%)', 'hsl(100, 100%, 100%)', 0.75)).toEqual('hsl(75, 100%, 100%)');
    });
});

describe('get color between two rgb colors', () => {
    it('get 50% color between two rgb colors', () => {
        expect(colorBetween('rgb(255, 255, 255)', 'rgb(0, 0, 0)', 0.5, 'rgb')).toEqual('rgb(128, 128, 128)');
    });
    it('get 50% color between two rgba colors', () => {
        expect(colorBetween('rgba(255, 255, 255, .2)', 'rgba(0, 0, 0, .8)', 0.5, 'rgb')).toEqual('rgba(128, 128, 128, 0.5)');
    });
});

describe('get color between two hex colors', () => {
    it('get 50% color between two hex colors', () => {
        expect(colorBetween('#fff', '#000', 0.5, 'hex')).toEqual('#808080');
    });
});

describe('get color between two mixed colors', () => {
    it('get default color between two mixed colors', () => {
        expect(colorBetween('#fff', 'rgb(0, 0, 0)', 0.5, 'hsl')).toEqual('hsl(0, 0%, 50%)');
    });
    it('get default color between two mixed colors', () => {
        expect(colorBetween('#000', 'rgb(255, 255, 255)', 0.5, 'hex')).toEqual('#808080');
    });
});
