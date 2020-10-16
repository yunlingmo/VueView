let colors = ['#BEDC6E', '#FA8C8C', '#FAAAC8', '#FAC8C8','#FFFFE6', '#6E6464'];
let c_axisLine = 'rgba(76,180,231,0.33)';

/******** 图表的公共属性 ******* */
let com_charts = {
    color: colors,
    // 图表框
    grid: {
        top: '25%',
        bottom: '10%',
        containLabel: true  // 区域是否包含刻度值
    },
    // 全局字体样式
    textStyle: {
        fontFamily: 'PingFang SC, sans-serif',
        fontSize: 16
    },
    // 提示框
    tooltip: {
        textStyle: {
            fontSize: 16,
            color: colors[0]
        },
    },
    // 图例
    legend: {
        itemWidth: 20,
        itemHeight: 10,
        inactiveColor: '#666',  // 不选中的样式
        lineHeight: 30,
        textStyle: {
            color: colors[0],
            fontSize: 16,
        }
    },
};

/***********  直角坐标系坐标轴  ******* */
let com_axis = {
    // 标签名称
    axisLabel: {
        color: colors[0],
        fontSize: 18,
    },
    //坐标轴名称距离
    nameGap: 16,
    // 坐标轴名称显示位置
    nameLocation: 'end',
    // 坐标轴名称字体样式
    nameTextStyle: {
        color: colors[0],
        fontSize: 18
    },
    // 坐标轴
    axisLine: {
        show: true,
        lineStyle: {
            color: 'rgba(76,180,231,0.33)'
        }
    },
    // 刻度线
    axisTick: {
        show: false
    },
    // 分割线
    splitLine: {
        show: false,
        lineStyle: {
            color: ['rgba(255,255,255,.63)', 'rgba(255,255,255,.33)'],
            tyle: 'dashed'
        }
    },
    // 坐标轴两边留白策略
    boundaryGap: true
}

/************ 折线图公共属性 ********** */
export const opt_line = Object.assign({}, com_charts, {
    xAxis: Object.assign({}, com_axis, {
        tyle: 'category'
    }),
    yAxis: Object.assign({}, com_axis, {
        tyle: 'category'
    }),
    tooltip: {
        trigger: 'axis',
    },
})
export const seri_line = {
    type: 'line',
    smooth: true,
    lineStyle: {
        width: 1.5 ,
        shadowColor: 'rgba(255,255,255,0.4)', //线条外发光
        shadowBlur: 1.5,
    },
};
export const seri_area = Object.assign({}, seri_line, {
    areaStyle: {
        color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: colors[0] // 0% 处的颜色
            }, {
                offset: 1, color: 'transparent' // 100% 处的颜色
            }]
        }
    }
})