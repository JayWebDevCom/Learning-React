import {colorsStore} from '../../stores/colorsStore';
import {expect} from "chai";
import colorsExpectedColors from '../../components/colourRating/colorsFileWithSort'
import C from '../../constants/constants'

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
});