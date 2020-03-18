<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div class="q-mb-md">
      <q-list
        separator
        :class="classe"
      >
        <q-expansion-item
          switch-toggle-side
          default-opened
          expand-separator
          :label="rotulo + ' (' + Object.keys(tarefas).length + ')'"
          class="expansor_lista_tarefas"
        >
          <Tarefa v-for="tarefa in tarefas" :tarefa="tarefa" :key="tarefa.id" />
        </q-expansion-item>
      </q-list>
    </div>
  </transition>
</template>

<script>

  import Tarefa from "./Tarefa";

  export default {
    name: "TodasTarefas",
    props: ['tarefas', 'classe', 'rotulo'],
    components: {
      Tarefa
    }
  }
</script>
