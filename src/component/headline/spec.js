import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAtrr, checkProps } from './../../../Utils/index';


const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Component', () => {

    describe('Checking Proptypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps =  {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'Test email',
                    age: 2,
                    onlineStatus: true
                }]
            };
            
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })

    })

    describe('Have props', () => {

        let wrapper;

        beforeEach(() => {

            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }

            wrapper = setUp(props)

        })

        it('It Should render without errors', () => {

            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);

        })

        it('It Should render a H1', () => {
    
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);

        })

        it('It Should render a Description', () => {
    
            const description = findByTestAtrr(wrapper, 'description');
            expect(description.length).toBe(1);

        })

    })

    describe('Have NO props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should NOT Render', () =>{

            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0)

        })

    })



})


