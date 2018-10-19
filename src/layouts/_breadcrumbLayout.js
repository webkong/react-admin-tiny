/*
* Create by wangsw on 2018/10/19
*/

import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import './_header.scss';




class BreadcrumbLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
        return (
            <Breadcrumb className={'breadLayout'}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

        )
    }

}



export default BreadcrumbLayout;
