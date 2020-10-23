<template>
    <div>
        <el-tree
            class="mo-tree"
            :data="treeData"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ data }">
                <span v-if="data.icon" class="icon">
                    <my-icon :fontName="data.icon" fontSize="30"></my-icon>
                </span>
                <span>{{ data.label }}</span>
            </span>
        </el-tree>
    </div>
</template>

<script>
 export default {
    name: 'moTree',
    props: {
        treeData: {
            type: Array
        }
    },
    data() {        
        return {
        }
    },
    methods:{
    }
 }
</script>

<style lang="less" scoped>
    .mo-tree{
        min-width: 200px;
        font-size: 18px;
        color: #CEDDFC;
        background: none;
        /deep/.el-tree-node__content {
            &:hover{
                color: #409EFF;
                background-color: transparent;
            }
            .el-checkbox__input{
                padding: 2px 2px 0;
                border: 1px solid #409EFF;
                .el-checkbox__inner{
                    width: 12px;
                    height: 12px;
                    border: none;
                    background-color: transparent;
                }
                &.is-checked .el-checkbox__inner{
                    background-color: #409EFF;
                }
                &.is-focusable .el-checkbox__inner{
                    background-color: #409EFF;
                }
            }
            
        }
        // /deep/.el-checkbox__input.is-checked .el-checkbox__inner{
        //     background-color: #409EFF;
        // }
        // /deep/.el-checkbox__input{
        //     padding: 1px;
        //     border: 1px solid #409EFF;
        //     .el-checkbox__inner{
        //         border: none;
        //         background-color: transparent;
        //     }
        // }
        // /deep/.el-checkbox__inner {
        //     border-color: none;
        //     background-color: transparent;
        // }
    }
</style>