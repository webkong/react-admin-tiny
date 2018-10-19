import {SET_ROUTES_LIST} from "../actionTypes";
import routeArr from '../../routes/config';

const generate = (routeArr) => {

    let routes = [];
    routeArr.forEach((route) => {
        if (route.hasOwnProperty('children')) {
            routes.push({path:route.path, name: route.name, redirect: route.redirect});
            routes = routes.concat(generate(route.children));
        } else {
            routes.push(route);
        }
    });
    return routes;
};

const arrToObj = (arr) => {
    let obj = {};
    arr.forEach((elem) => {
        let {path, name, redirect} = elem;
        redirect = (redirect !== '');
        obj[elem.path] = {path, name, redirect}
    });
    return obj;
};

export const addRouteList = () => ({
    type: SET_ROUTES_LIST,
    payload: {
        routeArr: arrToObj(generate(routeArr[0].children))
    }
});
