<template>
    <div :class="['panel',panelClass]">
        <div class="panel-top">
            <h4>{{panelTitle}}</h4>
            <slot name="header"></slot>
        </div>
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'panel',
        props: {
            panelClass: {
                type: String,
                default: ''
            },
            panelTitle: {
                type: String,
                default: ''
            },
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .panel{
        .panel(@height:250px);
    }
</style>