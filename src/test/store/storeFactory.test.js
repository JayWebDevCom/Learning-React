import {expect} from "chai";
import {quietLogger, storeFactory} from "../../stores/colorStoreFactory";
import {colorActions} from '../../actions/colorActions'
import colorsData from "../../../src/components/colourRating/colorsFileWithSort"

describe('storeFactory', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('returns initially prePopulated state from default', () => {
        const store = storeFactory(colorsData, quietLogger);
        expect(store.getState().colors.length).to.equal(3);
        store.dispatch(colorActions.addColor('#FFFFFF', 'Bright White'));
        expect(store.getState().colors.length).to.equal(4);
    });

    it('returns state', () => {
        const testState = {colors: [], sort: 'test_sort'};
        const store = storeFactory(testState, quietLogger);
        expect(store.getState().colors.length).to.equal(0);
        store.dispatch(colorActions.addColor('#FFFFFF', 'Bright White'));
        expect(store.getState().colors.length).to.equal(1);
    });
})
;
