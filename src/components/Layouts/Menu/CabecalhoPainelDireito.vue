<template>
  <q-item class="q-mt-md">
    <q-item-section avatar>
          <span
            :class="(tarefa.finalizado ? 'cor_situacao_tarefa situacao_finalizada_tarefa' : 'cor_situacao_tarefa situacao_pendente_tarefa') + ' shadow-1'">
          </span>
    </q-item-section>
    <q-item-section class="situacao_tarefa">
      <div class="row justify-start">
        <span class="rotulo">{{ tarefa.finalizado ? 'Finalizado' : 'Pendente' }}</span>
        <span class="q-ml-sm text-grey-5">{{ getTempoSolicitacao() }}</span>
      </div>
    </q-item-section>
    <q-item-section side>
      <BotaoOpcoesTarefas :tarefa="tarefa"/>
    </q-item-section>
    <q-item-section side>
      <q-btn class="btn_fechar_paineldireta" icon="fas fa-times" round size="sm" flat
             @click="ocultarPainel"
      >
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">Fechar</q-tooltip>
      </q-btn>
    </q-item-section>
  </q-item>
</template>

<script>

  import BotaoOpcoesTarefas from "../../Botoes/BotaoOpcoesTarefas";

  export default {
    name: "CabecalhoPainelDireito",
    props: ['tarefa', 'ocultarPainel', 'getTempoSolicitacao', 'getTempoVencimento'],
    components: {
      BotaoOpcoesTarefas
    }
  }
</script>

<style scoped>

</style>
