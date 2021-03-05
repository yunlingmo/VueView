<template>
    <Panel class="monitor-data" panelTitle="水表数据监测">
        <template v-slot:header>
            <btn-list :btnList="btnList" :defaultBtn="defaultBtn" @btnChange="btnChange"></btn-list>
        </template>
        <div class="data-box" id="dataBox">
            <div class="content">
                <div
                    v-for="(data, index) in waterData" :key="index"
                    :class="{'item-data': true, 'even-row': index%2===0}">
                    <h5>{{data.name}}</h5>
                    <div class="bottom-info">
                        <span class="time number-word">{{data.time}}</span>
                        <span :class="{'grades': true, 'pass-grades': data.grades === '合格'}">
                            {{data.grades}}
                        </span>
                        <div class="grade">
                            <span>考核要求: {{data.claim}}</span>
                            <span>水质现状: {{data.status}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Panel>
</template>

<script>
    import { scrollFunction } from '@/assets/js/scroll'
    import btnList from '@/components/btnList'
    export default{
        name: 'monitorData',
        components: {
            btnList
        },
        data(){
            return {
                tableInterval: null,               
                btnList: [
                    {
                        name: '合格',
                        key: 'pass'
                    },
                    {
                        name: '不合格',
                        key: 'noPass'
                    }
                ],
                defaultBtn: 'pass',
                tableData: {
                    pass: [
                        {
                            name: '流溪河山庄',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '鸦岗',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '鸦岗',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '墩头基',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '增江口',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '大龙涌口',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '鸦岗',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '鸦岗',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '墩头基',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '增江口',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '大龙涌口',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        }
                    ],
                    noPass: [
                        {
                            name: '111111',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '222222',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '333333',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '444444',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '5555555',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '666666',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '777777',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '888888',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '999999',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: '000000',
                            time: '2020-09-11 04:00',
                            grades: '合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        },
                        {
                            name: 'aaaaaa',
                            time: '2020-09-11 04:00',
                            grades: '不合格',
                            claim: 'Ⅳ',
                            status: 'II'
                        }
                    ]
                },
                waterData: []
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.waterData = this.tableData[this.defaultBtn]
                setTimeout(() => {
                    this.tableInterval = scrollFunction({parentId:'dataBox', step: 2, timer: 300 })
                }, 1000)               
            });
        },
        methods: {
            btnChange(currentBtn) {
                this.waterData = this.tableData[currentBtn]
            }
        },
        beforeDestroy() {
            clearInterval(this.tableInterval);
            this.tableInterval = null;
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .monitor-data{
        flex-grow: 1;
        .data-box{
            height: 100%;
            overflow-y: auto;
            .item-data{
                height: 80px;
                padding: 10px 20px;
                margin-bottom: 6px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
                background: rgba(255, 255, 255, 0.06);
                &:last-child{
                    margin-bottom: 0;
                }
                h5{
                    text-align: left;
                    color: rgba(0, 234, 234, 1);
                }
                .bottom-info{
                    .flex();
                    justify-content: space-between;
                    .time{
                        color: rgba(165, 182, 212, 1);
                    }
                    .grades{
                        width: 64px;
                        height: 24px;
                        line-height: 24px;
                        font-size: 18px;
                        color: rgba(252, 90, 90, 1);
                        background: rgba(252, 90, 90, 0.2);
                        &.pass-grades{                        
                            color: rgba(0, 234, 156, 1);
                            background: rgba(0, 234, 156, 0.2);
                        }
                    }
                    .grade{
                        font-size: 16px;
                        color: rgba(203, 222, 255, 1);
                        &span{
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
</style>