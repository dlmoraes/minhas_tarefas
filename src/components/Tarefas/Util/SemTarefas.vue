<template>
  <div class="absolute-center">
    <div class="row">
      <q-avatar size="200px" icon="img:statics/icons/clipboard1.png" color="grey-3"/>
    </div>
    <div class="row q-mt-md">
      <span class="text-center texto_semtarefas">Você não possui tarefas para hoje</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SemTarefas'
  };
</script>

<style scoped>
  /deep/.q-avatar__content img {
    margin-right: -15px;
  }
  /deep/.texto_semtarefas {
    width: 200px;
    font-weight: bold;
  }
</style>
