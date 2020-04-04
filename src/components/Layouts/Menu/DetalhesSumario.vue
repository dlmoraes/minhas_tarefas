<template>
  <q-item class="sumario_tarefa_detalhes">
    <q-item-section class="rotulo">{{rotulo}}</q-item-section>
    <q-item-section side class="valor">{{ valor }}</q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: "DetalhesSumario",
    props: ['rotulo', 'valor']
  }
</script>
