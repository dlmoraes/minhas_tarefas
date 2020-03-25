<template>
  <div class="row q-mb-md time">
    <q-markup-table class="tb_participantes" flat>
      <thead>
      <tr>
        <th colspan="100" class="no-border">
          <div class="row no-wrap items-center ">
            <span class="titulo">Participantes</span>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td v-for="participante in participantes" :key="participante.avatar_url">
          <Participante :avatar-url="participante.avatar_url"/>
        </td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
  import Participante from "../Tools/Participante";


  export default {
    name: "AreaParticipantes",
    props: ['participantes'],
    components: {
      Participante
    }
  }
</script>

<style lang="scss" scoped>
  .time {
    .titulo {
      font-size: 16px;
      font-weight: 500;
    }

    .q-table tbody td:before {
      background: transparent;
    }
  }
</style>
