<template>
  <q-page padding>
    <q-toolbar class="q-mb-md">
      <q-toolbar-title>
        Todas as tarefas
      </q-toolbar-title>

      <q-btn
        class="btn_add_tarefa"
        label="Nova tarefa"
        rounded
        no-caps
        icon-right="fas fa-plus-circle"
      />
    </q-toolbar>

    <TodasTarefas :tarefas="tarefasHoje" classe="tarefas_hoje" rotulo="Hoje" />
    <TodasTarefas :tarefas="proximasTarefas" classe="proximas_tarefas" rotulo="Próximas" />

  </q-page>
</template>

<script>
  import {date} from 'quasar';
  import { mapGetters } from 'vuex'
  import TodasTarefas from "../components/Tarefas/TodasTarefas";
  import GooeyBotao from "../components/Botoes/GooeyBotao";


  export default {
    name: "Home",
    components: {
      TodasTarefas,
      GooeyBotao
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('gerenciadortarefa', ['tarefasHoje', 'proximasTarefas'])
    },
    filters: {
      formataData(value) {
        return date.formatDate(value, 'MMM D')
      }
    }
  }
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

  @media (max-width: 600px)
  {
    .tarefa_avatares
    {
      display: none;
    }
  }
</style>
