//引入组件
import App from '../App';
import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import FindHouse from '../pages/FindHouse/FindHouse';
import Profile from '../pages/Profile/Profile';
import CityList from '../pages/CityList/CityList';


//引入路由重定向
import { Redirect } from 'react-router-dom';

//创建路由
const routes = [{
    path: '/',
    component: App,
    routes: [{
        path: '/',
        exact: true,
        render:()=> (<Redirect to={"/home"}/>)
    },{
        path: '/home',
        component: Home,
    },{
        path: '/findhouse',
        component: FindHouse
    },{
        path: '/news',
        component: News
    },{
        path: '/profile',
        component: Profile
    }]
}]

export default routes;