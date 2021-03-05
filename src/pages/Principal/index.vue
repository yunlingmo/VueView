<template>
    <div class="principal-box">
        <mo-nav class="mo-nav"></mo-nav>
        <div class="mian-box">
            <mo-header class="mo-header"></mo-header>
            <div class="content-box">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import moHeader from "@/components/moHeader";
import moNav from "@/components/moNav";
export default {
    name: "Principal",
    components: {
        moHeader,
        moNav,
    },
};
</script>

<style lang="less" scoped>
.principal-box {
    height: 100%;
    display: flex;
    .mo-nav {
        height: 100%;
    }
    .mian-box {
        height: 100%;
        width: 300px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .mo-header {
            height: 60px;
            background: #fff;
        }
        .content-box {
            height: 300px;
            flex-grow: 1;
            margin: 20px;
            box-sizing: border-box;
            background-color: #fff;
            border: 1px solid red;
        }
    }
}
</style>
