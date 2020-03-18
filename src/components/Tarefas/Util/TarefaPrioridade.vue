<template>
  <q-item-section class="tarefa_prioridade" avatar>
    <q-icon
      :name="prioridade === 'Alta' ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'"
      :color="prioridade === 'Alta' ? 'negative' : 'positive'"
      size="16px"/>
  </q-item-section>
</template>

<script>
  export default {
    name: "TarefaPrioridade",
    props: ['prioridade']
  }
</script>

<style scoped>

</style>
