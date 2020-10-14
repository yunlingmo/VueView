<template>
    <div class="mian-box home-box">
        <div class="left-panel">
            <div class="panel">
                <div class="panel-title">标题</div>
            </div>
        </div>
        <div class="right-panel">右边</div>
    </div>
</template>

<style lang="less" scoped>
    @import '@/assets/style/layout.less';
    .left-panel{
        .panelBox(@width:560px);
        .panel(@height:250px);
    }
    .right-panel{
        .panelBox(@position: right; @width:560px);
    }
</style>