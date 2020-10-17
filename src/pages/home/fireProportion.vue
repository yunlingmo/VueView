<template>
    <Panel class="fireProportion-panel" panelTitle="火点类型占比">      
        <div id="fireChartId"></div>
    </Panel>
</template>

<script>
    import { pieChart } from '@/assets/js/pieChart'
    export default{
        name: 'fireProportion',
        components: {},
        data() {
            return {
                fireChart: null,
                title: '',
                data:[
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {   
            initChart() {
                const option = pieChart({title: this.title, data: this.data, centerData: 50});
                console.log('option',option);
                this.fireChart = this.$echarts.init(
                    document.getElementById("fireChartId")
                );
                this.fireChart.setOption(option);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .fireProportion-panel{
        .panel(@height:200px);
        margin-top: 10px;
        flex-grow: 1;
        #fireChartId{
            height: 100%;
        }
    }
</style>