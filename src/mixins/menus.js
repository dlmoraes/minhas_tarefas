export default [
  {
    rotulo: "Dashboard",
    icone: "img:statics/icons/laptop.png",
    rota: {
      name: "dashboard"
    }
  },
  {
    rotulo: "Tarefas",
    icone: "img:statics/icons/checklist.png",
    menus: [
      {
        rotulo: "Todas",
        icone: "fas fa-tasks",
        rota: {
          name: "tarefas"
        }
      },
      {
        rotulo: "Pendentes",
        icone: "fas fa-hourglass-start",
        rota: {
          name: "tarefas",
          params: {
            visao: "pendentes"
          }
        }
      },
      {
        rotulo: "Finalizadas",
        icone: "fas fa-check-double",
        rota: {
          name: "tarefas",
          params: {
            visao: "finalizadas"
          }
        }
      },
      {
        rotulo: "Arquivadas",
        icone: "fas fa-archive",
        rota: {
          name: "tarefas",
          params: {
            visao: "arquivadas"
          }
        }
      }
    ]
  },
  {
    rotulo: "Projetos",
    icone: "img:statics/icons/project-management.png",
    rota: {
      name: "projetos"
    }
  }
];
