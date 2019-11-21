import React from 'react';
import {DataComponent} from "./DataComponent";
import {CountryNames} from "./CountryNames";

const CountryDropdown =
    DataComponent(CountryNames, 'https://restcountries.eu/rest/v1/all');

export const CountryDropdownPresenter = () =>
    <CountryDropdown selected={'United Kingdom'}/>;

