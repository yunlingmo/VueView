<template>
    <mo-dialog v-if="dialogShow" :dialogTitle="dialogTitle" :dialogWidth="500" :dialogHeight="300" @dialogClose="dialogClose">
        <div class="dialog-content">
            <btn-list :btnList="btnList" :defaultBtn="defaultBtn" @btnChange="btnChange"></btn-list>
            <corner-box class="airbox">
                <info-list :infoList="infoList" :infoTitleWidth="infoTitleWidth"></info-list>
            </corner-box>
        </div>
    </mo-dialog>   
</template>

<script>
    import moDialog from '@/components/moDialog'
    import btnList from '@/components/btnList'
    import cornerBox from '@/components/cornerBox'
    import infoList from '@/components/infoList'
    export default{
        name: 'airDialog',
        components: {
            moDialog,
            btnList,
            cornerBox,
            infoList
        },
        props: {
            dialogShow: {
                type: Boolean
            }
        },
        data() {
            return {
                dialogTitle: "弹窗标题",             
                btnList: [
                    {
                        name: '基本信息',
                        key: 'base'
                    },
                    {
                        name: '设备信息',
                        key: 'device'
                    }
                ],
                defaultBtn: 'base',
                infoList: [
                    {
                        title: '地址',
                        value: '广东省深圳市宝安区兴东社区欢乐屋公寓',
                        spanWidth: 24
                    },
                    {
                        title: '姓名',
                        value: '罗斯芬',
                        spanWidth: 12
                    },
                    {
                        title: '性别',
                        value: '女',
                        spanWidth: 12
                    },
                    {
                        title: '年龄',
                        valueType: 'number',
                        value: '18',
                        spanWidth: 12
                    },
                    {
                        title: '爱好',
                        value: '篮球',
                        spanWidth: 12
                    },
                    {
                        title: '经验',
                        value: '暂无',
                        spanWidth: 12
                    }
                ],
                infoTitleWidth: '50px',
            }
        },
        methods: {
            btnChange(btn){
                console.log('btn:', btn)
            },
            dialogClose() {
                console.log('xxxxxxxxxxxxx')
                this.$emit('update:dialogShow', false)
            }
        }
    }
</script>

<style lang="less" scoped>
.dialog-content{
    height: 100%;
    display: flex;
    flex-direction: column;
    .airbox{
        flex-grow: 1;
        margin-top: 8px;
    }
}
</style>