const modules = require('./modules');

test('adds 1 + 2 to equals 3', () => {
    expect(modules.sum(1, 2)).toBe(3);
});

test('arrow function sum2', () => {
    expect(modules.sum2(1, 2)).toBe(3);
});