import { add } from "./add";
import { substract } from "./substract";

describe('Test operations', () => {

    describe('Addition', () => {

        test('4+4=8', () => {
            expect(add(4, 4)).toEqual(8);
        });

        test('(-9)+4=(-5)', () => {
            expect(add(-9, 4)).toEqual(-5);
        });

        test('(-9)+(-4)=(-13)', () => {
            expect(add(-9, -4)).toEqual(-13);
        });

        test('9+(-4)=5', () => {
            expect(add(9, -4)).toEqual(5);
        });
    })

    describe('Soustraction', () => {

        test('4-2=2', () => {
            expect(substract(4, 2)).toEqual(2);
        });

        test('4-9=(-5)', () => {
            expect(substract(4, 9)).toEqual(-5);
        });

        test('(-9)-(-4)=(-5)', () => {
            expect(substract(-9, -4)).toEqual(-5);
        });
    })

})
