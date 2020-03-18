<template>
  <q-page padding class="flex justify-center">
    <CartaoArea v-for="area in areasPorGerencia" :key="area.key"
      :area="area"
    />
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import CartaoArea from "components/Cartoes/CartaoArea";

export default {
  name: "PageGerencia",

  components: {
    CartaoArea
  },
  computed: {
   ...mapGetters('gerencias', ['areasPorGerencia']),
   ...mapState('gerencias', ['gerencia'])
  },
  created() {
    if (!Object.keys(this.gerencia).length) {
      this.$router.back()
    }
  }
};
</script>
