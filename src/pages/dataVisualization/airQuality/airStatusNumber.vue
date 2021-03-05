<template>
    <Panel class="airStatus-panel" panelTitle="空气质量天数">      
        <div id="airStatusNumberChartId"></div>
    </Panel>
</template>

<script>
    import { pieChart } from '@/assets/js/echartJS/pieChart'
    export default{
        name: 'airStatusNumber',
        components: {},
        data() {
            return {
                fireChart: null,
                title: '',
                data:[
                    {value: 335, name: '优秀天数'},
                    {value: 310, name: '良好天数'},
                    {value: 234, name: '严重天数'}
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
                    centerData: '360',
                    color: ['#00EA9C','#FBDE88','#629EF6'],
                    labelShow: false
                }
                const option = pieChart(params);
                this.fireChart = this.$echarts.init(
                    document.getElementById("airStatusNumberChartId")
                );
                this.fireChart.setOption(option);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .airStatus-panel{
        .panel(@height:200px);
        margin-top: 10px;
        flex-grow: 1;
        #airStatusNumberChartId{
            height: 100%;
        }
    }
</style>