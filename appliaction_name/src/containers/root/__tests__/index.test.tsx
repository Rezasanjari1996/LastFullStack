import React from 'react';
import { render } from 'react-dom'
import Root from '../index';

let main:HTMLElement;

describe('Root component test',()=>{
    beforeEach(()=>{
        main = document.createElement('div');
        document.body.appendChild(main);
    });
    
    afterEach(()=>{
        main.remove();
    });
    
    test('render Root',()=>{
        render(<Root />,main);
        expect(document.getElementById('root-main-div')).not.toBe(null);
    });
});