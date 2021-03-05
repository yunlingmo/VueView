<template>
    <Panel class="fireProportion-panel" panelTitle="火点类型占比">      
        <div id="fireChartId"></div>
    </Panel>
</template>

<script>
    import { pieChart } from '@/assets/js/echartJS/pieChart'
    import { tooltipScope } from '@/assets/js/echartJS/common'
    export default{
        name: 'fireProportion',
        components: {},
        data() {
            return {
                fireChart: null,
                fireInterval: null, 
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
                const params = {
                    title: this.title,
                    data: this.data,
                    centerData: 50,
                    color: ['#7268D0', '#FFDE78', '#6CE5A2', '#F09650','#509EFD'],
                }
                const option = pieChart(params);
                console.log('option',option);
                this.fireChart = this.$echarts.init(
                    document.getElementById("fireChartId")
                );
                this.fireChart.setOption(option);
                this.fireInterval = tooltipScope({
                    seriesLength: this.data.length,
                    myChart: this.fireChart
                })()
            }
        },
        beforeDestroy() {
            console.log('this.fireInterval', this.fireInterval)
            clearInterval(this.fireInterval);
            this.fireInterval = null;
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