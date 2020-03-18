<template>
  <q-item class="q-mt-md q-mb-none">
    <q-item-section>
      <q-input
        class="campo_comentario"
        v-model="texto"
        label="Escreva um comentário..."
        bottom-slots
        dense
        outlined
      >
        <template v-slot:append>
          <!-- <q-btn round dense flat size="10px" icon="fas fa-at">
            <q-tooltip>
              Mencionar alguém
            </q-tooltip>
          </q-btn>
          <q-btn round dense flat size="10px" icon="fas fa-paperclip" class="q-mr-sm q-ml-sm">
            <q-tooltip>
              Anexar
            </q-tooltip>
          </q-btn> -->
          <q-btn round dense flat size="10px" icon="fas fa-comment-medical" @click="tratamentoComentario">
            <q-tooltip>
              Adicionar
            </q-tooltip>
          </q-btn>
        </template>
      </q-input>
    </q-item-section>
  </q-item>
</template>

<script>

  import {date} from 'quasar'
  import {mapActions} from 'vuex';

  export default {
    name: "AdicionarComentario",
    props: ['tarefa'],
    data() {
      return {
        texto: ''
      }
    },
    methods: {
      ...mapActions('gerenciadortarefa', ['adicionarComentario']),
      tratamentoComentario() {
        let payload = {
          id: this.tarefa.id,
          comentario: {
            texto: this.texto
          }
        };
        this.submitComentario(payload);
      },
      submitComentario(tarefa) {
        this.adicionarComentario(tarefa)
      }
    }
  }
</script>

<style scoped>

</style>
