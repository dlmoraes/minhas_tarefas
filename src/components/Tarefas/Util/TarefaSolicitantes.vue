<template>
  <q-item-section
    class="tarefa_avatares"
    avatar
    side>
    <div class="row">
      <div class="col">
        <q-avatar
                class="q-mr-sm">
          <img :src="solicitantes.avatar_path" :alt="solicitantes.username">
        </q-avatar>
      </div>
    </div>
  </q-item-section>
</template>

<script>
  export default {
    name: "TarefaSolicitantes",
    props: ['solicitantes']
  }
</script>
