export const pieChart = function({title,color,data,radiu,centerData}) {
    const colors = color || ["#F76F01", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"];
    const radius = radiu || ['50%', '70%'];
    const option = {
        color: colors,
        title: {
            text: centerData,
            x: "center",
            y: "center",
            textStyle: {
                color: '#fff',
                fontSize: 36,
                fontFamily: 'NUM-WORD'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // 暂时隐藏
        legend: {
            show: false,
            orient: 'vertical',
            left: 10,
            formatter: function (name) {
                return name;
            }
        },
        series: [
            {
                name: title,
                type: 'pie',
                radius: radius,
                avoidLabelOverlap: false,
                labelLine: {
                    normal: {
                        length: 25
                    }
                },
                label: {
                    normal: {
                        formatter: "{per|{d}%} ",
                        rich: {
                            per: {
                                fontSize: 24,
                                fontFamily: 'NUM-WORD',
                                padding: [5, 8],
                                borderRadius: 2
                            }
                        }
                    }
                },
                // 暂时隐藏
                emphasis: {
                    label: {
                        show: false,
                        formatter: "{b|{b}:}  {per|{d}%}  ",
                        rich: {
                            hr: {
                                borderColor: "#aaa",
                                width: "100%",
                                borderWidth: 1,
                                height: 0
                            },
                            b: {
                                fontSize: 18,
                                lineHeight: 33,
                                fontFamily: 'CHINESE-BOLD'
                            },
                            per: {
                                fontSize: 25,
                                fontFamily: 'NUM-WORD'
                            }
                        }
                    }
                },
                data: data
            }
        ]
    };
    return option;
}