import {shallow} from 'enzyme';
import {Star} from '../../components/colourRating/Star'
import React from "react";

describe("<Star /> component", () => {

    it('renders default star', () => {
        expect(
            shallow(<Star/>)
                .find('div.star')
                .length
        ).toBe(1)
    });

    it('renders selected stars', () => {
        expect(
            shallow(<Star selected={true}/>)
                .find('div.selected.star')
                .length
        ).toBe(1)
    });

    describe("invoking onClick", () => {
        const testSubs = new Map([
            ['div.star', false],
            ['div.selected.star', true]
        ]);

        for (const [css, selected] of testSubs) {
            it(`invokes onClick for class: ${css}`, () => {
                const testClick = jest.fn();

                shallow(<Star selected={selected} onClick={testClick}/>)
                    .find(css)
                    .simulate('click');

                expect(testClick).toBeCalled();
            });

        }
    });
});
