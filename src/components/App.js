import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from './Home'
import {Clock} from "./clock/Clock";
import {MemberList} from "./members/MemberList";
import {HiddenMessages} from "./HiddenMessages";
import {CountryList} from "./CountryList";
import {ReactChildrenPresenter} from "./ReactChildrenPresenter";
import {TimeLinePresenter} from "./TimeLinePresenter";
import {ColorPresenter} from "./ColorPresenter";

export default () =>
    <Router>
        <Home/>
        <Route exact path="/">
            <ColorPresenter/>
        </Route>
        <Route exact path="/clock">
            <Clock/>
        </Route>
        <Route exact path="/members">
            <MemberList/>
        </Route>
        <Route exact path="/hiddenMessages">
            <HiddenMessages/>
        </Route>
        <Route exact path="/countryList">
            <CountryList/>
        </Route>
        <Route exact path="/timeline">
            <TimeLinePresenter/>
        </Route>
        <Route exact path="/children">
            <ReactChildrenPresenter/>
        </Route>
    </Router>;