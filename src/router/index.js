import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 各模块路由
import compomentRouter from './moduleRouter/compomentRouter';
import pageRouter from './moduleRouter/pageRouter';
import personalRouter from './moduleRouter/personalRouter';
import systemRouter from './moduleRouter/systemRouter';
import dataVisualization from './moduleRouter/dataVisualization';

// 数据可视化路由
const VChildren = [].concat(...dataVisualization);
// 主页路由
const PChildren = [].concat(
    {
        path: 'home', 
        name: '功能页',
        component: () => import('../pages/Principal/home'),
    }
).concat(...compomentRouter, ...pageRouter, ...personalRouter, ...systemRouter);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dataVisualization/home',
        },
        {
            path: '/dataVisualization',
            component: () => import('../pages/dataVisualization'),
            children: VChildren,
        },
        {
            path: '/principal',
            component: () => import('../pages/Principal'),
            children: PChildren,
        },
    ],
});
