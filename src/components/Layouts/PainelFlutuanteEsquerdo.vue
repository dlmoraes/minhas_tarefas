<template>
  <q-page-sticky
    v-if="$q.screen.gt.xs"
    class="painelEsquerdoFlutuante"
    expand
    position="left">
    <div class="fit q-pt-xl q-px-sm column">
      <q-btn round flat no-caps size="26px" class="btnMenu">
        <q-icon size="22px" name="photo"/>
<!--        <div class="rotulo">Photos</div>-->
      </q-btn>

      <q-btn round flat no-caps class="btnMenu ativo">
        <q-icon name="collections_bookmark"/>
<!--        <div class="rotulo">Albums</div>-->
      </q-btn>

      <q-btn round flat no-caps size="26px" class="btnMenu">
        <q-icon size="22px" name="assistant"/>
<!--        <div class="rotulo">Assistant</div>-->
      </q-btn>

      <q-btn round flat no-caps size="26px" class="btnMenu">
        <q-icon size="22px" name="group"/>
<!--        <div class="rotulo">Sharing</div>-->
      </q-btn>

      <q-btn round flat stack no-caps size="26px" class="btnMenu">
        <q-icon size="22px" name="import_contacts"/>
<!--        <div class="rotulo">Photo books</div>-->
      </q-btn>
    </div>
  </q-page-sticky>
</template>

<script>
    export default {
        name: "PainelFlutuanteEsquerdo"
    }
</script>

<style lang="scss" scoped>
  .painelEsquerdoFlutuante {
    background: #0a97fc;

    .btnMenu {
      color: #FFF !important;
    }

    .rotulo {
      font-size: 12px;
      line-height: 24px;
      letter-spacing: .01785714em;
      font-weight: 500;
    }

    .ativo {
      background: #fff;
      color: #0a97fc !important;
      width: 50px;
      height: 50px;
      left: 15px;
    }

    .ativo {
      color: #000;
    }

  }

  /*.q-btn--round {*/
  /*  border-radius: 50%;*/
  /*  border-top-left-radius: 50%;*/
  /*  border-top-right-radius: 50%;*/
  /*  border-bottom-right-radius: 50%;*/
  /*  border-bottom-left-radius: 50%;*/
  /*}*/
</style>

