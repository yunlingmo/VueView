<template>
    <div class="info-list">
        <el-row>
            <el-col v-for="(info, index) in infoList" :key="index" :span="info.spanWidth">
                <div class="info-row">
                    <span :style="{width: infoTitleWidth}" class="info-title">{{info.title}}</span>
                    <span :class="{'info-value': true, 'number-word': info.valueType === 'number'}">
                        {{info.value}}
                    </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    name: 'infoList',
    props:{
        infoList: {
            type: Array,
            require: true
        },
        infoTitleWidth: {
            type: String,
            require: false,
            default: '50px'
        }
    }
}
</script>

<style lang="less" scoped>
    .info-list{
        font-size: 16px;
        .info-row{
            display: flex;
            padding: 8px 0;
            .info-title{
                margin-right: 10px;
                color:rgba(201, 220, 255, 1);
            }
            .info-value{
                flex: 1;
                color: rgba(79, 158, 253, 1);
                &.number-word{
                    font-size: 20px;
                }
            }
        }
    }
</style>