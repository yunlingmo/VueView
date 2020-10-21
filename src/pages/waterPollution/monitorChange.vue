<template>
    <Panel class="nice-city-panel" panelTitle="监测数据变化趋势">
        <template v-slot:header>
            <option-select :options="options" defaultValue="PM2" @changeValue="changeValue"></option-select>
        </template> 
        <div id="niceCityChartId"></div>
    </Panel>
</template>

<script>
    import optionSelect from '@/components/optionSelect'
    import { com_charts, com_axis } from '@/assets/js/chartsCom'
    export default{
        name: 'monitorChange',
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
                const baseOption = Object.assign(com_charts,{
                    color: ['#FFDD77','#4F9EFD']
                });
                const XAxis = Object.assign({},com_axis,{
                    data: ['15日','16日','17日','18日','19日','20日','21日']
                });
                const YAxis = Object.assign({},com_axis,{
                    name: '(mg/m³)',
                    type: "value"
                });
                const series = [
                    {
                        name: '臭氧',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: '6',
                        data: [20, 32, 1,32, 1, 34, 90, 20, 66]
                    },
                    {
                        name: '硫化物',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: '6',
                        data: [32, 33, 30,12, 11, 34, 30, 20, 6]
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