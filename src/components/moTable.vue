<template>
    <el-table
        class="mo-table"
        :data="tableData"
        :row-class-name="tableRowClassName">
        <el-table-column
            v-for="(header, index) in headerData" :key="header.prop"
            :label="header.label"
            :width="header.width"
            :prop="header.prop">
            <template slot-scope="record" :index="index">
                <slot :name="header.slotName" :data="{label:header.prop, row:record.row, index: record.$index}"></slot>
                <template v-if="!header.slotName">
                    {{record.row[header.prop]}}
                </template>
            </template>           
        </el-table-column>
    </el-table>
</template>

<script>
export default{
    name: 'moTable',
    props: {
        headerData: {
            type: Array,
            require: true
        },
        tableData: {
            type: Array,
            require: true
        }
    },
    data(){
        return {}
    },
    mounted() {},
    methods: {
      tableRowClassName({rowIndex}) {
        if (rowIndex%2 === 0) {
          return 'even-row';
        } else {
          return 'old-row';
        }
      }
    }
}
</script>

<style lang="less" scoped> 
  .el-table{
        height: 100%;
        display: flex;
        flex-direction: column;
        background: none;
        color: rgba(203, 221, 255, 0.8);
        &::before{
            display: none;
        }
        /deep/.el-table__header{
            th {
                padding: 2px 0;
                color: rgba(203, 221, 255, 0.8);
                background: rgba(255, 255, 255, 0.1);
            }
        }
        /deep/.el-table__body-wrapper{
            flex: 1;
            overflow-y: auto;
        }
        /deep/.even-row{
            background: rgba(255, 255, 255, 0.06);
        }
        /deep/.old-row{
            background: rgba(255, 255, 255, 0.1);

        }
        /deep/tr {
            background-color: transparent;
        }
        /deep/td {
            padding: 2px 0;
            border-bottom: 2px solid transparent;
        }
        /deep/th.is-leaf{
            border-bottom: 2px solid transparent;
        }
        /deep/.el-table__body tr:hover>td {           
            color: #4F9EFD;
            background: rgba(255, 255, 255, 0.3);
        }
  }
</style>