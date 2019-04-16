import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from './../../../Utils'
import ListItem from './index'

describe('ListItem Component', () => {

    describe('Checking Proptypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });


    });


});