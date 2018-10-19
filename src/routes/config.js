import React from 'react';
import Loadable from 'react-loadable';
import {Spin, Icon} from "antd";

const Loading = (props) => {
    if (props.error) {
        return JSON.stringify(props.error)
    } else {
        return (<Spin indicator={<Icon type="loading" style={{fontSize: 24}} spin/>}/>)
    }
};


/**
 *@desc
 * router config
 * app must be first element, it's children will be added to the side menu.
 * Other elements will not be added to the side menu.
 */
export default [
    // app
    {
        path: '/',
        logo: 'https://zos.alipayobjects.com/rmsportal/HXZvKsbcQljpFToWbjPj.svg',
        name: 'React Admin Tiny',
        component: Loadable({
            loader: () => import('../layouts/pageLayout'),
            loading: Loading
        }),
        children: [
            // dashboard
            {path: '/', name: 'home', redirect: '/dashboard/analysis'},
            {
                path: '/dashboard',
                redirect: '/dashboard/analysis',
                name: 'dashboard',
                icon: 'dashboard',
                children: [
                    {
                        path: '/dashboard/analysis',
                        name: 'analysis',
                        icon: 'analysis',
                        component: Loadable({
                            loader: () => import('../views/Dashboard/Analysis'),
                            loading: Loading
                        }),
                    },
                    {
                        path: '/dashboard/monitor',
                        name: 'monitor',
                        icon: 'monitor',
                        component: Loadable({
                            loader: () => import('../views/Dashboard/Monitor'),
                            loading: Loading
                        }),
                    }
                ]
            },
            {
                path: '/test/:id',
                name: 'test',
                icon: 'dashboard',
                component: Loadable({
                    loader: () => import('../views/test/test'),
                    loading: Loading
                })
            },
            {
                path: '/404',
                hide: true,
                component: Loadable({
                    loader: () => import('../components/404'),
                    loading: Loading
                })
            },
        ],
    },
    // user
    {
        path: '/user',
        component: Loadable({
            loader: () => import('../layouts/userLayout'),
            loading: Loading
        }),
        children: [
            {path: '/user', redirect: '/user/User'},
            {
                path: '/user/User',
                component: Loadable({
                    loader: () => import('../views/User/User'),
                    loading: Loading
                })
            },
            {
                path: '/user/register',
                component: Loadable({
                    loader: () => import('../views/User/Register'),
                    loading: Loading
                }),
            }
        ],
    },
];
