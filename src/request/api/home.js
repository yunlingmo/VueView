import { get, post } from '../http.js'
import { BASE_URL } from '../base.js'
const baseUrl = BASE_URL

export const getTestInfo = () => {
    const res = get(`${baseUrl}admin/home/list/2`)
    console.log('fffffff', res)
    return res
}
export const postTestInfo = () => {
    return post(`${baseUrl}test`)
}


export const getCalendarInfo = (params) => {
    return get(`${baseUrl}admin/home/calander`, params)
}

