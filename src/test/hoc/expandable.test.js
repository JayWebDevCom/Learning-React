import React from "react";
import {Expandable} from "../../components/HOC/Expandable";
import {mount} from "enzyme";

describe('Expandable', () => {
    let props, wrapper, ComposedComponent, MockedComponent = ({collapsed, expandCollapse}) =>
        <div onClick={expandCollapse}>
            {(collapsed) ? 'collapsed' : 'expanded'}
        </div>;

    describe('Rendering UI', () => {
        beforeAll(() => {
            ComposedComponent = Expandable(MockedComponent);
            wrapper = mount(<ComposedComponent foo={'foo'} bar={'bar'}/>);
            props = wrapper.find(MockedComponent).props();
        });

        it('starts off collapsed', () => {
            expect(props.collapsed).toBe(true);
        });

        it('passes the expandCollapse function to the composed component', () => {
            expect(typeof props.expandCollapse).toBe('function');
        });

        it('passes additional props to composed component', () => {
            expect(props.foo).toBe('foo');
            expect(props.bar).toBe('bar');
        });
    });

    describe('Expand Collapse functionality', () => {
        let instance;
        beforeAll(() => {
            ComposedComponent = Expandable(MockedComponent);
            wrapper = mount(<ComposedComponent collapsed={false}/>);
            instance = wrapper.instance();
        });

        it('renders the MockComponent as the root element', () => {
            expect(wrapper.first().is(MockedComponent));
        });

        it('starts off expanded', () => {
            expect(instance.state.collapsed).toBe(false);
        });

        it('toggles the collapsed state', () => {
            instance.expandCollapse();
            expect(instance.state.collapsed).toBe(true);
        });
    });
});