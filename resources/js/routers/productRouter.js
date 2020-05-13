const productRouter = [
    {
        path: '/products',
        component: () => import ('../components/product/List'),
        name: 'productIndex',
    },
    {
        path: '/products/create',
        component: () => import ('../components/product/Create'),
        name: 'productCreate',
    },
    {
        path: '/products/edit/:id',
        component: () => import ('../components/product/Edit'),
        name: 'productEdit',
    },
];

export default productRouter;
