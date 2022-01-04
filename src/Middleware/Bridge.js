import { ACCESS_POINT } from '../config';
import http from "./http";
const Authorization = localStorage.getItem("loginToken");

const userCheck = async () => {
  localStorage.removeItem('loginToken');
  localStorage.removeItem('userDetail');
  window.location.href = '/';
};

const userLogin = async (formdata, callback) => {
  await http.post(ACCESS_POINT + `/user/login`, formdata, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (response) => {
    callback(response);
  })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        callback({ status: error.response.status, message: error.response.data?.error ? error.response.data?.error : "General server error" ? error.response.data?.error ? error.response.data?.error : "General server error" : "General server error" })
      }
    })
};

const addUser = async (formdata, callback) => {
  await http.post(ACCESS_POINT + `/user/register`, formdata, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (response) => {
    callback(response);
  })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        callback({ status: error.response.status, message: error.response.data?.error ? error.response.data?.error : "General server error" ? error.response.data?.error ? error.response.data?.error : "General server error" : "General server error" })
      }
    })
};

const userLogout = async (formdata={}, callback) => {
  await http.post(ACCESS_POINT + `/user/logout`,formdata,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Authorization
    },
  }).then(async (response) => {
    callback(response);
  })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        callback({ status: error.response.status, message: error.response.data?.error ? error.response.data?.error : "General server error" ? error.response.data?.error ? error.response.data?.error : "General server error" : "General server error" })
      }
    })
};


export default {
  userLogin,
  addUser,
  userLogout
}