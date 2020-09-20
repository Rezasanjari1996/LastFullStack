import { createMiddleWare, Store } from '../store';

describe('Store Test',()=>{
    test('existsnce test',()=>{
        expect(createMiddleWare).not.toBe(null);
        expect(Store).not.toBe(null);
        expect(Store).not.toBe(undefined);
    });

    test('createMiddleWare test',()=>{
        let middle = createMiddleWare('test');
        expect(middle.length).toBe(2);

        let middle_ = createMiddleWare('production');
        expect(middle_.length).toBe(1);
    })
});