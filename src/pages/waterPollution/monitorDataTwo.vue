<template>
    <Panel class="monitor-data" panelTitle="污染物浓度监测">
        <mo-table class="water-table" :headerData="headerData" :tableData="tableData">
            <!-- 等级 -->
            <template v-slot:grade="{data}">
                <div class="grade-data" :style="slortStyle(data.row[data.label])">{{data.row[data.label]}}</div>
            </template>
        </mo-table>       
    </Panel>
</template>

<script>
    import moTable from '@/components/moTable';
    import { scrollFunction } from '@/assets/js/scroll'
    export default{
        name: 'monitorDataTwo', 
        components: {
            moTable
        },   
        data(){
            return {
                tableInterval: null,
                colorObject: {
                    I: 'rgba(0, 234, 156,',
                    II: 'rgba(0, 233, 234,',
                    III: 'rgba(79, 158, 253,'
                },
                headerData: [
                    {
                        label: '指标',
                        prop:'name'
                    },
                    {
                        label: '浓度',
                        prop:'nodu'
                    },
                    {
                        label: '等级',
                        width: 150,
                        prop:'grade',
                        slotName: 'grade'
                    }
                ],
                tableData: [
                    {
                        name:'氨氮',
                        nodu: '0.03',
                        grade: 'I'

                    },
                    {
                        name:'臭氧',
                        nodu: '0.53',
                        grade: 'III'
                    },
                    {
                        name:'二氧化硫',
                        nodu: '0.73',
                        grade: 'I'
                    },
                    {
                        name:'PM25',
                        nodu: '0.25',
                        grade: 'II'
                    },
                    {
                        name:'氨氮',
                        nodu: '0.03',
                        grade: 'I'

                    },
                    {
                        name:'臭氧',
                        nodu: '0.53',
                        grade: 'III'
                    },
                    {
                        name:'二氧化硫',
                        nodu: '0.73',
                        grade: 'I'
                    },
                    {
                        name:'PM25',
                        nodu: '0.25',
                        grade: 'II'
                    },
                ]
            }
        },
        computed: {
            slortStyle() {
                return function(grade){
                    let color = this.colorObject[grade]
                    return {
                        color: color + '1)',
                        background: color + '0.08)',
                        border: '1px solid ' + color + '0.2)'
                    }
                }
            }
        },
        mounted(){
            this.$nextTick(()=>{
                document.getElementsByClassName('water-table')[0].getElementsByClassName('el-table__body-wrapper')[0].setAttribute('id', 'waterTableId');              
                setTimeout(() => {
                    this.tableInterval = scrollFunction({parentId:'waterTableId', step: 1, timer: 200 })
                }, 1000)
            })
        },
        methods: {},        
        beforeDestroy() {console.log('yyyyyyyyyy')
            clearInterval(this.tableInterval);
            this.tableInterval = null;
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .monitor-data{
        .panel(@height:350px);
        flex: 1;
        font-size: 18px;
        .grade-data{
            width: 40px;           
            height: 20px;
            line-height: 20px;
            text-align: center;
        }
    }
</style>