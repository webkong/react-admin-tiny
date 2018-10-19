/*
* Create by wangsw on 2018/10/19
*/

import React, {Component} from 'react';
import {Layout, Icon} from "antd";
import './_header.scss';

const {Header} = Layout;

class HeaderLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 向父级传递是否收起
    toggle = () => {
        this.props.toggle();
    };

    render() {
        return (
            <Header style={{background: '#fff', padding: 0, overflow:'hidden'}}>

                <div className="toggle">
                    <Icon
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </div>
            </Header>
        )
    }


}

export default HeaderLayout;
