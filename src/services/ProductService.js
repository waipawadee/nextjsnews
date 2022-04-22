/* eslint-disable import/no-anonymous-default-export */
import http from '../constants/configAxios'

// สร้างฟังก์ชันสำหรับการอ่านข่าวทั้งหมด
const getAllProduct = () => {
    return http.get('/products')
}


export default {
    getAllProduct
   
}