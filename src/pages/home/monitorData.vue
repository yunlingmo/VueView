<template>
    <Panel class="monitor-data" panelTitle="数据监测">
        <div class="data-box">
            <h4>
                国家重点监控单位废气监测数据               
            </h4>
            <div class="table-panel">
                <!-- 表头 -->
                <section class="table-header">
                    <div class="column-cel" v-for="(val, key) in tableHeader" :key="key" :style="{width: val.width+'px'}">
                        <span class="single-name" v-for="name in val.names" :key="name">
                            {{name}}
                        </span>
                    </div>
                </section>
                <!-- 表内容 -->
                <section class="table-content" id="tableContentId">
                    <div class="company-data" v-for="company in tableData" :key="company.name">
                        <!-- 公司名称 -->
                        <h3>{{company.name}}</h3>
                        <!-- 某个监测点数据 -->
                        <div class="item-data"  v-for="(item, index) in company.data" :key="index">
                            <!-- 单个监测项数据 -->
                            <span class="cell-data" v-for="(val, key) in tableHeader" :key="key" :style="{width: val.width+'px'}">
                                <span class="single-data" v-for="data in item[key]" :key="data">
                                    {{data}}
                                </span>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </Panel>
</template>

<script>
    import { scrollFunction } from '@/assets/js/scroll'
    export default{
        name: 'monitorData',
        data(){
            return {
                tableInterval: null,
                tableHeader: {
                    monitorPoint: {
                        names: ['监测点名称'],
                        width: '60'
                    },
                    flow: {
                        names: ['流量', '(㎡)'],
                        width: '30'
                    },
                    speed: {
                        names: ['流速','(㎡)'],
                        width: '30'
                    },
                    NOX: {
                        names: ['氮氧化物','(mg/m³)','浓度/限值'],
                        width: '60'
                    },
                    SO2: {
                        names: ['二氧化硫','(mg/m³)','浓度/限值'],
                        width: '60'
                    },
                    smoke: {
                        names: ['烟尘','(mg/m³)','浓度/限值'],
                        width: '60'
                    }
                },
                tableData: [
                    {
                        name: 'XXXX股份有限公司',
                        data: [
                            {
                                monitorPoint: ['500吨脱墨渣焚烧炉'],
                                flow: ['189'],
                                speed: ['349'],
                                NOX: ['169','--'],
                                SO2: ['129','600'],
                                smoke: ['189','500']
                            },
                            {
                                monitorPoint: ['350锅炉'],
                                flow: ['189'],
                                speed: ['349'],
                                NOX: ['169','--'],
                                SO2: ['129','600'],
                                smoke: ['189','500']
                            }
                        ]
                    },
                    {
                        name: 'YYYY股份有限公司',
                        data: [
                            {
                                monitorPoint: ['500吨脱墨渣焚烧炉'],
                                flow: ['189'],
                                speed: ['349'],
                                NOX: ['169','--'],
                                SO2: ['129','600'],
                                smoke: ['189','500']
                            },
                            {
                                monitorPoint: ['350锅炉'],
                                flow: ['189'],
                                speed: ['349'],
                                NOX: ['169','--'],
                                SO2: ['129','600'],
                                smoke: ['189','500']
                            },
                            {
                                monitorPoint: ['520粉尘'],
                                flow: ['189'],
                                speed: ['349'],
                                NOX: ['169','--'],
                                SO2: ['129','600'],
                                smoke: ['189','500']
                            }
                        ]
                    }
                ]
            }
        },
        mounted(){
            this.$nextTick(() => {
                setTimeout(() => {
                    this.tableInterval = scrollFunction({parentId:'tableContentId', step: 1, timer: 300 })
                }, 1000)
            });
        },
        beforeDestroy() {
            clearInterval(this.tableInterval);
            this.tableInterval = null;
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .tableCellStyle() {
        font-size: 16px;
        color: rgba(203, 221, 255, 0.8);
        background:rgba(255, 255, 255, 0.08);
    }
    .monitor-data{
        .panel(@height:200px);
        flex: 1;
        .data-box{
            height: 100%;
            display: flex;
            flex-direction: column;
            h4{
                margin-bottom: 18px;             
                font-size: 20px;
                color: #CBDDFF;
            }
            .table-panel{
                height: 50px;
                flex: 1;
                display: flex;
                flex-direction: column;
                
                .table-header{
                    .flex();
                    .column-cel{
                        .tableCellStyle();
                        .flex(column);
                        height: 60px;
                        flex-grow: 1;
                        justify-content: center;
                        margin-right: 2px;
                        &:last-child{
                            margin-right: 0;
                        }
                        .single-name{
                            margin: 2px 0;
                            &:nth-child(2){
                                color: rgba(0, 233, 234, 0.8);
                            }
                        }
                    }
                }
                .table-content{
                    height: 50px;
                    flex: 1;
                    overflow: auto;
                    .company-data{
                        h3{
                            margin: 10px 0 5px;
                            font-size: 16px;
                            text-align: center;
                            color: #4F9EFD;
                        }
                        .item-data{
                            .flex();
                            margin-bottom: 2px;
                            .cell-data{
                                .tableCellStyle();
                                height: 36px;
                                flex-grow: 1;
                                padding: 0 8px;
                                margin-right: 2px;
                                display: flex;
                                align-items: center;
                                justify-content: space-evenly;
                                &:last-child{
                                    margin-right: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>