import React from 'react';
import {ColorPresenter} from '../../components/colourRating/ColorPresenter';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('ColorPresenter', () => {

    /*
    TODO inject store/state to not preserve state across tests
    TODO inject logging middleware to reduce test logging
     */

    const wrapper = mount(<ColorPresenter/>);
    const testName = 'New color name';
    const testColor = '#ff4444';

    it('displays colors from the store', () => {
        expect(wrapper.find('.color-list').find('section')).to.have.lengthOf(3);
    });

    it('adds colors with initial rating information', () => {
        expect(wrapper.find('.color-list').find('section')).to.have.lengthOf(3);

        const colorForm = wrapper.find('form#add-color-form');
        const textInput = colorForm.find("input[type='text']");
        const colorInput = colorForm.find("input[type='color']");

        textInput.instance().value = testName;
        colorInput.instance().value = testColor;
        colorForm.simulate('submit');

        const updatedColorList = wrapper.find('.color-list').find('section');
        expect(updatedColorList).to.have.lengthOf(4);

        const newColorEntry = updatedColorList.last();

        expect(newColorEntry.find('h1').first().text()).to.equal(testName);
        expect(newColorEntry.find('div.color').first().props()['style']['backgroundColor']).to.equal(testColor);
        expect(newColorEntry.find('div.star')).to.have.lengthOf(5);
        expect(newColorEntry.find('div.selected')).to.have.lengthOf(0);
        expect(newColorEntry.find('p').first().text()).to.equal('0 of 5 stars');
    });

    it('removes a specific color on corresponding button click', () => {
        const colorList = wrapper.find('.color-list').find('section');
        const length = colorList.length;

        const colorEntryToRemove = colorList.filterWhere(section =>
            section.find('div.color').first().props()['style']['backgroundColor'] === testColor
        );

        colorEntryToRemove.first().find('button').first().simulate('click');

        const updatedColorList = wrapper.find('.color-list').find('section');
        expect(updatedColorList).to.have.lengthOf(length - 1);
    });

    it('rates a specific color on corresponding star click and displays updated rating', () => {
        let colorList = wrapper.find('.color-list').find('section');
        let colorEntryToRate = colorList.first();
        let ratingDiv = colorEntryToRate.find('div.star-rating').first();

        const totalStars = 5, totalSelectedStars = 3, testRating = 2;

        expect(ratingDiv.find('div.star')).to.have.lengthOf(totalStars);
        expect(ratingDiv.find('div.selected')).to.have.lengthOf(totalSelectedStars);
        expect(ratingDiv.find('p').first().text()).to.equal(`${totalSelectedStars} of ${totalStars} stars`);

        ratingDiv.find('div.star').at(1).simulate('click');

        colorList = wrapper.find('.color-list').find('section');
        colorEntryToRate = colorList.first();
        ratingDiv = colorEntryToRate.find('div.star-rating').first();

        expect(ratingDiv.find('div.star')).to.have.lengthOf(totalStars);
        expect(ratingDiv.find('div.selected')).to.have.lengthOf(testRating);
        expect(ratingDiv.find('p').first().text()).to.equal(`${testRating} of ${totalStars} stars`);
    });
});