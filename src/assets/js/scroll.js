let timeObject = null;
const intervalFunction = function({parentBox, step, timer}) {
    return setInterval(function () { 
        let topNumber = parentBox.scrollTop
        if (parentBox.scrollHeight - parentBox.clientHeight - parentBox.scrollTop < 10) {
            topNumber = 0
        } else {
            topNumber +=  step
        }
        parentBox.scrollTop = topNumber
      }, timer);
}

export const scrollFunction = function({parentId, step, timer}) {
    const parentBox = document.getElementById(parentId);
    // 没有滚动条不需要轮播
    if (parentBox.scrollHeight <= parentBox.clientHeight) {
        return;
    }
    // 创建空白节点
    let  emptyDom = document.createElement('div');
    emptyDom.style.height = parentBox.clientHeight + 'px'
    parentBox.appendChild(emptyDom);

    // 定时器开启
    timeObject = intervalFunction({ parentBox, step, timer })

    // 鼠标移入div时暂停滚动
    parentBox.onmouseover = function () {
        clearInterval(timeObject);
    };
    // 鼠标移出div后继续滚动
    parentBox.onmouseout = function () {
        timeObject = intervalFunction({ parentBox, step, timer })
    };
    return timeObject;
    
}