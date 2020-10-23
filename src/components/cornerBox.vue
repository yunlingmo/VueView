<template>
    <div :class="['corner-box',boxClass]">        
        <!-- 角标 -->
        <div class="corner corner-top-left"></div>
        <div class="corner corner-top-right"></div>
        <div class="corner corner-bottom-right"></div>
        <div class="corner corner-bottom-left"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'cornerBox',
        props: {
            boxClass: {
                type: String,
                default: ''
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @borderStyle: 2px solid rgba(79, 158, 253, 0.6);
    .corner-box{
        padding: 15px;
        position: relative;
        border: 1px solid rgba(79, 158, 253, 0.6);
        .corner{
            width: 10px;
            height: 10px;
            position: absolute;
            &.corner-top-left{
                left: -1px;
                top:  -1px;
                border-top: @borderStyle;
                border-left: @borderStyle;
            }
            &.corner-top-right{
                right:  -1px;
                top:  -1px;
                border-top: @borderStyle;
                border-right: @borderStyle;
            }
            &.corner-bottom-right{
                right:  -1px;
                bottom:  -1px;
                border-bottom: @borderStyle;
                border-right: @borderStyle;
            }
            &.corner-bottom-left{
                left:  -1px;
                bottom:  -1px;
                border-bottom: @borderStyle;
                border-left: @borderStyle;
            }
        }
    }
</style>