<template>
    <div class="header-box">
        <!-- <el-image
            style="width: 60px; height: 60px"
            :src=imgSrc>
        </el-image> -->
        <div class="right-box">
            <!-- 通知 -->
            <el-badge :value="12" class="message">
                <my-icon fontName="#iconlingdang" fontSize="20" color="#333"></my-icon>
            </el-badge>
            <!-- 调色盘 -->
            <my-icon fontName="#iconzhuti_tiaosepan_o" fontSize="30" color="#333"></my-icon>
            <!-- 书签 -->
            <my-icon fontName="#iconshuqian" fontSize="25" color="#333"></my-icon>
            <!-- 放大缩小 -->
            <span class="zoom" @click="fullScreen">
                <my-icon
                    fontName="#iconxianxingtubiao_huabanfuben"
                    fontSize="25"
                    color="#333"
                ></my-icon>
                <my-icon v-show="false" fontName="#iconicon--" fontSize="25" color="#333"></my-icon>
            </span>
            <!-- 用户 -->
            <span class="user">
                <el-dropdown @visible-change="dropdownEvent">
                    <span class="el-dropdown-link">
                        罗斯芬
                        <i v-show="!dropdownUp" class="el-icon-arrow-down el-icon--right"></i>
                        <i v-show="dropdownUp" class="el-icon-arrow-up el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>基本资料</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
            <!-- 列表 -->
            <my-icon fontName="#iconliebiao" fontSize="25" color="#333"></my-icon>
        </div>
    </div>
</template>

<script>
// import headImg from "@/assets/img/logo.jpg";
export default {
    name: "MoHeader",
    data() {
        return {
            // imgSrc: headImg,
            dropdownUp: false,
            isFullScreen: false,
        };
    },
    methods: {
        dropdownEvent(flag) {
            console.log("flag", flag);
            this.dropdownUp = flag;
        },
        // 全屏进入、退出
        fullScreen() {
            const element = document.documentElement;
            if (this.isFullScreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }
            this.isFullScreen = !this.isFullScreen;
        },
    },
};
</script>
<style lang="less" scoped>
.header-box {
    padding: 0 10px;
    .right-box {
        width: 300px;
        height: 100%;
        float: right;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .message {
            margin-right: 10px;
        }
        .user {
            cursor: pointer;
        }
    }
}
</style>
