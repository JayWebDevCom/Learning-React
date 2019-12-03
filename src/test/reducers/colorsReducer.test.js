import C from '../../../src/constants/constants'
import {colors} from "../../../src/reducers/colorsReducer";
import { expect } from 'chai';

describe('colors reducer adds colors', () => {

    const colorsArray = [
        {
            'id': 'test-id',
            'title': 'bright red',
            'color': '#ff0000',
            'rating': 5
        }
    ];

    const action = {
        type: C.ADD_COLOR,
        id: 'new-test-id',
        title: 'Party Pink',
        color: 'F142FF',
        timestamp: '2019-12-03T07:51:45.017Z'
    };

    it('adds a new color', () => {

        const newArray = [
            ...colorsArray,
            {
                id: 'new-test-id',
                title: 'Party Pink',
                color: 'F142FF',
                rating: 0,
                timestamp: '2019-12-03T07:51:45.017Z'
            }
        ];

        expect(colors(colorsArray, action)).to.eql(newArray);
    })
});