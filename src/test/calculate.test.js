import calculate from "../logic/calculate";

describe('Testing calculate.js', () => {
    test('should return null', () => {
        const obj = {
            total: 3,
            next: 6,
            operation: '+',
        };
        const buttonName = 'AC';
        expect(calculate(obj, buttonName)).toEqual({
            total: null,
            next: null,
            operation: null,
        })
    })

    test('should return the multiplication of numbers', () => {
        const obj = {
            total: 3,
            next: 6,
            operation: 'x',
        };
        const buttonName = '=';
        expect(calculate(obj, buttonName)).toEqual({
            total: '18',
            next: null,
            operation: null,
        })
    })
})