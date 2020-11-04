<template>
    <Panel class="nice-city-panel" panelTitle="九大城市空气质量">
        <template v-slot:header>
            <option-select :options="options" defaultValue="PM2" @changeValue="changeValue"></option-select>
        </template> 
        <div id="niceCityChartId"></div>
    </Panel>
</template>

<script>
    import optionSelect from '@/components/optionSelect'
    import { com_charts, com_axis, bar_itemStyle } from '@/assets/js/echartJS/chartsCom'
    export default{
        name: 'niceCityAirQuality',
        components:{
            optionSelect
        },
        data(){
            return {
                niceCityChart: null,
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
                const baseOption = Object.assign({
                    color: ['#00E9EA']
                }, com_charts);
                const XAxis = Object.assign({},com_axis,{
                    data: ['北京','上海','深圳','广州','杭州','南宁','珠江','天津','海口'],
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
                        data: [320, 332, 301,132, 101, 134, 90, 200, 66],
                        itemStyle: bar_itemStyle
                    }
                ]
                const option = Object.assign({},baseOption,{xAxis: [XAxis]}, {yAxis: [YAxis]},{series});
                this.niceCityChart = this.$echarts.init(
                    document.getElementById("niceCityChartId")
                );
                this.niceCityChart.setOption(option);
            },
            changeValue(value) {
                console.log('selectValue:', value)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .nice-city-panel{
        .panel(@height:200px);
        margin-top: 10px;
        flex: 1;
        #niceCityChartId{
            height: 100%;
        }
    }
</style>