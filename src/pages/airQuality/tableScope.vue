<template>
    <Panel class="monitor-data" panelTitle="表格插槽">
        <mo-table :headerData="headerData" :tableData="tableData">
            <!-- 排名 -->
            <template v-slot:slort="{data}">
                <span class="slort-class" :style="slortStyle(data.index)">{{data.index}}</span>
            </template>

            <!-- 指数 -->
            <template v-slot:number="{data}">
                <el-progress :percentage="data.row[data.label]" color="#4F9EFD"></el-progress>
            </template>

            <!-- 变化 -->
            <template v-slot:change="{data}">
                <span v-if="data.row.status==='equal'" class="no-change">无变化</span>
                <span v-if="data.row.status==='up'" class="up-change">
                    <i class="el-icon-caret-top"></i>
                    <span class="number-word">{{data.row[data.label]}}</span>
                </span>
                <span v-if="data.row.status==='down'" class="down-change">
                    <i class="el-icon-caret-bottom"></i>
                    <span class="number-word">{{data.row[data.label]}}</span>
                </span>
            </template>
        </mo-table>       
    </Panel>
</template>

<script>
    import moTable from '@/components/moTable';
    import { scrollFunction } from '@/assets/js/scroll'
    export default{
        name: 'tableScope', 
        components: {
            moTable
        },   
        data(){
            return {
                tableInterval: null,
                indexColor: ['rgba(234, 101, 96,', 'rgba(240, 150, 80,', 'rgba(251, 221, 135,'],
                headerData: [
                    {
                        label: '排名',
                        // width: 60,
                        prop:'slort',
                        slotName: 'slort'
                    },
                    {
                        label: '城市名称',
                        // width: 80,
                        prop:'name'
                    },
                    {
                        label: '指数',
                        width: 150,
                        prop:'number',
                        slotName: 'number'
                    },
                    {
                        label: '变化',
                        // width: 100,
                        prop:'change',
                        slotName: 'change'
                    }
                ],
                tableData: [
                    {
                        name:'深圳',
                        status: 'equal',
                        number: 50,
                        change: 0

                    },
                    {
                        name:'上海',
                        number: 20,
                        status: 'up',
                        change: 2
                    },
                    {
                        name:'北京',
                        number: 40,
                        status: 'down',
                        change: -1
                    },
                    {
                        name:'广州',
                        status: 'equal',
                        number: 60,
                        change: 20
                    },
                    {
                        name:'天津',
                        number: 20,
                        status: 'down',
                        change: 2
                    },
                    {
                        name:'北京',
                        number: 80,
                        status: 'up',
                        change: 10
                    },
                    {
                        name:'深圳',
                        status: 'equal',
                        number: 50,
                        change: 0

                    },
                    {
                        name:'上海',
                        number: 20,
                        status: 'up',
                        change: 2
                    },
                    {
                        name:'北京',
                        number: 40,
                        status: 'down',
                        change: -1
                    },
                    {
                        name:'广州',
                        status: 'equal',
                        number: 60,
                        change: 20
                    },
                    {
                        name:'天津',
                        number: 20,
                        status: 'down',
                        change: 2
                    },
                    {
                        name:'北京',
                        number: 80,
                        status: 'up',
                        change: 10
                    }
                ]
            }
        },
        computed: {
            slortStyle() {
                return function(index){
                    let color = 'rgba(203, 221, 255,'
                    if(index<3){
                        color = this.indexColor[index]
                    }
                    return {
                        color: color + '1)',
                        background: color + '0.2)'
                    }
                }
            }
        },
        mounted(){
            this.$nextTick(()=>{
                document.getElementsByClassName('mo-table')[0].getElementsByClassName('el-table__body-wrapper')[0].setAttribute('id', 'airQualityTableId');
                setTimeout(() => {
                    this.tableInterval = scrollFunction({parentId:'airQualityTableId', step: 1, timer: 200 })
                }, 1000) 
            })
        },
        methods: {},
        beforeDestroy() {
            clearInterval(this.tableInterval);
            this.tableInterval = null;
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .monitor-data{
        .panel(@height:200px);
        flex: 1;
        font-size: 18px;
        .slort-class{
            display: inline-block;
            height: 20px;
            width: 20px;
            text-align: center;
        }
        .no-change{
            color: #4F9EFD;
        }
        .up-change{
            font-size: 20px;
            color: #6BE5A2;
        }
        .down-change{
            font-size: 20px;
            color: #EA6560;
        }
    }
</style>