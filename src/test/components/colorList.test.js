import React from 'react';
import {TestableColorList} from './testableColorList';
import {mount} from 'enzyme';
import deepFreeze from "deep-freeze";
import colorsFile from '../../components/colourRating/colorsFile'

const testColors = deepFreeze(colorsFile.colors);

jest.mock('../../components/colourRating/Color');

describe('ColorList component', () => {

    describe('Rating a colour', () => {

        let testRate = jest.fn();

        beforeAll(() => {
            mount(<TestableColorList colors={testColors} onRate={testRate}/>)
                .find('button.rate')
                .first()
                .simulate('click')
        });

        it('invokes onRate handler ', () => {
            expect(testRate).toBeCalled()
        });

        it('invokes onRate handler ', () => {
            expect(testRate).toBeCalledWith("1", 3)
        });
    });


});

