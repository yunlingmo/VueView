<template>
    <Panel class="air-survey" panelTitle="空气质量概况">
        <div id="airSurveyChartId"></div>
    </Panel>
</template>

<script>
    import { com_charts, com_axis, bar_itemStyle } from '@/assets/js/chartsCom'
    export default{
        name: 'airSurvey',
        data(){
            return {
                yearlyOutputChart: null,
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {   
            initChart() {
                // const 
                const baseOption = Object.assign(com_charts,{
                    color: ['#509EFD', '#00E9EA']
                });
                const XAxis = Object.assign({},com_axis,{
                    data: ['PM2.5','PM10','NO2','SO2','O3'],
                    axisLabel: {
                        textStyle: {
                            color: "rgba(165, 182, 212, 0.6)", //坐标的字体颜色
                            fontSize: 20,
                            fontFamily: 'NUM-WORD'
                        },
                    }
                });
                const YAxis = Object.assign({},com_axis,{
                    name: '(ug/m³)',
                    type: "value"
                });
                const series = [{
                        name: '2019年',
                        type: 'bar',
                        barWidth: 12,
                        data: [320, 332, 301, 334, 390, 330, 320],
                        itemStyle: bar_itemStyle
                    },
                    {
                        name: '2020年',
                        type: 'bar',
                        barWidth: 12,
                        data: [120, 132, 101, 134, 90, 230, 210],
                        itemStyle: bar_itemStyle
                    }
                ]
                const option = Object.assign({},baseOption,{xAxis: [XAxis]}, {yAxis: [YAxis]},{series});
                this.yearlyOutputChart = this.$echarts.init(
                    document.getElementById("airSurveyChartId")
                );
                this.yearlyOutputChart.setOption(option);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .air-survey{
        .panel(@height:200px);
        margin-top: 10px;
        flex-grow: 1;
        #airSurveyChartId{
            height: 100%;
        }
    }
</style>