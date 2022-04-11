import Axios from "./Axios";
import jwt_decode from "jwt-decode";
import { error } from "../functions/toast";

let token = "";
let task;

export async function post(adres, params = null) {
  Axios.defaults.headers.common["x-access-token"] =
    "Bearer " + localStorage.getItem("token");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      task = Axios.post(adres, params);
      resolve(
        task
          .then(({ data }) => {
            try {
              data = JSON.parse(data);
            } catch { }
            return data;
          })
          .catch((err) => {
            //IStore.setConnection(1);
            return { result: false, error: 1 };
          })
      );
    }, 1000);
  });
}

export async function get(adres, log = false) {
  Axios.defaults.headers.common['x-access-token'] = "Bearer " + localStorage.getItem("token");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      task = Axios.get(adres);
      resolve(
        task.then(({ data }) => {
          if (log == true)
            try { data = JSON.parse(data) } catch { }
          return data;
        }).catch((err) => {
          error()
          return { result: false, error: 1 };
        })
      )
    }, 1000)
  })
}


export async function put(adres, params = null) {
  Axios.defaults.headers.common['x-access-token'] = "Bearer " + localStorage.getItem("token");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      task = Axios.put(adres, params);
      resolve(
        task.then(({ data }) => {
          try { data = JSON.parse(data) } catch { }
          return data;
        }).catch((err) => {
          error()
          return { result: false, error: 1 };
        })
      )
    }, 1000);
  });
}

export async function remove(adres, params = null) {
  Axios.defaults.headers.common['x-access-token'] = "Bearer " + localStorage.getItem("token");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      task = Axios.delete(adres, params);
      resolve(
        task.then(({ data }) => {
          try { data = JSON.parse(data) } catch { }
          return data;
        }).catch((err) => {
          return { result: false, error: 1 };
        })
      )
    }, 1000);
  });
}

export function getTask() {
  return task;
}

export async function cancelPost(task) {
  task.cancel((res) => {
    console.warn("İstek İptal Edildi");
  });
}

export function getURL() {
  return "http://localhost:3000/";
}

export function getImageURL() {
  return getURL();
}

export function getUser(token) {
  try {
    if (token) {
      return jwt_decode(token);
    } else {
      return jwt_decode(localStorage.getItem("token"));
    }
  } catch (e) { }
  return {};
}
