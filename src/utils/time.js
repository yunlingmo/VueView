import moment from 'moment'

/**
 * 某个第一天
 * @param {timeStamp | Date} date
 * @param  {String} timeFormat
 * @returns {Date} 返回格式化日期到月
 */
export function monthFirstDay(date, timeFormat) {
    const year = moment(date).year();
    const month = moment(date).month();
    const newDate =  moment(`${year}-${month+1}-1`).format(timeFormat);
   console.log('22222', newDate)
  return newDate
}

/**
 * 某月最後一天
 * @param {timeStamp | Date} date
 * @param  {String} timeFormat
 * @returns {Date} 返回格式化日期到月
 */
export function monthLastDay(date, timeFormat) {
    const year = moment(date).year();
    const month = moment(date).month();
    const day = moment(date).daysInMonth();
    const newDate =  moment(`${year}-${month+1}-${day}`).format(timeFormat);
   console.log('333', newDate)
  return newDate
}