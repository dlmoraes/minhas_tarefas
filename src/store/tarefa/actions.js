import { Notify } from "quasar";
import request from "./../../libs/request";
import { showOkMessage } from "./../../libs/messages";

export function setProcurar({ commit }, value) {
  commit("setProcurar", value);
}

export async function getAtribuidores({ commit }) {
  return await new Promise((resolve, reject) => {
    request({
      url: "/users/options/selects/",
      method: "get"
    })
      .then(response => {
        commit("setAtribuidores", response);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function getTarefas({ state, commit, dispatch }) {
  return await new Promise((resolve, reject) => {
    request({
      url: "/tarefas/",
      method: "get"
    })
      .then(response => {
        commit("setTarefas", response);

        if (Object.keys(state.tarefa).length > 0) {
          let id = state.tarefa.id;
          let tarefa = response.filter(e => e.id === id)[0];
          dispatch("setTarefa", tarefa);
        }

        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function getTarefa({ state, commit }) {
  if (Object.keys(state.tarefa).length > 0) {
    return await new Promise((resolve, reject) => {
      request({
        url: `/tarefas/${state.tarefa.id}`,
        method: "get"
      })
        .then(response => {
          commit("setTarefa", response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export async function getComentarios({ state, commit }) {
  if (Object.keys(state.tarefa).length > 0) {
    return await new Promise((resolve, reject) => {
      request({
        url: `/tarefas/${state.tarefa.id}/comentarios/`,
        method: "get"
      })
        .then(response => {
          commit("setComentarios", response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export function adicionarTarefa({ dispatch }, payload) {
  dispatch("dbAdicionarTarefa", payload);
}

export function setTarefa({ commit }, payload) {
  commit("setTarefa", payload);
}

export function atualizarTarefa({ dispatch }, payload) {
  dispatch("dbAtualizarTarefa", payload);
}

export function deleteTarefa({ dispatch }, payload) {
  dispatch("dbDeleteTarefa", payload);
}

export function deleteComentario({ dispatch }, payload) {
  dispatch("dbDeleteComentario", payload);
}

export function adicionarComentario({ dispatch }, payload) {
  dispatch("dbAdicionarComentario", payload);
}

export function adicionarEvidencia({ dispatch }, payload) {
  dispatch("dbAdicionarEvidencia", payload);
}

export async function dbAdicionarTarefa({ dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/`,
      method: "post",
      data: payload
    })
      .then(response => {
        setTimeout(() => {
          dispatch("getTarefas", {});
        }, 1000);
        showOkMessage("Tarefa adicionada!");
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbAtualizarTarefa({ state, dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/${payload.id}/`,
      method: "put",
      data: payload.updates
    })
      .then(response => {
        showOkMessage("Tarefa editada!");
        if (Object.keys(state.tarefa).length > 0) {
          dispatch("getTarefa", {});
        } else {
          dispatch("getTarefas", {});
        }
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbDeleteTarefa({ dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/${payload.id}/`,
      method: "delete"
    })
      .then(response => {
        showOkMessage("Tarefa removida!");
        dispatch("setTarefa", {});
        dispatch("getTarefas", {});
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbDeleteComentario({ dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/comentarios/${payload.id}/`,
      method: "delete"
    })
      .then(response => {
        showOkMessage("Comentário removido!");
        dispatch("getComentarios", {});
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbAdicionarComentario({ dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/${payload.id}/comentarios/`,
      method: "post",
      data: payload.comentario
    })
      .then(response => {
        showOkMessage("Comentário adicionado!");
        dispatch("getTarefa", {});
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbAdicionarEvidencia({ commit, dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/${payload.id}/evidencias`,
      method: "post",
      data: payload.formData,
      headers: {
        "Content-Type": "multipart/form-data;"
      }
    })
      .then(response => {
        showOkMessage("Arquivo salvo com sucesso!");
        dispatch("getTarefa", {});
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
