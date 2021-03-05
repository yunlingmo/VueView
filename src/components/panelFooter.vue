<template>
    <div class="footer-box">
        <div
            :class="{'nav-item': true, 'active-nav': currentRoute === item.path}"
            v-for="item in navData" :key="item.path"
            @click="linkTo(item.name)">
            <img src="../static/images/nav_bg.png" alt="">
            <span>
                <my-icon :fontName="item.icon" fontSize="20"></my-icon>
                {{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default{
    name: 'panelHeader',
    data(){
        return {
            currentRoute: 'home',
            navData: [
                {
                    name: '首页',
                    path: 'home',
                    icon: '#iconshouye'
                },
                {
                    name: '空气质量',
                    path: 'airQuality',
                    icon: '#iconcloud'
                },
                {
                    name: '水污染',
                    path: 'waterPollution',
                    icon: '#icondi'
                },
                {
                    name: '功能页',
                    path: 'principal',
                    icon: '#icondi'
                }
            ]
        }
    },
    watch:{
        '$route':{
            handler(to){
                this.currentRoute = to.name
            },
            deep:true,
            immediate:true
        }
    },
    mounted() {

    },
    methods: {
        linkTo(name) {
            this.$router.push({ name: name})
        }
    }
}
</script>

<style lang="less" scoped>
    .activeNav{                        
        color: #FFF;
        opacity: 1;
        font-size: 20px;
    }
    .footer-box{
        height: 50px;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        .nav-item{
            width: 160px;
            margin-right: 3px;
            position: relative;
            color: #ccc;
            opacity: 0.6;
            cursor: pointer;
            img{
                height: 48px;
                width: 98%;
            }
            span{
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                text-align: center;
                transform: translate(-50%, -85%);
            }
             &:hover, &.active-nav{                
                .activeNav();
            }
             &:hover{
                img{
                    height: 52px;
                    width: 100%;
                }
            }
            &:last-child{
                margin-right: 0;
            }
        }
    }
</style>