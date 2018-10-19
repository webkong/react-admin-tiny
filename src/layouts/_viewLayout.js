/*
* Create by wangsw on 2018/10/19
*/

import React, {Component} from 'react';
import BreadcrumbLayout from "./_breadcrumbLayout";
import connect from "react-redux/es/connect/connect";
import {getRouteList} from "../store/getters";
const hash = window.location.hash;


class ViewLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
        return (
            <>
                <BreadcrumbLayout hash={hash} {...this.props}/>
                <div style={{padding: '0 30px'}}>
                    {this.props.children}
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    let routeArr = getRouteList(state);
    return {routeArr};
};

export default connect(mapStateToProps)(ViewLayout);
