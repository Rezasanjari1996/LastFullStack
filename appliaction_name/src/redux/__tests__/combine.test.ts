import { Reducers, reducerObject } from '../combine';

describe('combine test',()=>{
    test('existance test',()=>{
        expect(Reducers).not.toBe(undefined)
        expect(Reducers).not.toBe(null)        
        expect(reducerObject).not.toBe(undefined)
        expect(reducerObject).not.toBe(null)
    });

    test('Reducers',()=>{
        expect(Object.keys(reducerObject).length).toBeGreaterThan(0)
    });
});
