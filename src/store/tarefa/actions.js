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
          setTimeout(() => showOkMessage("Tarefa adicionada!"), 1000);
        }, 1000);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbAtualizarTarefa({ commit, dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/${payload.id}/`,
      method: "put",
      data: payload.updates
    })
      .then(response => {
        dispatch("getTarefas", {});
        commit("setTarefa", {});
        resolve(response);
        setTimeout(() => showOkMessage("Tarefa editada!"), 1000);
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
        dispatch("setTarefa", {});
        dispatch("getTarefas", {});
        setTimeout(() => showOkMessage("Tarefa removida!"), 1000);
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
        dispatch("getComentarios", {});
        setTimeout(() => showOkMessage("Comentário removido!"), 1000);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function dbAdicionarComentario({ commit, dispatch }, payload) {
  return await new Promise((resolve, reject) => {
    request({
      url: `/tarefas/${payload.id}/comentarios/`,
      method: "post",
      data: payload.comentario
    })
      .then(response => {
        dispatch("getTarefas", {});
        commit("setTarefaPorId", {});
        setTimeout(() => showOkMessage("Comentário adicionado!"), 1000);
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
        dispatch("getTarefas", {});
        commit("setTarefaPorId", {});
        setTimeout(() => showOkMessage("Arquivo salvo com sucesso!"), 1000);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
