import { date } from "quasar";

const getters = {
  tarefasOrdenadas: state => {
    let tarefasOrd = {},
      chavesOrd = Object.keys(state.tarefas);

    chavesOrd.sort((a, b) => {
      let tarefaA = state.tarefas[a][state.ordenarPor].toLowerCase(),
        tarefaB = state.tarefas[b][state.ordenarPor].toLowerCase();

      if (tarefaA > tarefaB) {
        return 1;
      } else if (tarefaA < tarefaB) {
        return -1;
      } else {
        return 0;
      }
    });

    chavesOrd.forEach(chave => {
      tarefasOrd[chave] = state.tarefas[chave];
    });

    return tarefasOrd;
  },
  tarefasFiltradas: (state, getters) => {
    let tarefasOrdenadas = getters.tarefasOrdenadas;
    let tarefasFiltradas = {};

    if (state.procurar) {
      Object.keys(tarefasOrdenadas).forEach(chave => {
        let tarefa = tarefasOrdenadas[chave];
        let tituloTarefaLowerCase = tarefa.titulo.toLowerCase();
        let procurarToLowerCase = state.procurar.toLowerCase();

        if (tituloTarefaLowerCase.includes(procurarToLowerCase)) {
          tarefasFiltradas[chave] = tarefa;
        }
      });
      return tarefasFiltradas;
    }

    return tarefasOrdenadas;
  },
  tarefasHoje: (state, getters) => {
    let tarefasFiltradas = getters.tarefasFiltradas,
      tarefasHoje = {};

    Object.keys(tarefasFiltradas).forEach(chave => {
      let tarefa = tarefasFiltradas[chave],
        hoje = date.formatDate(new Date(), "YYYY/MM/DD"),
        dataVencimento = tarefa.data_vencimento;

      if (date.isSameDate(hoje, dataVencimento) && !tarefa.arquivado) {
        tarefasHoje[chave] = tarefa;
      }
    });

    return tarefasHoje;
  },
  proximasTarefas: (state, getters) => {
    let tarefasFiltradas = getters.tarefasFiltradas,
      proximasTarefas = {};

    Object.keys(tarefasFiltradas).forEach(chave => {
      let tarefa = tarefasFiltradas[chave],
        hoje = date.formatDate(new Date(), "YYYY/MM/DD"),
        dataVencimento = tarefa.data_vencimento;

      if (hoje < dataVencimento && !tarefa.arquivado) {
        proximasTarefas[chave] = tarefa;
      }
    });

    return proximasTarefas;
  },
  tarefasPendentes: (state, getters) => {
    let tarefasFiltradas = getters.tarefasFiltradas,
      pendentes = {};

    Object.keys(tarefasFiltradas).forEach(chave => {
      let tarefa = tarefasFiltradas[chave];
      if (!tarefa.finalizado) {
        pendentes[chave] = tarefa;
      }
    });
    return pendentes;
  },
  tarefasPendentesInicial: (state, getters) => {
    let tarefasFiltradas = Object.keys(getters.tarefasFiltradas).map(
      i => getters.tarefasFiltradas[i]
    );
    let tarefasHoje = Object.keys(getters.tarefasHoje).map(
      i => getters.tarefasHoje[i]
    );
    let proximasTarefas = Object.keys(getters.proximasTarefas).map(
      i => getters.proximasTarefas[i]
    );
    let pendentes = tarefasFiltradas
      .filter(({ id: id1 }) => !tarefasHoje.some(({ id: id2 }) => id2 === id1))
      .filter(
        ({ id: id1 }) => !proximasTarefas.some(({ id: id2 }) => id2 === id1)
      )
      .filter(x => x.finalizado === 0);
    return pendentes;
  },
  tarefasFinalizadas: (state, getters) => {
    let tarefasFiltradas = getters.tarefasFiltradas,
      finalizadas = {};

    Object.keys(tarefasFiltradas).forEach(chave => {
      let tarefa = tarefasFiltradas[chave];
      if (tarefa.finalizado && !tarefa.arquivado) {
        finalizadas[chave] = tarefa;
      }
    });
    return finalizadas;
  },
  tarefasArquivadas: (state, getters) => {
    let tarefasFiltradas = getters.tarefasFiltradas,
      arquivadas = {};

    Object.keys(tarefasFiltradas).forEach(chave => {
      let tarefa = tarefasFiltradas[chave];
      if (tarefa.arquivado) {
        arquivadas[chave] = tarefa;
      }
    });
    return arquivadas;
  }
};

export default getters;
