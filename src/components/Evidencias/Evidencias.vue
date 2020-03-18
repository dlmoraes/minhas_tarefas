<template>
  <q-item class="evidencias_tarefa">
    <q-item-section v-for="evidencia in evidencias" :key="evidencia.id">
      <q-img
        :src="evidencia.url"
        spinner-color="white"
        class="imagem_evidencias rounded-borders"
        @click="modalVisualizarImagem = true"
      />
    </q-item-section>
    <q-item-section v-if="evidencias.length < 3" avatar side>
      <q-btn icon="fas fa-cloud-upload-alt" round @click="modalSubirImagem = true">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">Anexar imagem</q-tooltip>
      </q-btn>
    </q-item-section>

    <q-dialog v-model="modalVisualizarImagem" full-width full-height>
      <VisualizarEvidencia :evidencias="evidencias" />
    </q-dialog>
    <q-dialog v-model="modalSubirImagem">
      <AdicionarEvidencia :tarefa_id="tarefa_id" @close="modalSubirImagem = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import VisualizarEvidencia from "./Modals/VisualizarEvidencia";
import AdicionarEvidencia from "./Modals/AdicionarEvidencia";

export default {
  name: "Evidencias",
  props: ["evidencias", "tarefa_id"],
  components: {
    VisualizarEvidencia,
    AdicionarEvidencia
  },
  data() {
    return {
      modalSubirImagem: false,
      modalVisualizarImagem: false
    };
  }
};
</script>

<style lang="scss">
.imagem_evidencias {
  cursor: pointer;
}

.upload_dialog {
  max-width: calc(100% - 200px) !important;
  width: 50%;
  height: 50%;
}
</style>
