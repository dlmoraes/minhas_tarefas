<template>
  <q-item class="detalhes_tarefa_cabecalho">
    <q-item-label avatar>
      <q-avatar :icon="icone"/>
    </q-item-label>
    <q-item-section class="rotulo">{{ rotulo }}</q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: "CabecalhoItensPainelDireito",
    props: ['icone', 'rotulo']
  }
</script>

<style scoped>

</style>
