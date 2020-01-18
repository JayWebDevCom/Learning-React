import React from 'react';
import {TestableColorList} from './testableColorList';
import {mount, shallow} from 'enzyme';
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

        it('invokes onRate handler with arguments', () => {
            expect(testRate).toBeCalledWith("1", 3)
        });
    });

    describe('Removing a colour', () => {

        let testRate = jest.fn();

        beforeAll(() => {
            mount(<TestableColorList colors={testColors} onRemove={testRate}/>)
                .find('button.remove')
                .first()
                .simulate('click')
        });

        it('invokes onRemove handler ', () => {
            expect(testRate).toBeCalled()
        });
    });

    describe('Defaults properties correctly', () => {
        it('with correct text', () => {
            expect(shallow(<TestableColorList/>)
                .find('p')
                .text())
                .toBe('No Colors Listed. (Add a Color)')
        })
    });
});

