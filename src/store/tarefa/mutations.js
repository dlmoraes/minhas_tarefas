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

export function atualizarTarefa(state, payload) {
	Object.assign(state.tarefas[payload.id], payload.updates);
}

export function setComentarios(state, payload) {
	state.tarefas[state.tarefa.id].comentarios = payload;
	state.tarefa.comentarios = payload;
}
