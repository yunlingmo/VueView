<template>
    <svg class="icon" aria-hidden="true" :font-size="fontSize">
        <use :xlink:href="fontName"></use>
    </svg>
</template>
<script>
    import '@/assets/style/font/iconfont.js';
    export default{
        name: 'MyIcon',
        props: {
            fontName: {
                type: String,
                require: true
            },
            fontSize: {
                type: String,
                require: false
            }
        }
    }
</script>

<style lang="less" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}  
</style>