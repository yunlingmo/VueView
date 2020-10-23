const intervalFunction = function({currentIndex, seriesLength, myChart}) {
    return setInterval(function () {
        // console.log('xxxxxxxxxxxx',currentIndex)
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % seriesLength;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
    }, 3000);
}

export const tooltipScope = function({seriesLength, myChart}) {
    let intervalId = null;
    let currentIndex = -1;
    return function() {
        intervalId = intervalFunction({currentIndex,seriesLength, myChart})
        // 鼠标移入时暂停滚动
        myChart.on('mouseover', function (params) {
            clearInterval(intervalId);
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
            currentIndex = params.dataIndex
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
        });
        // 鼠标移出后继续滚动
        myChart.on('mouseout', function () {
            console.log('mouseout')
            intervalId = intervalFunction({currentIndex, seriesLength, myChart})
        });
        return intervalId;
    }
}