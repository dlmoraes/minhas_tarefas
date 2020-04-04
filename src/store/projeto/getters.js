const getters = {
  projetosOrdenados: state => {
    let projetosOrd = {};
    let chavesOrd = Object.keys(state.projetos);

    chavesOrd.sort((a, b) => {
      let projetoA = state.projetos[a].titulo.toLowerCase();
      let projetoB = state.projetos[b].titulo.toLowerCase();

      if (projetoA > projetoB) {
        return 1;
      } else if (projetoA < projetoB) {
        return -1;
      } else {
        return 0;
      }
    });

    chavesOrd.forEach(chave => {
      projetosOrd[chave] = state.projetos[chave];
    });

    return projetosOrd;
  }
};

export default getters;
