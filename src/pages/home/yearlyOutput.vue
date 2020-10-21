<template>
    <Panel class="yearly-output" panelTitle="年产量">
        <div id="outputChartId"></div>
    </Panel>
</template>

<script>
    import { com_charts, com_axis } from '@/assets/js/echartJS/chartsCom'
    import { tooltipScope } from '@/assets/js/echartJS/common'
    export default{
        name: 'yearlyOutput',
        data(){
            return {
                yearlyOutputInterval: null,
                yearlyOutputChart: null,
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {   
            initChart() {
                const baseOption = Object.assign(com_charts,{});
                const XAxis = Object.assign({},com_axis,{
                    data: ['2016','2017','2018','2019','2020'],
                    axisLabel: {
                        textStyle: {
                            color: "rgba(165, 182, 212, 0.6)", //坐标的字体颜色
                            fontSize: 20,
                            fontFamily: 'NUM-WORD'
                        },
                    }
                });
                const YAxis = Object.assign({},com_axis,{
                    name: '(万件)',
                    type: "value"
                });
                const series = [{
                        name: '直接访问',
                        type: 'bar',
                        barWidth: 12,
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '邮件营销',
                        type: 'bar',
                        barWidth: 12,
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        barWidth: 12,
                        data: [220, 182, 191, 234, 290, 330, 310]
                    }
                ]
                const option = Object.assign({},baseOption,{xAxis: [XAxis]}, {yAxis: [YAxis]},{series});
                this.yearlyOutputChart = this.$echarts.init(
                    document.getElementById("outputChartId")
                );
                this.yearlyOutputChart.setOption(option);
                this.yearlyOutputInterval = tooltipScope({
                    seriesLength: 5,
                    myChart: this.yearlyOutputChart
                })()
            }
        },
        beforeDestroy() {
            clearInterval(this.yearlyOutputInterval);
            this.yearlyOutputInterval = null;
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .yearly-output{
        .panel(@height:200px);
        margin-top: 10px;
        flex-grow: 1;
        #outputChartId{
            height: 100%;
        }
    }
</style>