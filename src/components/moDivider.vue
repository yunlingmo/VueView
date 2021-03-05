<template>
    <div class="mo-divider" :style="deviderStyle"></div>
</template>

<script>
export default {
    name: "moDivider",
    props: {
        direction: {
            type: String,
            default: "horizontal",
        },
        distance: {
            type: Array,
            default: () => {
                return [10, 0, 10, 0];
            },
        },
    },
    components: {},
    data() {
        return {};
    },
    computed: {
        deviderStyle() {
            if (this.direction === "horizontal") {
                return {
                    height: "1px",
                    margin: `${this.distance[0]}px ${this.distance[1]}px ${this.distance[2]}px ${this.distance[3]}px`,
                };
            } else {
                return {
                    height: `calc(100% - ${this.distance[0]}px - ${this.distance[2]}px)`,
                    width: "1px",
                    margin: `${this.distance[0]}px ${this.distance[1]}px ${this.distance[2]}px ${this.distance[3]}px`,
                };
            }
        },
    },
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.mo-divider {
    background: rgba(0, 0, 0, 0.1);
}
</style>
