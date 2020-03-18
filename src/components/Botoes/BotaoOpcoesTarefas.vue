<template>
  <q-btn class="btn_opcoes_tarefa" icon="fas fa-ellipsis-h" round size="sm">
    <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">Opções da tarefa</q-tooltip>
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item @click="modalConfirmacaoRemocao = true" clickable>
          <q-item-section>Excluir</q-item-section>
        </q-item>
        <q-item @click="alterarFinalizacaoTarefa" clickable>
          <q-item-section>{{ tarefa.finalizado ? 'Reativar' : 'Finalizar' }}</q-item-section>
        </q-item>
        <q-item clickable @click="alterarBloqueioTarefa">
          <q-item-section>{{ tarefa.bloqueado ? 'Desbloquear' : 'Bloquear tarefa' }}</q-item-section>
        </q-item>
        <q-item v-if="tarefa.finalizado" @click="alterarArquivamentoTarefa" clickable>
          <q-item-section>{{ tarefa.arquivado ? 'Desarquivar' : 'Arquivar' }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
    <q-dialog v-model="modalConfirmacaoRemocao">
      <RemoverTarefa :tarefa="tarefa" />
    </q-dialog>
  </q-btn>
</template>

<script>
import { mapActions } from "vuex";
import RemoverTarefa from "../Tarefas/Modal/RemoverTarefa";

export default {
  name: "BotaoOpcoesTarefas",
  props: ["tarefa"],
  data() {
    return {
      atualizacoes: {},
      modalConfirmacaoRemocao: false
    };
  },
  components: {
    RemoverTarefa
  },
  methods: {
    ...mapActions("gerenciadortarefa", ["atualizarTarefa"]),
    alterarBloqueioTarefa() {
      this.atualizacoes = {};
      this.atualizacoes = {
        id: this.tarefa.id,
        updates: {
          bloqueado: !this.tarefa.bloqueado
        }
      };
      this.submitTarefa(this.atualizacoes);
    },
    alterarFinalizacaoTarefa() {
      this.atualizacoes = {};
      this.atualizacoes = {
        id: this.tarefa.id,
        updates: {
          finalizado: !this.tarefa.finalizado
        }
      };
      this.submitTarefa(this.atualizacoes);
    },
    alterarArquivamentoTarefa() {
      this.atualizacoes = {};
      this.atualizacoes = {
        id: this.tarefa.id,
        updates: {
          arquivado: !this.tarefa.arquivado
        }
      };
      this.submitTarefa(this.atualizacoes);
    },
    submitTarefa(atualizacao) {
      this.atualizarTarefa(atualizacao);
    }
  }
};
</script>
