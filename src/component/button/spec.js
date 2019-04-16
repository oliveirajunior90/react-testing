import React, { Component } from 'react';
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

})