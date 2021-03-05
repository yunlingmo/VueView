export default [
    {
        path: 'menuControl', 
        name: '菜单管理',
        component: () => import('@/pages/Principal/sysSetting/menuControl'),       
    },
    {
        path: 'powerControl', 
        name: '权限管理',
        component: () => import('@/pages/Principal/sysSetting/powerControl'),       
    },
    {
        path: 'userControl', 
        name: '用户管理',
        component: () => import('@/pages/Principal/sysSetting/userControl'),       
    }
]