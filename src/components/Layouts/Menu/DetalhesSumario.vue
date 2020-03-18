<template>
  <q-item class="sumario_tarefa_detalhes">
    <q-item-section class="rotulo text-grey-6">{{rotulo}}</q-item-section>
    <q-item-section side class="valor text-black">{{ valor }}</q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: "DetalhesSumario",
    props: ['rotulo', 'valor']
  }
</script>

<style scoped>

</style>
