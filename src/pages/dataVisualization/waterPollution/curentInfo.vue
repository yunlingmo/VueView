<template>   
    <div class="item-data">
        <h5>{{waterData.name}}</h5>
        <div class="bottom-info">
            <span class="time number-word">{{waterData.time}}</span>
            <span :class="{'grades': true, 'pass-grades': waterData.grades === '合格'}">
                {{waterData.grades}}
            </span>
            <div class="grade">
                <span>考核要求: {{waterData.claim}}</span>
                <span>水质现状: {{waterData.status}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'curentInfo',
        components: {},
        data(){
            return {
                waterData: {
                    name: '流溪河山庄',
                    time: '2020-09-11 04:00',
                    grades: '合格',
                    claim: 'Ⅳ',
                    status: 'II'
                }
            }
        },
        mounted(){},
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .item-data{
        height: 120px;
        padding: 25px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        border: 1px solid #4F9EFD;
        margin-bottom: 10px;
        background: linear-gradient(90deg, rgba(79, 158, 253, 0.24) 0%, rgba(79, 158, 253, 0.04) 100%);
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
</style>