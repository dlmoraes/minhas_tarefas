import { LocalStorage } from "quasar";
import request from "./../../libs/request";
import loading from "./../../libs/loading";
import { showOkMessage } from "./../../libs/messages";

export function registroUsuario({}, payload) {}

export function setLoggedIn({ commit }, payload) {
  commit("setLoggedIn", payload);
  LocalStorage.set("loggedIn", payload);
}

export function setAvatar({ commit }, payload) {
  commit("setAvatar", payload.avatar);
}

export function setUser({ commit }, payload) {
  let user = {
    token: payload.token,
    avatar: payload.avatar
  };
  LocalStorage.set("user", user);
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
        dispatch("setAvatar", response);
        dispatch("setUser", response);

        this.$router.push("/tarefas");
      })
      .catch(error => {
        this.$router.replace("/autenticacao");
        reject(error);
      });
  });
}

export function logout({ commit }, payload) {
  commit("setLoggedIn", false);
  commit("setAvatar", null);
  LocalStorage.remove("user");
}
