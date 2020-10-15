<template>
    <div class="mian-box home-box">
        <div class="left-panel">
            <air-quality-calendar></air-quality-calendar>
        </div>
        <div class="right-panel">右边</div>
    </div>
</template>

<script>
    // import panel from '@/components/panel'
    // import monthSelect from '@/components/monthSelect'
    import airQualityCalendar from './airQualityCalendar'
    export default{
        name: 'home',
        components: {
            airQualityCalendar
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