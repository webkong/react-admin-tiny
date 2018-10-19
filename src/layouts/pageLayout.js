/*
* Create by wangsw on 2018/10/12
*/

import React, {Component} from 'react';
import {Layout} from 'antd';
import {Switch} from 'react-router-dom';
import {LayoutRoutes} from '../routes/router';
import {connect} from 'react-redux';
import {addRouteList} from "../store/actions/route";
import SiderMenu from './_siderMenu';

import HeaderLayout from './_headerLayout';
import theme from '../config/theme'


const {Footer, Sider, Content} = Layout;


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

    componentDidMount() {
        this.props.addRouteList();
        console.log(1)
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    onBreakpoint={(point) => {
                        if (point) {
                            this.toggle()
                        }
                    }}
                    breakpoint="lg"
                    width={250}
                    theme={theme.side.theme}
                    collapsible
                    trigger={null}
                    collapsed={this.state.collapsed}
                >
                    <SiderMenu theme={theme.side.theme} iscollapsed={`${this.state.collapsed}`}/>
                </Sider>
                <Layout>
                    <HeaderLayout toggle={this.toggle} collapsed={this.state.collapsed}/>

                    <Content>

                        <Switch key="home">
                            <LayoutRoutes name="home"  {...this.props}/>
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



export default connect(null, {addRouteList})(BasicLayout);
