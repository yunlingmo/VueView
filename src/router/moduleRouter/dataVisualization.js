export default [
    {
        path: "home",
        name: "首页",
        component: () => import('@/pages/dataVisualization/home')
    },
    {
      path: "airQuality",
      name: "空气质量",
      component: () => import('@/pages/dataVisualization/airQuality')
    },
    {
      path: "waterPollution",
      name: "水污染",
      component: () => import('@/pages/dataVisualization/waterPollution')
    }
]