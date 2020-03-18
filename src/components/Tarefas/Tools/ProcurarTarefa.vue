<template>
  <q-input
    v-model="procurarField"
    v-select-all
    rounded
    label="Pesquisar Tarefa"
    class="col-3"
    @keyup.esc="procurarField = ''"
  >
    <template v-slot:prepend>
      <q-icon
        v-if="procurarField !== ''"
        name="fas fa-times-circle"
        @click="procurarField = ''"
        class="cursor-pointer"
      />
      <q-icon name="fas fa-search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { selectAll } from "src/directives/directive-select-all";

export default {
  name: "ProcurarTarefa",
  computed: {
    ...mapState("gerenciadortarefa", ["procurar"]),
    procurarField: {
      get() {
        return this.procurar;
      },
      set(value) {
        this.setProcurar(value);
      }
    }
  },
  methods: {
    ...mapActions("gerenciadortarefa", ["setProcurar"])
  },
  directives: {
    selectAll
  }
};
</script>
