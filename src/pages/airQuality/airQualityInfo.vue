<template>
    <Panel class="airquality-panel" panelTitle="空气质量">
        <div class="info-top">
            <div :class="{'item-data': true, 'person-item': item.type === 'persent'}" v-for="item in topInfoData" :key="item.name">
                <template v-if="item.type === 'persent'">
                    <el-progress
                        type="circle" 
                        :width="85"  
                        :show-text="false" 
                        color="#00EA9C"
                        :stroke-width="7"
                        :percentage="item.value">
                    </el-progress>
                    <div class="text">
                        <span class="text-value number-word">
                            {{item.value}}
                            <span class="unit">%</span>
                        </span>
                        <span class="text-name">{{item.name}}</span>
                    </div>
                </template>
                <template v-else>
                    <div class="text">
                        <span :class="{'text-value': true, 'number-word': item.type === 'number'}">
                            {{item.value}}
                        </span>
                        <span class="text-name">{{item.name}}</span>
                    </div>
                </template>

            </div>

        </div>
        <div class="info-bottom">
            <div class="throungh-line"></div>
            <div class="item-data" v-for="(temp, index) in bottomInfoData" :key="index">
                <span class="number-word">{{temp.value}}</span>
                <span class="circle-icon"></span>
                <span class="name">{{temp.name}}</span>
                <span class="unit">{{temp.unit}}</span>
            </div>
        </div>
    </Panel>
</template>

<script>
    export default{
        name: 'airQualityInfo',
        components: {},
        data() {
            return {
                topInfoData: [
                    {
                        type: 'persent',
                        name: '优良',
                        value: 86
                    },
                    {
                        type: 'number',
                        name: '全市平均值',
                        value: '130'
                    },
                    {
                        type: 'string',
                        name: '污染物',
                        value: '臭氧'
                    }
                ],
                bottomInfoData: [
                    {
                        value: '16',
                        name: 'PM².5',
                        unit: '(mg/m³)'
                    },
                    {
                        value: '52',
                        name: 'PM10',
                        unit: '(mg/m³)'
                    },
                    {
                        value: '36',
                        name: 'SO²',
                        unit: '(mg/m³)'
                    },
                    {
                        value: '16',
                        name: 'PM².5',
                        unit: '(mg/m³)'
                    },
                    {
                        value: '52',
                        name: 'PM10',
                        unit: '(mg/m³)'
                    },
                    {
                        value: '36',
                        name: 'SO²',
                        unit: '(mg/m³)'
                    }
                ]
            }
        },
        methods: {            
            monthChange(newMonth) {
                this.monthValue = newMonth
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .airquality-panel{
        .panel(@height:230px);
        font-size: 18px;
        color: #CBDEFF;
        flex-grow: 1;
        .info-top{
            .flex();
            height: 50%;            
            background: linear-gradient(90deg, rgba(0, 234, 156, 0.3) 0%, rgba(0, 234, 156, 0.1) 100%);
            .item-data{
                .text{
                   .flex(column);
                   .text-value{
                      color: #00EA9C;
                      line-height: 30px;
                   }
                   .number-word{
                       font-size: 36px;
                   }
                }
            }
            .person-item{
                position: relative;
                color: #00EA9C;
                .text{
                    width: 100%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    .text-value{
                        font-size: 32px;
                        .unit{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .info-bottom{
            height: 50%;
            position: relative;
            .flex();
            .throungh-line{               
                height: 2px;
                width: calc(100% - 20px);
                position: absolute;
                top: 51px;
                background: linear-gradient(90deg, rgba(80, 158, 253, 0.2) 0%, #509EFD 20%, rgba(80, 158, 253, 0.99) 80%, rgba(80, 158, 253, 0.2) 100%);
            }
            .item-data{
                .flex(column);
                .number-word{
                    font-size: 24px;
                    color: #509EFE;
                    line-height: 24px;
                }
                .circle-icon{
                    width: 8px;
                    height: 8px;
                    border-radius: 8px;
                    margin:5px 0;
                    background: #509EFE;
                }
                .name{
                    font-size: 16px;
                }
                .unit{
                    font-size: 14px;
                }
            }
        }
    }
</style>