import React from 'react';
import {Link} from "react-router-dom";

export const Home = () =>
    <div className={'home'}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/clock">Clock</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/hiddenMessages">Hidden Messages</Link></li>
            <li><Link to="/countryList">Country List</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/children">React Children</Link></li>
            <li><Link to="/randomUsers">Random Users</Link></li>
            <li><Link to="/countryDropDown">Country Dropdown</Link></li>
            <li><Link to="/popupButton">Popup Button</Link></li>
        </ul>
    </div>;