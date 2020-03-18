<template>
  <q-card>
    <q-card-section class="row items-center">
      <q-avatar icon="img:statics/icons/clipboard.png" text-color="white" />
      <span class="q-ml-sm">Deseja realmente excluir esta tarefa?</span>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat no-caps label="Cancelar" v-close-popup />
      <q-btn
        no-caps
        rounded
        label="Excluir"
        color="negative"
        @click="removerTarefaSubmit"
        v-close-popup
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RemoverTarefa",
  props: ["tarefa"],
  methods: {
    ...mapActions("gerenciadortarefa", ["deleteTarefa"]),
    removerTarefaSubmit() {
      this.deleteTarefa(this.tarefa);
    }
  }
};
</script>

<style>
</style>
