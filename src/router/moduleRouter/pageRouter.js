export default [
    {
        path: 'schedulePage', 
        name: '日程安排',
        component: () => import('@/pages/Principal/examplePages/schedulePage'),
    },
    {
        path: 'mapPage', 
        name: '地图',
        component: () => import('@/pages/Principal/examplePages/mapPage'),
    },
    {
        path: 'organizationChartPage', 
        name: '组织架构图',
        component: () => import('@/pages/Principal/examplePages/organizationChartPage'),
    }
]