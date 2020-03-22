<template>
  <q-item
    :key="tarefa.id"
    :class="tarefa.finalizado ? 'detalhes_tarefa tarefa_finalizado' : 'detalhes_tarefa'"
  >
    <q-item-section side top>
      <q-btn
        flat
        round
        :color="tarefa.finalizado ? 'blue' : 'grey-7'"
        :icon="tarefa.finalizado ? 'fas fa-check-circle' : 'far fa-check-circle'"
        @click="alterarFinalizacaoTarefa"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label class="ellipsis-2-lines">{{ tarefa.titulo }}</q-item-label>
    </q-item-section>
    <q-item-section side class="q-mr-md">
      <div class="row">
        <div class="column justify-center">
          <q-icon name="fas fa-calendar-alt" size="18px" class="q-mr-sm" color="grey-7" />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end text-grey-7"
          >{{ tarefa.data_vencimento | formataData }}</q-item-label>
        </div>
      </div>
    </q-item-section>

    <TarefaSolicitantes :solicitantes="tarefa.atribuidor" />

    <q-item-section v-if="tarefa.bloqueado" avatar>
      <q-icon name="fas fa-lock" color="negative" size="16px" />
    </q-item-section>

    <TarefaPrioridade v-else :prioridade="tarefa.prioridade" />
    <q-item-section avatar>
      <div class="row">
        <q-btn
          @click="mostrarModalEditarTarefa"
          flat
          round
          icon="fas fa-pen"
          color="grey-7"
          size="10px"
        >
          <q-tooltip>Editar</q-tooltip>
        </q-btn>
        <q-btn
          @click="setTarefa(tarefa)"
          flat
          round
          :icon="$store.state.gerenciadortarefa.tarefa.id === tarefa.id ? 'fas fa-thumbtack fa-rotate-90' : 'fas fa-thumbtack'"
          color="grey-7"
          size="10px"
        >
          <q-tooltip>Detalhes</q-tooltip>
        </q-btn>
      </div>
    </q-item-section>

    <q-dialog v-model="mostrarEditarTarefa" @close="mostrarEditarTarefa = false">
      <EditarTarefa :tarefa="tarefa" />
    </q-dialog>
  </q-item>
</template>

<script>
import { date } from "quasar";
import TarefaSolicitantes from "./Util/TarefaSolicitantes";
import TarefaPrioridade from "./Util/TarefaPrioridade";
import { mapActions } from "vuex";
import EditarTarefa from "./Modal/EditarTarefa";

export default {
  name: "Tarefa",
  props: ["tarefa"],
  data() {
    return {
      mostrarEditarTarefa: false
    };
  },
  methods: {
    ...mapActions("gerenciadortarefa", ["setTarefa", "atualizarTarefa"]),
    mostrarModalEditarTarefa() {
      this.mostrarEditarTarefa = true;
    },
    alterarFinalizacaoTarefa() {
      let atualizacoes = {};
      atualizacoes = {
        id: this.tarefa.id,
        updates: {
          finalizado: !this.tarefa.finalizado,
          data_fim: new Date()
            .toLocaleDateString("pt-br")
            .split("/")
            .reverse()
            .join("/")
        }
      };
      this.atualizarTarefa(atualizacoes);
    }
  },
  filters: {
    formataData(value) {
      return date.formatDate(value, "MMM D");
    }
  },
  components: {
    TarefaSolicitantes,
    TarefaPrioridade,
    EditarTarefa
  }
};
</script>
