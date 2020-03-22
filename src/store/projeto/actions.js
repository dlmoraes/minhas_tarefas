import request from "./../../libs/request";
import { showOkMessage } from "./../../libs/messages";

export async function getProjetos({ state, commit, dispatch }) {
  return await new Promise((resolve, reject) => {
    request({
      url: "/projetos/",
      method: "get"
    })
      .then(response => {
        commit("setProjetos", response);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
