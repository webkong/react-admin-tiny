/*
* Create by wangsw on 2018/10/19
*/

import React, {Component} from 'react';
import BreadcrumbLayout from "./_breadcrumbLayout";
import connect from "react-redux/es/connect/connect";
import {getRouteList} from "../store/getters";
import {urlToList} from '../utils/tools'


class ViewLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeArr: this.props.routeArr
        };
    }

    matchBreadcrumb = (url, routeArr = []) => {
        const routes = urlToList(url.slice(1)).map((elem) => {
            return routeArr[elem]
        });
        return [{path: '/home', name: 'home', icon: 'home', redirect: false}, ...routes];

    };

    render() {
        const hash = window.location.hash;

        return (
            <>
                <BreadcrumbLayout hasIcon={false} hash={hash}
                                  bList={this.matchBreadcrumb(hash, this.state.routeArr)} {...this.props}/>
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
