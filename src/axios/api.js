import axios from "axios";

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

instance.interceptors.request.use(
  function (config) {
    console.log("인터셉터 요청 성공");
    return config;
  },

  function (error) {
    console.log("인터셉터 요청 나만 못 받음");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("인터셉터 응답 받음");
    return response;
  },
  function (error) {
    console.log("인터셉터 응답 나만 못 받음");
    return Promise.reject(error);
  }
);

export default instance;
