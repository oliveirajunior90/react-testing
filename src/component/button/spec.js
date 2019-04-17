import React, { Component } from 'react';
import {shallow} from 'enzyme'
import { checkProps, findByTestAtrr } from './../../../Utils'
import SharedButton from './index'

describe('Shared Component', () => {

    describe('Checking Proptypes', () => {

        it('Should not Throw a Warning', () => {

            const expectedProps = {
                buttonText: 'text',
                emitEvent: () => {

                }
            };

            const propsErrors = checkProps(SharedButton, expectedProps);
            expect(propsErrors).toBeUndefined();

        })

    })

    describe('Renders', () => {

        let wrapper;

        beforeEach(() => {

            const props = {
                buttonText: 'text',
                emitEvent: () => {
    
                }
            };

            wrapper = shallow(<SharedButton {...props} />);

        });

        it('Should Render a button', () => {

            const button = findByTestAtrr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)

        })


    })

})