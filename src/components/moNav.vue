<template>
    <div class="nav" :class="{'min-nav': isCollapse}">     
        <el-menu
            default-active="home"
            class="el-menu-vertical-demo"
            background-color="#344058"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse-transition="false"
            :collapse="isCollapse">
            <child-component :menus="menuDate" :isCollapse="isCollapse" @menuItemClick="menuItemClick"></child-component>
        </el-menu>
        <div class="btn-list">
            <span :label="true" v-show="isCollapse" @click="isCollapse = !isCollapse"><i class="el-icon-s-unfold"></i></span>
            <span :label="false" v-show="!isCollapse" @click="isCollapse = !isCollapse"><i class="el-icon-s-fold"></i></span>
        </div>
    </div>
</template>

<script>
    var temp = {
        name: 'child-component',
        props: {
            menus: {
                type: Array,
                default: () => { return [] }
            },
            isCollapse: {
                type: Boolean,
                default: false
            }
        },
        template: `<div syle="display:content"><template v-for="menu in menus">
                        <template v-if="menu.children">
                            <el-submenu :index="menu.value">
                                <template slot="title">
                                    <i v-if="menu.icon" :class="menu.icon"></i>
                                    <span :class="" :class="{'close-item': isCollapse}">{{menu.name}}</span>
                                </template>
                                <child-component :menus="menu.children" @menuItemClick="menuItemClick"></child-component>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="menu.value" @click="menuItemClick(menu)">
                                <i v-if="menu.icon" :class="menu.icon"></i>
                                <span slot="title" :class="{'close-item': isCollapse}" >{{menu.name}}</span>
                            </el-menu-item>
                        </template>
                    </template></div>`,
        methods: { 
            menuItemClick(menu){
                this.$emit('menuItemClick', menu)
            }
        }
    };

    export default{
        name: 'Nav',
        components: {
            'child-component': temp
        },
        data() {
            return {
                isCollapse: false,
                menuDate: [
                    {
                        name: '功能页',
                        value: 'home',
                        icon: 'el-icon-s-home'
                    },
                    {
                        name: '组件',
                        value: 'component',
                        icon: 'el-icon-s-grid',
                        children: [
                            {
                                name: '表格' ,
                                value: 'table'
                            },
                            {
                               name: '分页', 
                                value: 'pagination'
                            },
                            {
                               name: '表单',
                                value: 'form',
                            },
                        ]
                    },
                    {
                        name: '页面',
                        value: 'page',
                        icon: 'el-icon-document',
                        children: [
                            {
                               name: '日程安排' , 
                                value: 'schedule'
                            },
                            {
                               name: '地图', 
                                value: 'map' 
                            },
                            {
                               name: '组织架构图' , 
                                value: 'organizationChart'
                            }
                        ]
                    },
                    {
                        name: '设置',
                        value: 'setting',
                        icon: 'el-icon-setting',
                        children: [
                            {
                               name: '用户管理' , 
                                value: 'user'
                            },
                            {
                               name: '权限管理', 
                                value: 'power' 
                            },
                            {
                               name: '菜单管理' , 
                                value: 'menu'
                            }
                        ]
                    }
                ]
            }
        },
        computed: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            menuItemClick(menu){
                this.$router.push({name: menu.name})
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav{
        width: 300px;
        background-color: #344058;
        position: relative;
        transition: width 1s;
        /deep/.close-item{
            display: none;
        }
        /deep/.el-menu{
            border: none;
        }
        &.min-nav{
            width: 60px !important;
            overflow: hidden;
        }
        .btn-list{
            font-size: 28px;
            color: #fff;
            position: absolute;
            right: 5px;
            bottom: 20px;
        }        
    }
</style>