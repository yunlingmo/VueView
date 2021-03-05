<template>
    <div>
        <div class="operation-box">
            <btn-list :btnList="btnList" @btnChange="btnChange"></btn-list>
            <table-setting></table-setting>
        </div>
        <mo-divider></mo-divider>
        <mo-table :headerData="headerData" :tableData="tableData" :darkTbale="false"></mo-table>
    </div>
</template>

<script>
import moTable from "@/components/moTable";
import tableSetting from "@/components/tableSetting";
import moDivider from "@/components/moDivider";
import btnList from "@/components/btnList";
export default {
    name: "pageOne",
    components: {
        moTable,
        tableSetting,
        moDivider,
        btnList,
    },
    data() {
        return {
            btnList: [
                {
                    name: "全部通过",
                    key: "passAll",
                },
                {
                    name: "全部删除",
                    key: "deleteAll",
                },
            ],
            headerData: [
                {
                    label: "用户名",
                    prop: "name",
                },
                {
                    label: "性别",
                    prop: "gender",
                },
                {
                    label: "年齡",
                    prop: "age",
                },
                {
                    label: "愛好",
                    prop: "hobby",
                },
                {
                    label: "邮箱",
                    prop: "email",
                },
                {
                    label: "城市",
                    prop: "city",
                },
                {
                    label: "签名",
                    prop: "aignature",
                    width: 300,
                },
                {
                    label: "积分",
                    prop: "integral",
                },
                {
                    label: "登录次数",
                    prop: "registerNumber",
                },
            ],
            tableData: [
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
                {
                    name: "李白白",
                    age: 18,
                    hobby: "登山",
                    email: "libaibai@layui.com",
                    gender: "男",
                    city: "广东深圳",
                    aignature: "人生恰似一场修行",
                    integral: 66,
                    registerNumber: 12,
                },
            ],
        };
    },
    methods: {
        btnChange(btn) {
            console.log("xxxxxx", btn);
        },
    },
};
</script>

<style lang="less" scoped>
.operation-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
</style>
