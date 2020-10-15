<template>
    <panel class="airquality-panel" panelTitle="日历模块">
        <template v-slot:header>
            <month-select @monthChange="monthChange"></month-select>
        </template>        
        <calendar :monthValue="monthValue"></calendar>
    </panel>
</template>

<script>
    import panel from '@/components/panel'
    import monthSelect from '@/components/monthSelect'
    import calendar from './calendar'
    export default{
        name: 'airQualityCalendar',
        components: {
            panel,
            monthSelect,
            calendar   
        },
        data() {
            return {
                monthValue: new Date()
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
        .panel(@height:300px);
    }
</style>