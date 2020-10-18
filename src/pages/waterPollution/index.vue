<template>
    <div class="mian-panel">{{name}}</div>
</template>

<script>
    export default{
        name: 'waterPollution',
        data() {
            return {
                name: '水污染'
            }
        }
    }
</script>

<style lang="less" scoped>
    .mian-panel{
        font-size: 40px;
        color: #fff;
        text-align: center;
    }  
</style>