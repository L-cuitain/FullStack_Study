//引入路由
import { Redirect } from 'react-router-dom';

//引入组件
import ACom from '../Components/ACom';
import {BCom , GoCom , RustCom} from '../Components/BCom';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/about"/>
    },
    {
        path: '/home',
        component: ACom
    },
    {
        path: '/about',
        component: BCom,
        routes: [
            {
                path: '/about/gocom',
                exact: true,
                component: GoCom
            },
            {
                path: '/about/rustcom',
                exact: true,
                component: RustCom
            }
        ]
    }
]

export default routes;
