<template>
    <Panel class="case-number" panelTitle="事件次数">
        <div id="caseNumberChartId"></div>
    </Panel>
</template>

<script>
    import { com_charts, com_axis, bar_itemStyle } from '@/assets/js/echartJS/chartsCom'
    import { tooltipScope } from '@/assets/js/echartJS/common'
    export default{
        name: 'caseNumber',
        data(){
            return {
                caseNumberInterval: null,
                caseNumberChart: null,
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {   
            initChart() {
                const baseOption = Object.assign(com_charts,{});
                const XAxis = Object.assign({},com_axis,{
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: "rgba(165, 182, 212, 0.6)", //坐标的字体颜色
                            fontSize: 20,
                            fontFamily: 'NUM-WORD'
                        },
                        formatter: function (name) {
                            const newName = name.replace('月', '');
                            return newName + " {a|月}";
                        },
                        rich: {
                            a: {
                            padding: [5, 0, 0, -6],
                            fontSize: "16",
                            fontFamily: 'CHINESE-BOLD',
                            },
                        }
                    }
                });
                const YAxis = Object.assign({},com_axis,{
                    name: '(件)',
                    type: "value"
                });
                const series = [{
                        name: '事件次数',
                        type: 'bar',
                        barWidth: 12,
                        data: [320, 332, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90],
                        itemStyle: bar_itemStyle
                    }
                ]
                const option = Object.assign({},baseOption,{xAxis: [XAxis]}, {yAxis: [YAxis]},{series});
                this.caseNumberChart = this.$echarts.init(
                    document.getElementById("caseNumberChartId")
                );
                this.caseNumberChart.setOption(option);
                this.caseNumberInterval = tooltipScope({
                    seriesLength: 12,
                    myChart: this.caseNumberChart
                })()
            }
        },
        beforeDestroy() {
            clearInterval(this.caseNumberInterval);
            this.caseNumberInterval = null;
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .case-number{
        .panel(@height:200px);
        margin-top: 10px;
        flex: 1;
        #caseNumberChartId{
            height: 100%;
        }
    }
</style>