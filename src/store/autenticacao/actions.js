import { LocalStorage } from "quasar";
import request from "./../../libs/request";
import loading from "./../../libs/loading";
import { showOkMessage } from "./../../libs/messages";

export function registroUsuario({}, payload) {}

export function setLoggedIn({ commit }, payload) {
  commit("setLoggedIn", payload);
  LocalStorage.set("loggedIn", payload);
}

export function setAvatar({}, payload) {
  //commit("setAvatar", payload);
  let user = LocalStorage.getItem("user");
  user.avatar = payload.avatar;
  LocalStorage.set("user", user);
}

export function setUser({}, payload) {
  let user = {
    username: payload.username,
    token: payload.token,
    avatar: payload.avatar
  };
  LocalStorage.set("user", user);
}

export function getAvatar({}) {
  return new Promise((resolve, reject) => {
    request({
      url: "/users/avatar/",
      method: "post",
      data: payload
    })
      .then(response => {
        resolve(response);
        dispatch("setAvatar", response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function loginUsuario({ dispatch }, payload) {
  return new Promise((resolve, reject) => {
    request({
      url: "/sessions/",
      method: "post",
      data: payload
    })
      .then(response => {
        resolve(response);
        dispatch("setLoggedIn", true);
        dispatch("setUser", response);

        this.$router.push("/");
      })
      .catch(error => {
        this.$router.replace("/autenticacao");
        reject(error);
      });
  });
}

export function logout({ commit }, payload) {
  commit("setLoggedIn", false);
  LocalStorage.remove("user");
  this.$router.replace("/autenticacao");
}
