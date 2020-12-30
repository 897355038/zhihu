/* AXIOS的二次配置 */
import axios from 'axios';  // 导入安装好的axios
import qs from 'qs';

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;  // 允许跨域过程中携带资源凭证
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = data => qs.stringify(data);
axios.interceptors.request.use(config => {
	return config;
});
axios.interceptors.response.use(response => {
	return response.data;
}, reason => {
	let response = reason.response;
	if (response) {
		// 不同状态码下的统一操作
		switch (parseInt(response.status)) {
			case 400:
				break;
			case 401:
				break;
			case 403:
				break;
			case 404:
				break;
		}
	} else {
		if (!window.navigator.onLine) {
			// 断网处理
		}
	}
	return Promise.reject(reason);
});

export default axios;  // 将配置好的axios导出去