import Axios from 'axios'


export default Axios.create({

    //baseURL: "http://localhost/newsapi/public/api",
    baseURL: "https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news",
    headers:{
         "Content-Type": "application/json"
    }

})