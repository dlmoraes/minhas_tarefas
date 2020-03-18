<template>
  <q-page padding>
    <q-toolbar class="q-mb-md">
      <q-toolbar-title>Todas as tarefas</q-toolbar-title>
      <ProcurarTarefa class="q-mr-md"/>
      <q-btn
        @click="mostrarAdicionarTarefa = true"
        class="btn_add_tarefa"
        icon-right="fas fa-plus-circle"
        label="Nova tarefa"
        no-caps
        rounded
      />
    </q-toolbar>

    <SemTarefas
      v-if="!Object.keys(tarefasHoje).length > 0 && !Object.keys(proximasTarefas).length > 0
      && !Object.keys(tarefasPendentes).length > 0 && !Object.keys(tarefasFinalizadas).length > 0"
    />

    <TodasTarefas
      :tarefas="tarefasHoje"
      classe="tarefas_hoje"
      rotulo="Hoje"
      v-if="visao === 'todas' && Object.keys(tarefasHoje).length > 0"
    />
    <TodasTarefas
      :tarefas="proximasTarefas"
      classe="proximas_tarefas"
      rotulo="Próximas"
      v-if="visao === 'todas' && Object.keys(proximasTarefas).length > 0"
    />
    <TodasTarefas
      :tarefas="tarefasPendentesInicial"
      classe="proximas_tarefas"
      rotulo="Outras"
      v-if="visao === 'todas' && Object.keys(tarefasPendentesInicial).length > 0"
    />


    <TodasTarefas
      :tarefas="tarefasPendentes"
      classe="tarefas_hoje"
      rotulo="Pendentes"
      v-if="visao === 'pendentes' && Object.keys(tarefasPendentes).length > 0"
    />
    <TodasTarefas
      :tarefas="tarefasFinalizadas"
      classe="tarefas_hoje"
      rotulo="Finalizadas"
      v-if="visao === 'finalizadas' && Object.keys(tarefasFinalizadas).length > 0"
    />
    <TodasTarefas
      :tarefas="tarefasArquivadas"
      classe="proximas_tarefas"
      rotulo="Arquivadas"
      v-if="visao === 'arquivadas'"
    />

    <q-dialog v-model="mostrarAdicionarTarefa">
      <AdicionarTarefa @close="mostrarAdicionarTarefa = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
  import {date} from "quasar";
  import {mapActions, mapGetters} from "vuex";
  import TodasTarefas from "../components/Tarefas/TodasTarefas";
  import AdicionarTarefa from "../components/Tarefas/Modal/AdicionarTarefa";
  import ProcurarTarefa from "../components/Tarefas/Tools/ProcurarTarefa";
  import SemTarefas from "../components/Tarefas/Util/SemTarefas";

  export default {
    name: "Home",
    components: {
      TodasTarefas,
      AdicionarTarefa,
      ProcurarTarefa,
      SemTarefas
    },
    data() {
      return {
        visao: "",
        mostrarAdicionarTarefa: false
      };
    },
    methods: {
      ...mapActions("gerenciadortarefa", ["getTarefas"]),
      async init() {
        await this.getTarefas();
      },
      setVisao(visao) {
        this.visao = visao === undefined ? "todas" : visao;
      }
    },
    computed: {
      ...mapGetters("gerenciadortarefa", [
        "tarefasHoje",
        "proximasTarefas",
        "tarefasPendentes",
        "tarefasPendentesInicial",
        "tarefasFinalizadas",
        "tarefasArquivadas"
      ])
    },
    mounted() {
      this.$root.$on("mostrarAdicionarTarefa", () => {
        this.mostrarAdicionarTarefa = true;
      });
    },
    filters: {
      formataData(value) {
        return date.formatDate(value, "MMM D");
      }
    },
    watch: {
      "$route.params.visao": {
        handler: function (visao) {
          this.setVisao(visao);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      this.init();
      this.setVisao(this.$route.params.visao);
    }
  };
</script>

<style lang="scss">
  .tarefas_hoje,
  .proximas_tarefas {
    /*.q-expansion-item--collapsed {*/
    background: #f7f6fb;
    border-radius: 32px;
    /*}*/

    .q-item--active {
      background: rgba(0, 0, 0, 0.15);
    }

    .expansor_lista_tarefas .q-item {
      border-radius: 32px !important;

      .q-item__label {
        font-size: 18px;
      }
    }

    .detalhes_tarefa {
      .q-item__label {
        font-size: 15px !important;
        color: #000;
      }
    }

    .tarefa_completa {
      color: #000;

      .q-item__label {
        font-size: 15px !important;
        color: $grey-6;
      }
    }
  }

  .proximas_tarefas {
    .fa-check-circle {
      color: $grey-5;
    }
  }

  .btn_add_tarefa {
    background: #017eff;
    color: #fff;

    i {
      font-size: 18px !important;
      background: #3b9cff;
      padding: 20px;
      border-radius: 50%;
      margin-left: 2px;
      left: 10px;
    }
  }

  @media (max-width: 600px) {
    .tarefa_avatares {
      display: none;
    }
  }
</style>
