//import { setHttpAgentOptions } from 'next/dist/server/config'
import http from '../constants/configAXIOS'

//สร้างฟังก์ชั่น สำหรับการ login

const login = (data) => {
    return http.post("/login", data)

}
export default {
    login

}