import React from 'react';
import {shallow} from 'enzyme';
import {Color} from '../../components/colourRating/Color'
import toJson from "enzyme-to-json";
import {compose} from "redux";

describe('<Color /> Snapshot', () => {

    it('renders correct props', () => {
        const shallowExpect =
            compose(expect, toJson, shallow);

        shallowExpect(<Color title={'color test'} color={'#R4R4R4'} rating={3}/>)
            .toMatchSnapshot();

    });
});