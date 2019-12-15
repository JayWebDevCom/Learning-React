import {expect} from "chai";
import {storeFactory} from "../../stores/colorStoreFactory";
import {colorActions} from '../../actions/colorActions'

describe('storeFactory', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('returns initially prePopulated state from default', () => {
        const store = storeFactory();
        expect(store.getState().colors.length).to.equal(3);
        store.dispatch(colorActions.addColor('#FFFFFF', 'Bright White'));
        expect(store.getState().colors.length).to.equal(4);
    });

    it('returns state', () => {
        const store = storeFactory({
            colors: [],
            sort: 'test_sort'
        });
        expect(store.getState().colors.length).to.equal(0);
        store.dispatch(colorActions.addColor('#FFFFFF', 'Bright White'));
        expect(store.getState().colors.length).to.equal(1);
    });
});
