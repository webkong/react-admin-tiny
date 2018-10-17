/*
* Create by wangsw on 2018/10/15
*/

import React, {Component} from 'react';
import {Switch} from 'react-router-dom'
import {LayoutRoutes} from "../routes/router";

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch key="user">
                <LayoutRoutes name="user"/>
            </Switch>
        )
    }


}

export default UserLayout;
