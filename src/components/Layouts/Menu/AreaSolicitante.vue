<template>
  <q-item class="usuario_tarefa justify-start">
    <q-item-section>
      <div class="row">
        <div class="column justify-center">
          <q-avatar>
            <img :src="tarefa.atribuidor.avatar_path"/>
          </q-avatar>
        </div>
        <div class="column">
          <q-item-label class="row justify-end">
            <span class="rotulo col-12">Criado por</span>
            <span class="valor col-12">{{ tarefa.atribuidor.username }}</span>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column justify-end">
          <q-avatar class="shadow-1" icon="fas fa-calendar-alt" text-color="white"/>
        </div>
        <div class="column">
          <q-item-label class="row justify-end">
            <span class="rotulo col-12">Vence</span>
            <span class="valor col-12">{{ getTempoVencimento() }}</span>
            <!--                <span class="col-12 text-black">Hoje 9am</span>-->
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: "AreaSolicitante",
    props: ['tarefa', 'getTempoVencimento']
  }
</script>
