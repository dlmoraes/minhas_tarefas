<template>
  <q-uploader class="upload_dialog" :factory="evidenciaFactoryFn">
    <template v-slot:list="scope">
      <q-list separator>
        <q-item v-for="file in scope.files" :key="file.name">
          <q-item-section>
            <q-item-label class="full-width ellipsis">{{ file.name }}</q-item-label>

            <q-item-label caption>Status: {{ file.__status }}</q-item-label>

            <q-item-label caption>{{ file.__sizeLabel }} / {{ file.__progressLabel }}</q-item-label>
          </q-item-section>

          <q-item-section v-if="file.__img" thumbnail class="gt-xs">
            <img :src="file.__img.src" />
          </q-item-section>

          <q-item-section top side>
            <q-btn
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="delete"
              @click="scope.removeFile(file)"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </q-uploader>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["tarefa_id"],
  methods: {
    ...mapActions("gerenciadortarefa", ["adicionarEvidencia"]),
    async evidenciaFactoryFn(file) {
      let formData = new FormData();
      formData.append("image[]", file[0]);
      let payload = {
        id: this.tarefa_id,
        formData: formData
      };
      try {
        await this.adicionarEvidencia(payload);
        this.$emit("close");
      } catch (e) {
        console.log(e);
        return {
          url: "",
          method: "GET"
        };
      }
    }
  }
};
</script>

<style>
</style>
