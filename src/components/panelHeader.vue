<template>
    <div class="header-box">
        <span class="title">大数据可视化</span>
        <span class="time">{{time}}</span>
    </div>
</template>

<script>
import moment from 'moment'
export default{
    name: 'panelHeader',
    data(){
        return {
            time: null
        }
    },
    mounted() {
        // requestAnimationFrame(this.creTime);
        this.creTime();
    },
    methods: {
        creTime() {
            this.time = moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss dddd')
            requestAnimationFrame(this.creTime);

        }
    }
}
</script>

<style lang="less" scoped>
    .header-box{
        height: 80px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        background: #05021f;
        .title{
            font-size: 30px;
        }
        .time{
            font-size: 24px;
        }
    }
</style>