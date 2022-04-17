type routesProps = {
    path: string;
    exact: boolean  ;
    component: string;
}[];

const routes: routesProps = [
    {
        path: '/',
        exact: true,
        component: 'Home'
    }
];

export default routes;