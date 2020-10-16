import panelComponent from './index.vue';

const panel = {
    install:function(Vue) {
        Vue.component('Panel', panelComponent)
    }
}

export default panel;