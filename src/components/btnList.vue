<template>
    <div class="btn-list">
        <span :class="{'item-btn': true, 'active-btn': currentBtn===btn.key}" v-for="btn in btnList" :key="btn.key" @click="btnClick(btn.key)">
            {{btn.name}}
        </span>
    </div>
</template>
<script>
    export default{
        name: 'btnList',
        props: {
            btnList: {
                type: Array,
                require: true
            },
            defaultBtn: {
                type: String
            }
        },
        data(){
            return {
                currentBtn: this.defaultBtn
            }
        },
        methods: {
            btnClick(btn) {
                this.currentBtn = btn;
                this.$emit('btnChange', btn);
            }
        }
    }
</script>

<style lang="less" scoped>
.btn-list{
    display: flex;
    .item-btn{
        height: 32px;
        line-height: 32px;
        font-size: 18px;
        min-width: 90px;
        padding: 0 10px;
        text-align: center;
        margin-right: 10px;       
        border-radius: 2px;
        cursor: pointer;
        color: #C9DCFF;
        background: rgba(79, 158, 253, 0.2);
        &:last-child{
            margin-right: 0;
        }
        &.active-btn{
            color: #FFFFFF;
            background: rgba(79, 158, 253, 1);
        }
    }
} 
</style>