<template>
    <Panel class="change-panel" panelTitle="九大城市空气质量">
        <template v-slot:header>
            <option-select :options="options" defaultValue="PM2" @changeValue="changeValue"></option-select>
        </template> 
        <div id="airChangeChartId"></div>
    </Panel>
</template>

<script>
    import optionSelect from '@/components/optionSelect'
    import { com_charts, com_axis, bar_itemStyle } from '@/assets/js/echartJS/chartsCom'
    export default{
        name: 'airQualityChange',
        components:{
            optionSelect
        },
        data(){
            return {
                airChangeChart: null,
                options: [
                    {
                        value: 'PM2',
                        label: 'PM2.5'
                    }, {
                        value: 'O3',
                        label: 'O3'
                    }, {
                        value: 'SO2',
                        label: 'SO2'
                    }, {
                        value: 'NO',
                        label: 'NO'
                    }
                ],
                airItemValue: 'PM2'
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {   
            initChart() {
                const baseOption = Object.assign(com_charts,{
                    color: ['#509EFD']
                });
                const XAxis = Object.assign({},com_axis,{
                    data: ['2016','2016','2014','2015','2016','2017','2018','2019','2020'],
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: "rgba(165, 182, 212, 0.6)", //坐标的字体颜色
                            fontSize: 16,
                            fontFamily: 'CHINESE-BOLD'
                        }
                    }
                });
                const YAxis = Object.assign({},com_axis,{
                    name: '(mg/m³)',
                    type: "value"
                });
                const series = [{
                        name: 'PM2.5',
                        type: 'bar',
                        barWidth: 12,
                        data: [320, 332, 301,132, 101, 134, 90, 200, 66, 320, 332, 301,132, 101],
                        itemStyle: bar_itemStyle
                    }
                ]
                const option = Object.assign({},baseOption,{xAxis: [XAxis]}, {yAxis: [YAxis]},{series});
                this.airChangeChart = this.$echarts.init(
                    document.getElementById("airChangeChartId")
                );
                this.airChangeChart.setOption(option);
            },
            changeValue(value) {
                console.log('selectValue:', value)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .change-panel{
        .panel(@height:200px);
        margin-top: 10px;
        flex: 1;
        #airChangeChartId{
            height: 100%;
        }
    }
</style>