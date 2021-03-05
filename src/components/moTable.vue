<template>
    <el-table
        :class="{ 'dark-tbale': darkTbale, 'mo-table': true }"
        :data="tableData"
        :span-method="objectSpanMethod"
        :row-class-name="tableRowClassName"
    >
        <el-table-column
            v-for="(header, index) in headerData"
            :key="header.prop"
            :label="header.label"
            :width="header.width"
            :prop="header.prop"
        >
            <template slot-scope="record" :index="index">
                <slot
                    :name="header.slotName"
                    :data="{ label: header.prop, row: record.row, index: record.$index }"
                ></slot>
                <template v-if="!header.slotName">
                    {{ record.row[header.prop] }}
                </template>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "moTable",
    props: {
        headerData: {
            type: Array,
            require: true,
        },
        tableData: {
            type: Array,
            require: true,
        },
        // 合并列
        mergeRowName: {
            type: Array,
        },
        darkTbale: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            newTableData: [],
        };
    },
    created() {
        if (this.mergeRowName) {
            this.newTableData = this.mergeTableRow(this.tableData, this.mergeRowName);
        } else {
            this.newTableData = [].concat(this.tableData);
        }
    },
    mounted() {},
    methods: {
        tableRowClassName({ rowIndex }) {
            if (rowIndex % 2 === 0) {
                return "even-row";
            } else {
                return "old-row";
            }
        },
        mergeTableRow(data, merge) {
            if (!merge || merge.length === 0) {
                return data;
            }
            merge.forEach((m) => {
                const mList = {};
                data = data.map((v, index) => {
                    const rowVal = v[m];
                    if (mList[rowVal] && mList[rowVal].newIndex === index) {
                        mList[rowVal]["num"]++;
                        mList[rowVal]["newIndex"]++;
                        data[mList[rowVal]["index"]][m + "-span"].rowspan++;
                        v[m + "-span"] = {
                            rowspan: 0,
                            colspan: 0,
                        };
                    } else {
                        mList[rowVal] = { num: 1, index: index, newIndex: index + 1 };
                        v[m + "-span"] = {
                            rowspan: 1,
                            colspan: 1,
                        };
                    }
                    return v;
                });
            });
            return data;
        },
        objectSpanMethod({ row, column }) {
            const span = column["property"] + "-span";
            if (row[span]) {
                return row[span];
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dark-tbale {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: none;
    color: rgba(203, 221, 255, 0.8);
    &::before {
        display: none;
    }
    /deep/.el-table__header {
        th {
            padding: 2px 0;
            color: rgba(203, 221, 255, 0.8);
            background: rgba(255, 255, 255, 0.1);
        }
    }
    /deep/.el-table__body-wrapper {
        flex: 1;
        overflow-y: auto;
    }
    /deep/.even-row {
        background: rgba(255, 255, 255, 0.06);
    }
    /deep/.old-row {
        background: rgba(255, 255, 255, 0.1);
    }
    /deep/tr {
        background-color: transparent;
    }
    /deep/td {
        padding: 2px 0;
        border-bottom: 2px solid transparent;
    }
    /deep/th.is-leaf {
        border-bottom: 2px solid transparent;
    }
    /deep/.el-table__body tr:hover > td {
        color: #4f9efd;
        background: rgba(255, 255, 255, 0.3);
    }
}
</style>
