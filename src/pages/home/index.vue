<template>
    <div class="mian-box home-box">
        <div class="left-panel">
            <air-quality-calendar></air-quality-calendar>
            <fire-proportion></fire-proportion>
            <yearly-output></yearly-output>
        </div>
        <!-- 图标按钮 -->
        <div class="icon-btns">
            <span @click="iconBtnClick">
                <my-icon fontName="#iconwxbsousuotuiguang" fontSize="20"></my-icon>
            </span>
        </div>
        <div class="right-panel">
            <monitor-data></monitor-data>
            <monitor-data-two></monitor-data-two>
            <case-number></case-number>
        </div>
        <air-dialog :dialogShow.sync="dialogShow"></air-dialog>
    </div>
</template>

<script>
    import airQualityCalendar from './airQualityCalendar'
    import fireProportion from './fireProportion'
    import yearlyOutput from './yearlyOutput'
    import caseNumber from './caseNumber'
    import monitorData from './monitorData'
    import monitorDataTwo from './monitorDataTwo'
    import airDialog from './airDialog'
    export default{
        name: 'home',
        components: {
            airQualityCalendar,
            fireProportion,
            yearlyOutput,
            caseNumber,
            monitorData,
            monitorDataTwo,
            airDialog
        },
        data(){
            return {
                dialogShow: false
            }
        },
        methods: {
            iconBtnClick() {
                this.dialogShow = !this.dialogShow
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .left-panel{
        .panelBox(@width:500px);
    }
    .right-panel{
        .panelBox(@position: right; @width:500px);
    }
    .icon-btns{
        float: left;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        span{
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            border: 1px solid rgba(79, 158, 253, 1);
            background: #02102c;
            color: #fcfdfe;
            &:hover{
                color: rgba(79, 158, 253, 1);
            }
        }
    }
</style>