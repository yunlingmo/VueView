<template>
    <div class="mian-box home-box">
        <div class="left-panel">
            <air-quality-info></air-quality-info>
            <air-survey></air-survey>
            <air-status-number></air-status-number>
        </div>
        <div class="right-panel">
            <table-scope></table-scope>
            <air-quality-change></air-quality-change>
            <nice-city></nice-city>
        </div>
        <!-- 图例 -->
        <corner-box class="map-explain">
            <mo-tree :treeData="treeData"></mo-tree>
        </corner-box>
    </div>
</template>

<script>
    import airQualityInfo from './airQualityInfo'
    import airSurvey from './airSurvey'
    import airStatusNumber from './airStatusNumber'
    import tableScope from './tableScope'
    import niceCity from './niceCityAirQuality'
    import airQualityChange from './airQualityChange'
    import cornerBox from '@/components/cornerBox'
    import moTree from '@/components/moTree'
    
    export default{
        name: 'airQuality',
        components: {
            airQualityInfo,
            airSurvey,
            airStatusNumber,
            tableScope,
            niceCity,
            airQualityChange,
            cornerBox,
            moTree
        },
        data(){
            const data = [
                {
                    id: 1,
                    label: '指南',
                    icon: '#iconrunchungao',
                    children: [
                        {
                            id: 2,
                            label: '设计原则',
                            children: [
                                {
                                    id: 3,
                                    label: '一致'
                                }, 
                                {
                                    id: 4,
                                    label: '效率'
                                }
                            ]
                        },
                        {
                            id: 21,
                            label: '导航',
                            children: [
                                {
                                    id: 32,
                                    label: '侧向导航'
                                }, 
                                {
                                    id: 43,
                                    label: '顶部导航'
                                }
                            ]
                        }
                    ]
                }, 
                {
                    id: 5,
                    label: '组件',
                    icon: '#iconmuyuru',
                    children: [
                        {
                            id: 6,
                            label: 'Basic'
                        },
                        {
                            id: 61,
                            label: 'Form'
                        }
                    ]
                }, 
                {
                    id: 9,
                    label: '资源',
                    icon: '#iconmeirongyi',
                    children: [
                        {
                            id: 10,
                            label: '组件交互文档',
                            icon: '#iconjinghua',
                            children: [
                                {
                                    id: 11,
                                    label: 'Sketch Templates'
                                }, 
                                {
                                    id: 12,
                                    label: 'Axure Components'
                                }
                            ]
                        }
                    ]
                }
            ]
            return {
                treeData: JSON.parse(JSON.stringify(data))
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    @panelWidth: 500px;
    .left-panel{
        .panelBox(@width:500px);
    }
    .right-panel{
        .panelBox(@position: right; @width:@panelWidth);
    }
    .map-explain{       
        background: rgba(2, 8, 20, 0.6);
        position: absolute;
        bottom: 80px;
        right: @panelWidth + 40;
    }
</style>