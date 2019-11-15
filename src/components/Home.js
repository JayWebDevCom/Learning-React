import React from 'react';
import {Link} from "react-router-dom";

export const Home = () =>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/clock">Clock</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/hiddenMessages">Hidden Messages</Link></li>
        </ul>
    </div>;