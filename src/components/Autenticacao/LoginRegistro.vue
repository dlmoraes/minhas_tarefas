<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md flex flex-center">
      <img v-if="tab === 'login'" :alt="tab" src="~assets/account.png" width="150px">
      <img v-else :alt="tab" src="~assets/employee.png" width="150px">
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.username"
        :rules="[ val => val.length >= 5 || 'Digite pelo menos 5 caracteres.']"
        ref="username"
        lazy-rules
        outlined
        class="col"
        label="Usuário"
        stack-label/>
    </div>
    <div class="row q-mb-md" v-if="tab !== 'login'">
      <q-input
        v-model="formData.email"
        :rules="[ val => isValidEmailAddress(val) || 'Por favor insira um endereço de e-mail válido.']"
        ref="email"
        lazy-rules
        outlined
        class="col"
        label="E-mail"
        stack-label/>
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Digite pelo menos 6 caracteres.']"
        ref="password"
        lazy-rules
        type="password"
        outlined
        class="col"
        label="Password"
        stack-label/>
    </div>
    <div class="row">
      <q-space/>
      <q-btn
        color="primary"
        :label="tab"
        type="submit"/>
    </div>
  </form>
</template>

<script>

  import {mapActions} from 'vuex'

  export default {
    name: "LoginRegistro",
    props: ['tab'],
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions('autenticacao', ['registroUsuario', 'loginUsuario']),
      isValidEmailAddress(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      },
      submitForm() {
        this.$refs.username.validate()
        if (this.tab !== 'login') {
          this.$refs.email.validate()
        }
        this.$refs.password.validate()
        if (!this.$refs.username.hasError && !this.$refs.password.hasError) {
          if (this.tab === 'login') {
            this.loginUsuario(this.formData)
          } else {
            this.registroUsuario(this.formData)
          }
        }
      }
    },
    filters: {
      titleCase(value) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>
