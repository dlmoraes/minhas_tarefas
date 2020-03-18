<template>
  <q-layout view="lhr lpR lfr">
    <PainelEsquerda
      v-if="$route.name !== 'autenticacao'"
      :painelEsquerda="painelEsquerda"
      :mini-painel="miniPainel"
    />
    <PainelDireita
      v-if="Object.keys(this.tarefa).length > 0"
      :tarefa="tarefa"
      :modal_comentario="modal_comentario"
    />
    <q-page-container class="container">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        :duration="1000"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import PainelEsquerda from "../components/Layouts/PainelEsquerda";
import PainelDireita from "../components/Layouts/PainelDireita";

export default {
  components: {
    PainelDireita,
    PainelEsquerda
  },
  data() {
    return {
      painelEsquerda: true,
      painelDireita: false,
      modal_comentario: false,
      miniPainel: true
    };
  },
  computed: {
    ...mapState("gerenciadortarefa", ["tarefa"])
  }
};
</script>

<style lang="scss">
@media (min-width: $breakpoint-xs-max) {
  .container {
    padding-left: 94px;
  }
}
</style>
