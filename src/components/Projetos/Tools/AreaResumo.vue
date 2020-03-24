<template>
  <div class="area_resumos">
    <div class="avatar">
      <div v-if="!$q.screen.lt.md">
        <img src="~assets/rocket.png" alt="projetos" class="img_projetos"/>
      </div>
    </div>
    <div class="container">
      <div class="row justify-around">
        <div class="column">
          <CartaoResumo descricao="Em Andamento" :valor="10"/>
        </div>
        <div class="column">
          <CartaoResumo descricao="Em Espera" :valor="2"/>
        </div>
        <div class="column" v-if="!$q.screen.lt.md">
          <CartaoResumo descricao="No Prazo" :valor="8"/>
        </div>
        <div class="column" v-if="!$q.screen.lt.md">
          <CartaoResumo descricao="Fora do Prazo" :valor="2"/>
        </div>
        <div class="column">
          <CartaoResumo descricao="Finalizados" :valor="5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CartaoResumo from "../Cartoes/CartaoResumo";

  export default {
    name: "AreaResumo",
    components: {
      CartaoResumo
    }
  }
</script>

<style lang="scss" scoped>
  .area_resumos {
    .container {
      height: 100px;
      border-radius: 50px;
      margin: auto;
      background-image: linear-gradient(
          to bottom,
          #037fff,
          #0084ff,
          #0088fe,
          #008dfe,
          #0091fd,
          #0394fc,
          #0a97fc,
          #129afb,
          #149dfb,
          #179ffa,
          #1ba2fa,
          #20a4f9
      ) !important;
      color: #fff;
    }

    .avatar {
      position: absolute;
      margin-top: -10px;
      margin-left: 10px;

      .img_projetos {
        width: 120px;
      }
    }
  }
</style>
