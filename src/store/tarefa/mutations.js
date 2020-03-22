export function setAtribuidores(state, payload) {
  state.atribuidores = payload;
}

export function setProcurar(state, value) {
  state.procurar = value;
}

export function setTarefas(state, payload) {
  state.tarefas = payload;
}

export function setTarefa(state, payload) {
  state.tarefa = {};
  state.tarefa = payload;
}

export function setTarefaPorId(state, payload) {
  Object.keys(state.tarefas).forEach(chave => {
    if (state.tarefas[chave].id === state.tarefa.id) {
      state.tarefas[chave] = state.tarefa;
    }
  });
}

export function atualizarTarefa(state, payload) {
  Object.assign(state.tarefas[payload.id], payload.updates);
}

export function setComentarios(state, payload) {
  state.tarefa.comentarios = payload;
  Object.keys(state.tarefas).forEach(chave => {
    if (state.tarefas[chave].id === state.tarefa.id) {
      state.tarefas[chave].comentarios = payload;
    }
  });
}
