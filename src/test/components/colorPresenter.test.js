import React from "react";
import {ColorPresenter} from "../../components/colourRating/ColorPresenter";
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('ColorPresenter', () => {

    const wrapper = mount(<ColorPresenter/>);

    it('displays colors from the store', () => {
        expect(wrapper.find('.color-list').find('section')).to.have.lengthOf(3);
    });

    it('adds colors', () => {
        expect(wrapper.find('.color-list').find('section')).to.have.lengthOf(3);

        const colorForm = wrapper.find("form#add-color-form");
        const textInput = colorForm.find("input[type='text']");
        const colorInput = colorForm.find("input[type='color']");

        textInput.instance().value = "New color name";
        colorInput.instance().value = '#ff4444';
        colorForm.simulate('submit');

        const updatedColorList = wrapper.find('.color-list').find('section');
        expect(updatedColorList).to.have.lengthOf(4);

        expect(updatedColorList.last().find('h1').first().text()).to.equal("New color name");
        expect(updatedColorList.last().find("div.color").first().props()['style']['backgroundColor']).to.equal('#ff4444');
    });
});