/*
* Create by wangsw on 2018/10/12
*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeConf from '../routes/config';
import {Icon, Menu} from "antd";

const {SubMenu} = Menu;

/**
 *@desc
 *@params {Object}
 *@return {*}
 */
const generateChildrenMenu = (routeArr) => {
    const routes = [];
    routeArr.forEach((route) => {
        if (route.hasOwnProperty('children')) {
            routes.push((
                <SubMenu key={route.name}
                         title={<span><Icon type={route.icon}/><span>{route.name}</span></span>}>
                    {generateChildrenMenu(route.children)}
                </SubMenu>));

        } else {

            if (!route.hasOwnProperty('redirect')) {
                routes.push(generateMenu(route));
            }
        }

    });
    return routes;
};


/**
 *@desc generate object to MenuDom
 *@params {Object}  {path, component}
 *@return {ReactDOM}
 */
const generateMenu = (route) => {
    if (route && !route.hide) {
        return (
            <Menu.Item key={route.path}>
                <Link to={route.path}><Icon type={`${route.icon}`}/><span>{route.name}</span></Link>
            </Menu.Item>
        )
    }
};


class NavMenu extends Component {
    render() {

        const {iscollapsed} = this.props;
        if (!(routeConf && routeConf.length > 0)) {
            return null;
        }
        const appRoute = routeConf[0];

        return (
            <>
                <div className="logo">
                    <img src={appRoute.logo} alt=""/>
                    {iscollapsed === 'false' && <Link to="/"><span>{appRoute.name}</span></Link>}
                </div>
                <Menu defaultSelectedKeys={['1']}
                      mode="inline" {...this.props}>
                    {generateChildrenMenu(appRoute.children)}
                </Menu>
            </>

        );
    }

}

class SiderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <>
                <NavMenu theme={this.props.theme} {...this.props}/>
            </>
        )
    }


}

export default SiderMenu;
