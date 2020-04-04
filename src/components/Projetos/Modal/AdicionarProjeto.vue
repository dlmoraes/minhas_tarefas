<template>
  <q-card style="min-width: 600px">
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="text-h6">Novo Projeto</div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center q-mb-xs q-mx-md">
          <q-input
            outlined
            v-model="projetoForm.titulo"
            label="Título"
            class="col"
            :rules="[val => !!val || 'Campo obrigatório']"
            ref="titulo"
          />
        </div>
        <div class="row q-mb-xs q-mx-md">
          <span class="text-subtitle1 q-mb-xs">Resumo</span>
          <q-editor v-model="projetoForm.resumo" min-height="15rem" class="full-width" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" no-caps v-close-popup />
        <q-btn
          :color="projetoForm.titulo === '' ? 'negative' : 'blue'"
          rounded
          label="Adicionar"
          no-caps
          type="submit"
          :disable="projetoForm.titulo === ''"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
  export default {
    name: "AdicionarProjeto",
    data() {
      return {
        projetoForm: {
          titulo: "",
          resumo: ''
        }
      };
    },
    methods: {
      submitForm() {

      }
    }
  }
</script>

<style scoped>

</style>
