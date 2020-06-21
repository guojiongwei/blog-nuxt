import Vue from 'vue'
import axios from 'axios'

 
// let main = {
//     install(Vue) {
        // Vue.prototype.$apiGet = apiGet; // 变量的内容 后期可以在vue中 this->$api.xxx 使用
//     }
// };
 
// Vue.use(main); // 这里不能丢
 
// 这里是 为了在 asyncData 方法中使用
export default ({ app  }) => {
    axios.defaults.baseURL = process.server ? 'http://localhost:444/' : '/'
    function apiGet (url, params) {
        return axios.get(url, params).then(res => {
            return res
        }).catch(err => {
            let data = {data: []}
            return data
        })
    }
    // Set the function directly on the context.app object
    // Vue.prototype.$apiGet = apiGet; // 变量的内容 后期可以在vue中 this->$api.xxx 使用
    app.$apiGet = apiGet // 名称
}