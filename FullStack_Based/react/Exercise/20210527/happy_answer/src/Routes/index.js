import Home from '../Components/Home';
import Item from '../Components/Item';
import Score from '../Components/Score';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/item',
        component: Item
    },
    {
        path: '/score',
        component: Score
    }
];

export default routes;