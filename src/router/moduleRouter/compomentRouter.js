export default [
    {
        path: 'table', 
        name: '表格',
        component: () => import('@/pages/Principal/compomentPage/table'),       
    },
    {
        path: 'pagination', 
        name: '分页',
        component: () => import('@/pages/Principal/compomentPage/pagination'), 
    },
    {
        path: 'form', 
        name: '表单',
        component: () => import('@/pages/Principal/compomentPage/form'), 
    }
]