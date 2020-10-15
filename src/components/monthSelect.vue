<template>
    <div class="month-box">
        <span class="month-btn" @click="subtractMonth">
            <i class="el-icon-arrow-left"></i>
        </span>
        <el-date-picker
            class="month-picker"
            v-model="monthValue"
            type="month"
            :editable="false"
            :clearable="false"
            @change="valueChange">
        </el-date-picker>
         <span class="month-btn" @click="addMonth">
            <i class="el-icon-arrow-right"></i>
        </span>
    </div>
</template>
  
  <script>
    import moment from 'moment'
    export default {
        name: 'calendar',
        components: {},
        data() {
            return {
                monthValue: new Date()
            }
        },
        methods: {
            valueChange() {
                this.$emit('monthChange', this.monthValue)
            },
            // 下个月
            addMonth() {
                this.monthValue = moment(this.monthValue).add(1, 'M').toDate()
                this.valueChange();
            },
            // 上个月
            subtractMonth() {
                this.monthValue = moment(this.monthValue).subtract(1, 'M').toDate()
                this.valueChange();
            },
        }
    }
  </script>

  <style lang="less" scoped>
    .month-box{
        display: flex;
        align-items: center;
        .month-btn{
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            color: #509EFD;
            text-align: center;
            background: rgba(80, 158, 253, 0.1);
            cursor: pointer;
        }
    }
    .month-picker{
        width: 100px;
        /deep/.el-input__inner{
            border: none;
            padding: 0;
            font-size: 22px;
            font-family: NUM-WORD;
            text-align: center;
            color: #fff;
            background: none;
        }
        /deep/.el-input__prefix{
            display: none;
        }
    }
  </style>