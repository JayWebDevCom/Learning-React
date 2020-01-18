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

    it('renders colour details', () => {
        expect(wrapper
            .find('ColorListMock')
            .props()
            .colors[0]
            .title
        ).toBe('ocean at dusk')
    });

    afterEach(() => jest.resetAllMocks());

    it('dispatches a RATE_COLOR action', () => {
        wrapper.find('ColorListMock')
            .props()
            .onRate('3', 1);

        expect(testStore.dispatch.mock.calls[0][0])
            .toEqual({
                id: '3',
                type: 'RATE_COLOR',
                rating: 1
            })
    });

    it('dispatches a REMOVE_COLOR action', () => {
        wrapper.find('ColorListMock')
            .props()
            .onRemove('2');

        expect(testStore.dispatch.mock.calls[0][0])
            .toEqual({
                id: '2',
                type: 'REMOVE_COLOR'
            })
    });
});

