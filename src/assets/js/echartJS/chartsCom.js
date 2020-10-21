let colors = ['#509EFD','#7268D0', '#FFDE78', '#6CE5A2', '#F09650'];

/******** 图表的公共属性 ******* */
export const com_charts = {
    color: colors,
    // 图表框
    grid: {
        left: "5%",
        top: "25%",
        right: "0%",
        bottom: "0%",
        containLabel: true  // 区域是否包含刻度值
    },
    // 全局字体样式
    textStyle: {
        fontFamily: 'CHINESE-BOLD',
        fontSize: 16
    },
    // 提示框
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            fontSize: 16
        },
    },
    // 图例
    legend: {        
        itemWidth: 10,
        itemHeight: 10,
        icon: "circle",
        right: 0,
        top: 0,
        inactiveColor: '#666',  // 不选中的样式
        lineHeight: 30,
        textStyle: {
            fontSize: 16,
            fontFamily: 'CHINESE-BOLD',
            color: 'rgba(239, 245, 255, 0.6)'
        }
    },
};

/***********  直角坐标系坐标轴  ******* */
export const com_axis = {
    //坐标轴名称距离
    nameGap: 16,
    // 坐标轴名称显示位置
    nameLocation: 'end',
    // 坐标轴名称字体样式
    nameTextStyle: {
        align: "right",
        fontSize: 16,
        color: 'rgba(165, 182, 212, 0.6)',

    },
    // 坐标轴
    axisLine: {
        show: false
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
    // 标签名称
    axisLabel: {
      textStyle: {
        color: "rgba(239, 245, 255, 0.6)", //坐标的字体颜色
        fontSize: 18,
        fontFamily: 'NUM-WORD'
      },
    },
    // 坐标轴两边留白策略
    boundaryGap: true
}

export const bar_itemStyle = {
    normal: {
        label: {
        show: true,
        position: "top",
            textStyle: {
                fontSize: "18",
                fontFamily: "NUM-WORD",
            }
        }
    }
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