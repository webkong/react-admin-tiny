import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import routeConf from './config';


let AppRoute, AppRouteArr = [], ChildrenRoutes = {};


/**
 *@desc
 *@params {Object}
 *@return {*}
 */
const generateChildren = (routeArr) => {

    let routes = [];
    routeArr.forEach((route) => {
        if (route.hasOwnProperty('children')) {
            routes = routes.concat(generateChildren(route.children));
        } else {
            routes.push(generateRote(route));
        }
    });
    return routes;
};


/**
 *@desc generate object to RouteDom
 *@params {Object}  {path, component}
 *@return {ReactDOM}
 */
const generateRote = (route) => {
    const index = route.index || '';

    if (route.redirect && route.redirect !== '') {
        return (
            <Redirect key={route.path}
                      to={route.path}
            />
        )
    } else {
        return (
            <Route key={route.path + index} path={route.path} component={route.component}/>
        )
    }
};


const generateRoutes = (routeConf) => {
    //
    return routeConf.map((elem, index) => {
        // 获取app里面的顶级路由
        if (elem.path && elem.component) {
            AppRouteArr.push(generateRote({path: elem.path, component: elem.component, index}));
        }
        //获取子路由key
        const routesKey = elem.path.match(/\/(\w*)/);
        let key = null;
        if (routesKey && routesKey[1] !== '') {
            key = routesKey[1];
        } else {
            key = 'home';
        }
        // 生成子路由
        ChildrenRoutes[key] = generateChildren(elem.children);
        return ChildrenRoutes[key];
    });
};

if (routeConf && routeConf.length > 0) {
    generateRoutes(routeConf);
    AppRoute = AppRouteArr;
}


class AppRoutes extends Component {

    render() {
        return (
            <>
                {AppRoute}
            </>
        );
    }

}


class LayoutRoutes extends Component {
    render() {
        return (
            <>
                {ChildrenRoutes[this.props.name]}
            </>

        );
    }

}

export {AppRoutes, LayoutRoutes};
