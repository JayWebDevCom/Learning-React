import {colorsStore} from '../../stores/colorsStore';
import {expect} from "chai";
import colorsExpectedColors from '../../components/colourRating/colorsFileWithSort'
import C from '../../constants/constants'
import {colorActions} from '../../actions/colorActions'

describe('colorsStore', () => {

    it('returns populated state', () => {
        expect(colorsStore.getState()).to.eql(colorsExpectedColors);
    });

    it('returns colors array', () => {
        expect(colorsStore.getState().colors.length).to.equal(3);
    });

    it('returns sort', () => {
        expect(colorsStore.getState().sort).to.equal("SORTED_BY_TITLE");
    });
});

describe('colorsStore with actions', () => {

    it(`dispatches ${C.ADD_COLOR}`, () => {
        const getLength = () =>
            colorsStore.getState().colors.length;

        let action = {
            type: C.ADD_COLOR,
            id: 'new-test-id',
            title: 'New colour',
            color: '#color',
            timestamp: '2019-12-03T07:51:45.017Z'
        };

        expect(getLength()).to.equal(3);
        colorsStore.dispatch(action);
        expect(getLength()).to.equal(4);
    });

    it(`dispatches ${C.RATE_COLOR}`, () => {
        const getRating = (index) =>
            colorsStore.getState().colors[index].rating;

        let action = {
            type: C.RATE_COLOR,
            id: '1',
            rating: 5
        };

        expect(getRating(0)).to.equal(3);
        colorsStore.dispatch(action);
        expect(getRating(0)).to.equal(5);
    });

    it(`dispatches ${C.RATE_COLOR} action from colorActions`, () => {
        const getRating = (index) =>
            colorsStore.getState().colors[index].rating;

        expect(getRating(0)).to.equal(5);
        colorsStore.dispatch(
            colorActions.rateColor('1', 1)
        );
        expect(getRating(0)).to.equal(1);
    });

    it(`dispatches ${C.REMOVE_COLOR} action from colorActions`, () => {
        const getLength = (index) =>
            colorsStore.getState().colors.length;

        expect(getLength()).to.equal(4);
        colorsStore.dispatch(
            colorActions.removeColor('1')
        );
        expect(getLength()).to.equal(3);
    });

    it(`dispatches ${C.ADD_COLOR} action from colorActions`, () => {
        const getLength = (index) =>
            colorsStore.getState().colors.length;

        const color = '#ff1234';

        expect(getLength()).to.equal(3);
        colorsStore.dispatch(
            colorActions.addColor('new-title', color)
        );
        expect(getLength()).to.equal(4);
    });
});

describe('colorsStore sort actions', () => {
    const testSubs = new Map(
        [
            ['date', 'SORTED_BY_DATE'],
            ['title', 'SORTED_BY_TITLE'],
            ['rating', 'SORTED_BY_RATING']
        ]
    );

    for (const [input, expected] of testSubs) {
        it(`dispatches ${C.SORT_COLORS} action from colorActions ${input} -> ${expected}`, () => {
            colorsStore.dispatch(
                colorActions.sortColor(input)
            );

            expect(colorsStore.getState().sort).to.equal(expected);
        })
    }
});