<template>
  <q-page padding>
    <h2>Teste</h2>
<!--    <q-toggle-->
<!--      v-model="modoGrade"-->
<!--      icon="fas fa-th-large"-->
<!--      label="Grade"-->
<!--    />-->
<!--    <div class="row flex justify-start">-->
<!--      <template v-if="!modoGrade">-->
<!--        <cartao v-for="gerencia in gerencias" :key="gerencia.key"-->
<!--                :gerencia="gerencia"/>-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        <cartao-grade v-for="gerencia in gerencias" :key="'cg-' + gerencia.key"/>-->
<!--      </template>-->
<!--    </div>-->
  </q-page>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Cartao from "components/Cartoes/Cartao";
  import CartaoGrade from "components/Cartoes/CartaoGrade";

  export default {
    name: "PageIndex",
    components: {
      Cartao,
      CartaoGrade
    },
    data() {
      return {
        modoGrade: false
      }
    },
    computed: {
      ...mapGetters('gerencias', ['gerencias'])
    }
  };
</script>
