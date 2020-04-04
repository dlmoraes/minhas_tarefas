import request from "./../../libs/request";
import { showOkMessage } from "./../../libs/messages";

export async function getProjetos({ commit }) {
  return await new Promise((resolve, reject) => {
    request({
      url: "/projetos/",
      method: "get"
    })
      .then(response => {
        commit("setProjetos", response);
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function adicionarProjeto({ dispatch }, payload) {
  dispatch("dbAdicionarProjeto", payload);
}

async function dbAdicionarProjeto({ dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/projetos/`,
      method: "post",
      data: payload
    })
      .then(response => {
        setTimeout(() => {
          dispatch("getProjetos", {});
          setTimeout(() => showOkMessage("Projeto adicionado!"), 1000);
        }, 1000);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
