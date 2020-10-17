<template>
    <div class="mian-box home-box">
        <div class="left-panel">
            <air-quality-calendar></air-quality-calendar>
            <fire-proportion></fire-proportion>
            <yearly-output></yearly-output>
        </div>
        <div class="right-panel">
            <monitor-data></monitor-data>
            <monitor-data-two></monitor-data-two>
            <case-number></case-number>
        </div>
    </div>
</template>

<script>
    import airQualityCalendar from './airQualityCalendar'
    import fireProportion from './fireProportion'
    import yearlyOutput from './yearlyOutput'
    import caseNumber from './caseNumber'
    import monitorData from './monitorData'
    import monitorDataTwo from './monitorDataTwo'
    export default{
        name: 'home',
        components: {
            airQualityCalendar,
            fireProportion,
            yearlyOutput,
            caseNumber,
            monitorData,
            monitorDataTwo
        },
        data(){
            return {}
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .left-panel{
        .panelBox(@width:554px);
    }
    .right-panel{
        .panelBox(@position: right; @width:560px);
    }
</style>