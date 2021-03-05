<template>
    <div class="table-setting">
        <my-icon
            v-for="icon in iconList"
            :key="icon.key"
            :fontName="icon.iconName"
            fontSize="30"
            color="#333"
        >
        </my-icon>
    </div>
</template>

<script>
export default {
    name: "tableSetting",
    components: {},
    data() {
        return {
            iconList: [
                {
                    iconName: "#iconzhuti_tiaosepan_o",
                    key: "setting",
                },
                {
                    iconName: "#iconzhuti_tiaosepan_o",
                    key: "export",
                },
                {
                    iconName: "#iconzhuti_tiaosepan_o",
                    key: "print",
                },
            ],
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.table-setting {
    display: inline-block;
    .icon {
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
