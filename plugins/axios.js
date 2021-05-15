import axios from "axios";

// 这里是 为了在 asyncData 方法中使用
export default ({ app }) => {
  axios.defaults.baseURL = process.server ? "http://localhost:444/" : "/";
  function apiGet(url, params) {
    return axios.get(url, params);
  }
  app.$apiGet = apiGet; // 名称
};
