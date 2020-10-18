<template>
    <el-select class="option-select" v-model="value" placeholder="请选择" @change="valueChange">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
</template>
  
  <script>
    export default {
        name: 'optionSelect',
        props: {
            options: {
                type: Array,
                require: true
            },
            defaultValue: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                value:  this.defaultValue
            }
        },
        methods: {
            valueChange() {
                this.$emit('monthChange', this.value)
            }
        }
    }
  </script>

  <style lang="less" scoped>
    .option-select{
        width: 100px;        
        border: 1px solid #629EF6;
        /deep/.el-input__inner{
            height: 28px;
            line-height: 28px;             
            font-size: 20px;
            font-family: 'NUM-WORD';
            color: #CBDEFF;
            border: none;
            background: none;
        }       
        /deep/.el-input__icon{
            line-height: 28px;
        }
    }
  </style>