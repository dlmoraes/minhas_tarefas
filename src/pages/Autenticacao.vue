<template>
  <q-page padding>
    <q-card class="auth-tabs absolute-center" >
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login"/>
        <q-tab name="registro" label="Registro"/>
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-registro :tab="tab"/>
        </q-tab-panel>

        <q-tab-panel name="registro">
          <login-registro :tab="tab"/>
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>

  import { LocalStorage } from "quasar";
  import LoginRegistro from "../components/Autenticacao/LoginRegistro";


  export default {
    name: "Autenticacao",
    components: {
      LoginRegistro
    },
    data() {
      return {
        tab: 'login'
      }
    },
    methods: {
      limparStorage() {
        LocalStorage.remove("loggedIn");
        LocalStorage.remove("user");
      }
    },
    created() {
      this.limparStorage()
    }
  }
</script>

<style>
  .auth-tabs {
    max-width: 500px;
    min-width: 400px;
  }
</style>
