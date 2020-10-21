<template>
    <div class="mian-box water-box">
        <div class="left-panel">
            <monitor-data></monitor-data>
        </div>
        <div class="right-panel">
            <curent-info></curent-info>
            <monitor-data-two></monitor-data-two>
            <monitor-change></monitor-change>
        </div>
    </div>
</template>

<script>
    import monitorData from './monitorData'
    import curentInfo from './curentInfo'
    import monitorDataTwo from './monitorDataTwo'
    import monitorChange from './monitorChange'
    
    export default{
        name: 'waterPollution',
        components: {
            monitorData,
            curentInfo,
            monitorDataTwo,
            monitorChange
        },
        data() {
            return {
                name: '水污染'
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .water-box{
        font-size: 20px;
        color: #fff;
        text-align: center;
        .left-panel{
            .panelBox(@width:554px);
        }
        .right-panel{
            .panelBox(@position: right; @width:560px);
        }
    }  
</style>