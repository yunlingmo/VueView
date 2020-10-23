<template>
    <div :class="['dialog-panel',dialogClass]" :style="{width: dialogWidth+'px', height: dialogHeight+'px'}">
        <!-- 边框 -->
        <div class="box-border border-top"></div>
        <div class="box-border border-right"></div>
        <div class="box-border border-bottom"></div>
        <div class="box-border border-left"></div>

        <!-- 关闭按钮 -->
        <div class="close-btn" @click="dialogClose">
            <i class="el-icon-close"></i>
        </div>

        <div class="dialog-top">
            <h4>{{dialogTitle}}</h4>
            <slot name="header"></slot>
        </div>
        <div class="dialog-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'moDialog',
        props: {
            dialogShow: {
                type: Boolean,
                default: false
            },
            dialogClass: {
                type: String,
                default: ''
            },
            dialogTitle: {
                type: String,
                default: ''
            },
            dialogWidth: {
                type: Number,
                default: 500
            },
            dialogHeight: {
                type: Number,
                default: 400
            },
        },
        data() {
            return {}
        },
        methods: {
            dialogClose() {
                this.$emit('dialogClose')
            }
        }
    }
</script>

<style lang="less" scoped>

.dialog-panel{
    min-height: 300px;
    padding: 25px;
    font-size: 16px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    // 切角
    background: linear-gradient(-45deg,transparent 15px, rgba(2, 15, 43, 0.7) 0) bottom right,
    linear-gradient(45deg, rgba(2, 15, 43, 0.7) 15px, rgba(2, 15, 43, 0.7) 0) bottom left,
    linear-gradient(135deg,transparent 15px, rgba(2, 15, 43, 0.7) 0) top left,
    linear-gradient(-135deg, rgba(2, 15, 43, 0.7) 15px,rgba(2, 15, 43, 0.7) 0) top right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    &:before {
        content: '';
        display: block;
        width: 28px;
        height: 28px;
        border-right: 2px solid rgba(79, 158, 253, 0.7);
        position: absolute;
        left: -14px;
        top: -14px;
        transform: rotate(45deg);
    }
    &:after {
        content: '';
        display: block;
        width: 28px;
        height: 28px;
        border-left: 2px solid rgba(79, 158, 253, 0.7);
        position: absolute;
        right: -14px;
        bottom: -14px;
        transform: rotate(45deg);
    }
    .box-border{
        position: absolute;
        border: 1px solid rgba(79, 158, 253, 0.7);
        &.border-top{
            height: 1px;
            width: calc(100% - 20px);
            top: 0;
            right: 0;
        }
        &.border-right{
            height: calc(100% - 20px);
            width: 1px;
            top: 0;
            right: 0;
        }
        &.border-bottom{
            height: 1px;
            width: calc(100% - 20px);
            bottom: 0;
            left: 0;
        }
        &.border-left{
            height: calc(100% - 20px);
            width: 1px;
            bottom: 0;
            left: 0;
        }
    }
    .close-btn{
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: absolute;
        top: 1px;
        right: 1px;
        cursor: pointer;
        color: #4F9EFD;
        background: rgba(79, 158, 253, 0.16);
    }
    .dialog-top{
        h4{
            font-size: 24px;
            color: #EFF5FF;
            margin-bottom: 13px;
        }
    }
    .dialog-body{
        flex: 1;
    }
}

</style>