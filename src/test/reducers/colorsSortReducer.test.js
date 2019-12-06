import C from '../../../src/constants/constants'
import {sort} from "../../../src/reducers/colorsSortReducer";
import { expect } from 'chai';

describe('sort colors reducer', () => {

    const action = {
      type:C.SORT_COLORS,
      sortBy: 'SORTED_BY_TITLE'
    };

    const style = 'SORTED_BY_DATE';

    it('adds a new sort descriptor', () => {
        expect(sort(style, action)).to.equal('SORTED_BY_TITLE'  );
    });

    it(`defaults to ${style}`, () => {
        expect(sort(style, {})).to.equal(style);
    })
});