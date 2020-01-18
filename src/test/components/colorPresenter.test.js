import React from 'react';
import {ColorPresenter} from '../../components/colourRating/ColorPresenter';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {quietLogger} from "../../stores/colorStoreFactory";

describe('ColorPresenter', () => {
    const logger = quietLogger;
    let wrapper;

    describe('Empty colours', () => {
        const noColors = {"colors": [], "sort": "SORTED_BY_TITLE"};
        wrapper = mount(ColorPresenter({noColors, logger}));

        it('displays no colours listed text', () => {
            expect(wrapper.find('p').text()).to.equal('No Colours Listed. (Add a Color)');
        });
    });

    describe('With colours', () => {

        const state = {
            "colors": [
                {
                    "id": "1",
                    "title": "ocean at dusk",
                    "color": "#00c4e2",
                    "rating": 3
                },
                {
                    "id": "2",
                    "title": "ocean at dawn",
                    "color": "#00c4e4",
                    "rating": 4
                }
            ],
            "sort": "SORTED_BY_TITLE"
        };

        beforeEach(() => {
            wrapper = mount(ColorPresenter({state, logger}));
        });

        afterEach(() => {
            localStorage.clear();
        });

        const testName = 'New color name';
        const testColor = '#ff4444';

        it('displays colors from the store', () => {
            expect(wrapper.find('.color-list').find('section')).to.have.lengthOf(2);
        });

        it('adds colors with initial rating information', () => {
            const colorForm = wrapper.find('form#add-color-form');
            const textInput = colorForm.find("input[type='text']");
            const colorInput = colorForm.find("input[type='color']");

            textInput.instance().value = testName;
            colorInput.instance().value = testColor;
            colorForm.simulate('submit');

            const updatedColorList = wrapper.find('.color-list').find('section');
            expect(updatedColorList).to.have.lengthOf(3);

            const newColorEntry = updatedColorList.filterWhere(section =>
                section.find('div.color').first().props()['style']['backgroundColor'] === testColor
            );

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
                section.find('div.color').first().props()['style']['backgroundColor'] === "#00c4e2"
            );

            colorEntryToRemove.first().find('button.remove').simulate('click');

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

        it('updates style property value of color section on a rate change action', () => {
            let colorSection = wrapper.find('.color-list').find('section').first();
            expect(colorSection.props()['style']['backgroundColor']).to.equal('#CCC');

            colorSection.find('div.star').first().simulate('click');

            const updatedColorSection = wrapper.find('.color-list').find('section').first();
            expect(updatedColorSection.props()['style']).to.equal(null);
        });

        it('will not update the style property value of color section on a rating of the same value', () => {
            let colorSection = wrapper.find('.color-list').find('section').first();
            expect(colorSection.props()['style']['backgroundColor']).to.equal('#CCC');

            const ratingDiv = colorSection.find('div.star-rating');
            expect(ratingDiv.find('div.star')).to.have.lengthOf(5);

            const currentRating = ratingDiv.find('div.selected');
            expect(currentRating).to.have.lengthOf(3);

            ratingDiv.find('div.star').at(currentRating.length - 1).simulate('click');

            const updatedColorSection = wrapper.find('.color-list').find('section').first();
            expect(updatedColorSection.props()['style']['backgroundColor']).to.equal('#CCC');
        });
    });
});
