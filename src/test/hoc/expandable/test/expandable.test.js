import React from "react";
import {Expandable} from "../../../../components/HOC/Expandable";
import mount from "enzyme/src/mount";

describe('Rendering UI', () => {

    let props, wrapper, ComposedComponent, MockedComponent = ({collapsed, expandCollapse}) =>
        <div onClick={expandCollapse}>
            {(collapsed) ? 'collapsed' : 'expanded'}
        </div>;


    beforeAll(() => {
        ComposedComponent = Expandable(MockedComponent);
        wrapper = mount(<ComposedComponent foo={'foo'} bar={'bar'}/>);
        props = wrapper.find(MockedComponent.props());
    });

    it('starts off collapsed')


});