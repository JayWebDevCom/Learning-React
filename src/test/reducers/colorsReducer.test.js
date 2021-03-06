import C from '../../../src/constants/constants'
import {colors} from "../../../src/reducers/colorsReducer";
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

describe('colors reducer adds colors', () => {

    const colorsArray = [
        {
            'id': 'test-id',
            'title': 'bright red',
            'color': '#ff0000',
            'rating': 5
        }
    ];
    deepFreeze(colorsArray);

    it('adds a new color', () => {

        const action = {
            type: C.ADD_COLOR,
            id: 'new-test-id',
            title: 'Party Pink',
            color: 'F142FF',
            timestamp: '2019-12-03T07:51:45.017Z'
        };
        deepFreeze(action);

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
    });

    it('removes a color', () => {

        const action = {
            type: C.REMOVE_COLOR,
            id: 'test-id'
        };
        deepFreeze(action);

        expect(colors(colorsArray, action)).to.eql([]);
    });

    it('rates a color', () => {

        const action = {
            type: C.RATE_COLOR,
            id: 'test-id',
            rating: 1
        };
        deepFreeze(action);

        const newArray = [
            {
                ...colorsArray[0],
                'rating': 1
            }
        ];

        expect(colors(colorsArray, action)).to.eql(newArray);
    })
});