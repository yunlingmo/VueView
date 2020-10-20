<template>
    <div class="mian-box home-box">
        <div class="left-panel">
            <air-quality-info></air-quality-info>
            <air-survey></air-survey>
            <air-status-number></air-status-number>
        </div>
        <div class="right-panel">
            <table-scope></table-scope>
            <air-quality-change></air-quality-change>
            <nice-city></nice-city>
        </div>
    </div>
</template>

<script>
    import airQualityInfo from './airQualityInfo'
    import airSurvey from './airSurvey'
    import airStatusNumber from './airStatusNumber'
    import tableScope from './tableScope'
    import niceCity from './niceCityAirQuality'
    import airQualityChange from './airQualityChange'
    
    export default{
        name: 'airQuality',
        components: {
            airQualityInfo,
            airSurvey,
            airStatusNumber,
            tableScope,
            niceCity,
            airQualityChange,           
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