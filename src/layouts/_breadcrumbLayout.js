/*
* Create by wangsw on 2018/10/19
*/

import React, {Component} from 'react';
import {Breadcrumb, Icon} from "antd";
import {Link} from 'react-router-dom';
import './_header.scss';


class BreadcrumbLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasIcon: this.props.hasIcon
        };
    }

    render() {
        const {bList} = this.props;
        const itemRender = (route, params, routes) => {
            const last = routes.indexOf(route) === routes.length - 1;
            return last ? <span>{route.name}</span> : <Link to={route.path}>{this.state.hasIcon ?
                <Icon type={route.icon} style={{paddingRight: '3px'}}/> : ''}{route.name}</Link>;
        };
        return (
            <Breadcrumb className={'breadLayout'} itemRender={itemRender} routes={bList}/>

        )
    }

}


export default BreadcrumbLayout;
