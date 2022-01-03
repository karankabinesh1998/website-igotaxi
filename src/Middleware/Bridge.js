import { ACCESS_POINT } from '../config';
import http from "./http";

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

const AddMaster = async (t, data) => {
  //console.log(data)
  const result = await http.post(ACCESS_POINT + `/cmsContent/master/${t}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};


export default {
  userLogin,
  
}