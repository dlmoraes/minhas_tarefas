<template>
  <q-item>
    <q-item-section>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img :src="comentario.user.avatar_path" :alt="comentario.user.username" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ comentario.user.username }}</q-item-label>
            <q-item-label caption lines="2">{{ comentario.texto }}</q-item-label>
          </q-item-section>

          <q-item-section side top>{{ comentario.created_at | dataFormatada }}</q-item-section>

          <q-item-section side @click="modalDeleteComentario = true">
            <q-btn icon="fas fa-trash" flat round size="9px" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-item-section>
    <q-dialog v-model="modalDeleteComentario" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="fas fa-trash" text-color="negative" />
          <span class="q-ml-sm">Você tem certeza que deseja excluir esse comentário?.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Voltar" v-close-popup />
          <q-btn
            label="Sim"
            color="negative"
            v-close-popup
            @click="excluirComentario(comentario.id)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-item>
</template>

<script>
import { date } from "quasar";
import { mapActions } from "vuex";

export default {
  name: "Comentarios",
  props: ["comentario"],
  data() {
    return {
      modalDeleteComentario: false
    };
  },
  methods: {
    ...mapActions("gerenciadortarefa", ["deleteComentario"]),
    excluirComentario(idComentario) {
      let payload = {
        id: idComentario
      };
      this.deleteComentario(payload);
    }
  },
  filters: {
    dataFormatada(data) {
      return date.formatDate(data, "DD/MM/YYYY");
    }
  }
};
</script>

<style scoped>
</style>
