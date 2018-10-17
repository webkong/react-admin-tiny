/*
* Create by wangsw on 2018/10/12
*/

import React, {Component} from 'react';
import {Layout, Breadcrumb, Icon} from 'antd';

import SiderMenu from './_siderMenu';
import {Switch} from 'react-router-dom';
import {LayoutRoutes} from '../routes/router';
import theme from '../config/theme'

const {Header, Footer, Sider, Content} = Layout;


class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    theme={theme.side.theme}
                    collapsible
                    trigger={null}
                    collapsed={this.state.collapsed}
                >
                    <SiderMenu theme={theme.side.theme} iscollapsed={`${this.state.collapsed}`}/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <Switch key="home">
                            <LayoutRoutes name="home"/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }


}

export default BasicLayout;
