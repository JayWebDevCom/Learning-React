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
    })

});
