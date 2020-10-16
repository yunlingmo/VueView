<template>
    <div class="calendar-panel">
        <el-calendar :first-day-of-week="7" class="calender-box" :value="monthValue">
            <template
                slot="dateCell"
                slot-scope="{date, data}">
                <div :class="dateClass(data.day)" class="date-cell number-word">
                    {{ data.day.split('-')[2] }}
                </div>
            </template>
        </el-calendar>
    </div>
</template>
  
<script>
export default {
    name: 'calendar',
    props: {
        monthValue: {
            type: Date,
            default() {
                return new Date()
            }
        }
    },
    data() {
        return {
            status: {
                slight: ['01', '04','15','22'],
                serious: ['03','05','12','18','27']
            },
            // valueMonth: new Date()
        }
    },
    methods: {
        dateClass(day) {
            const date = day.split('-')[2]
            for(let key  in this.status){
                if(this.status[key].includes(date)){
                    return `${key}-day`
                }
            }
        }
    }
}
  </script>

  <style lang="less" scoped>
  @border: 1px solid rgba(255, 255, 255, 0.1);
  .calendar-panel{
    height: 100%;
    .calender-box{
        height: 100%;
        display: flex;
        flex-direction: column;
        background: none;
        /deep/.el-calendar__header{
            display: none;
        }
        /deep/.el-calendar__body{            
            padding: 0;
            flex: 1;
            .el-calendar-table{
                height: 100%;
                thead th{
                    padding: 8px 0;         
                    font-size: 18px;
                    font-weight: bold;
                    color: #FFFFFF;
                    background: rgba(255, 255, 255, 0.08);
                    border-top: @border;
                    border-right: @border;
                    &:first-child{
                        border-left: @border;
                    }
                }
                td.is-selected{
                    background: none;
                }
                tr td:first-child{
                    border-left: @border;
                }
                tr:first-child td{
                    border-top: @border;
                }
                td{
                    border-bottom: @border;
                    border-right: @border;
                }
            }
        }
        /deep/.el-calendar-day{
            height: 100%;
            padding: 3px;
        }
        .date-cell{
            height: 100%;
            padding-top: 4px;
            font-size: 20px;
            box-sizing: border-box;
            text-align: center;        
            color: #F2F5FE;
            background: #6CE5A2;
            &.slight-day{
            background: #FBDE88;
            }
            &.serious-day{
            background: #EA6660;
            }
            &:hover{
                color: #4F9DFD;
            }
        }
        .prev .date-cell, .next .date-cell{            
            color: rgba(241, 244, 253, 0.4);
            background: none;
            &:hover{
                color: #4F9DFD;
            }
        }
    }
  }
  </style>