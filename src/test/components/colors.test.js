import React from 'react';
import {mount} from 'enzyme';
import deepFreeze from "deep-freeze";
import colorsFile from '../../components/colourRating/colorsFile'
import {Provider} from "react-redux";
import {Colors} from "../../components/colourRating/containers/colors";

jest.mock('../../components/colourRating/ColorList');

describe('Colors component', () => {
    let wrapper;

    let testStore = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
            deepFreeze(colorsFile)
        )
    };

    beforeAll(() => wrapper = mount(
        <Provider store={testStore}>
            <Colors/>
        </Provider>
    ));

    it('renders three colours', () => {
        expect(wrapper
            .find('ColorListMock')
            .props()
            .colors
            .length
        ).toBe(3)
    });
});

