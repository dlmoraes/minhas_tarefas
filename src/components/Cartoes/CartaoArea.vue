<template>
  <q-card class="cartao_areas" @click="verIndicadores(area)">
    <q-card-section class="cartao_areas_adicional">
      <div class="cartao_areas_usuario">
        <div class="nome center">{{ area.nome }}</div>
        <div class="cargo center">{{ area.cargo }}</div>
        <q-avatar class="cartao_areas_avatar" size="100px">
          <img :src="getImagem(area.avatar)"/>
        </q-avatar>
      </div>
      <div class="cartao_areas_detalhes">
        <h6>{{ area.area }}</h6>
      </div>
      <div class="cartao_areas_informacoes">
        <div class="stats">
          <div>
            <div class="title">Indicadores</div>
            <q-icon color="white" name="fas fa-chart-line"/>
            <div class="value">{{ area.qtd_indicadores }}</div>
          </div>
          <div>
            <div class="title">Acompanhamentos</div>
            <q-icon name="fa fa-gamepad"/>
            <div class="value">{{ area.qtd_acompanhamentos }}</div>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="cartao_areas_detalhes">
      <h6>{{ area.area }}</h6>
      <p v-if="area.descricao">
        {{ area.descricao }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "CartaoArea",
    props: {
      area: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions('gerencias', ['setArea']),
      verIndicadores(area) {
        this.setArea(area);
        this.$router.push(`area/${area.area}`)
      },
      getImagem: imagem => {
        var img = require.context("assets/avatar/", false, /\.png$/);
        return img("./" + imagem);
      }
    }
  };
</script>


<style lang="scss">
  .cartao_areas {
    width: 450px;
    height: 250px;
    background-color: #fff;
    background: linear-gradient(#373638, #484648);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    border-radius: 12px !important;
    overflow: hidden;
    position: relative;
    margin: 1.5rem;

    &_adicional {
      position: absolute;
      width: 150px;
      height: 100%;
      background: linear-gradient(#2c73d2, #0089ba);
      transition: width 0.4s;
      overflow: hidden;
      z-index: 2;
    }

    &_informacoes {
      font-size: 2rem;
      display: flex;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
      top: auto;
      color: #fff;
    }
  }

  .cartao_areas:hover .cartao_areas_adicional {
    width: 100%;
    border-radius: 0 5px 5px 0 !important;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_usuario {
    width: 150px;
    height: 100%;
    position: relative;
    float: left;
    left: 8px;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_usuario::after {
    content: "";
    display: block;
    position: absolute;
    top: 10% !important;
    right: -2px;
    height: 80%;
    border-left: 2px solid rgba(0, 0, 0, 0.025);
  }

  .cartao_areas_avatar {
    top: 25% !important;
  }

  .cartao_areas .cartao_areas_detalhes {
    width: 300px;
    float: left;
    position: absolute;
    left: 150px;
    height: 100%;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_detalhes {
    width: 300px;
    float: left;
    position: absolute;
    left: 168px;
    height: 100%;
  }

  .cartao_areas .cartao_areas_detalhes h6,
  .cartao_areas .cartao_areas_adicional .cartao_areas_detalhes h6 {
    color: #fff;
    margin-bottom: 0;
    margin-top: 5px !important;
  }

  .cartao_areas .cartao_areas_detalhes p {
    color: #bfbfbf;
    margin-top: 10px;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_usuario .nome,
  .cartao_areas .cartao_areas_adicional .cartao_areas_usuario .cargo {
    margin-bottom: 25px;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.15);
    padding: 0.125rem 0.75rem;
    border-radius: 100px;
    white-space: nowrap;
    position: absolute;
    top: 10%;
    left: 32%;
    -webkit-transform: translate(-50%, -50%);
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_usuario .cargo {
    top: 90%;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_informacoes {
    width: 300px;
    float: left;
    position: absolute;
    left: 150px;
    height: 100%;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_informacoes .stats {
    font-size: 1.5rem;
    display: flex;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    top: auto;
    color: #fff;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_informacoes .stats > div {
    flex: 1;
    text-align: center;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_informacoes .stats .q-icon {
    display: block;
    left: 3.4rem;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .cartao_areas .cartao_areas_adicional .cartao_areas_informacoes .stats .title {
    font-size: 0.65rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .cartao_areas
  .cartao_areas_adicional
  .cartao_areas_informacoes
  .stats
  div .value {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    cursor: pointer;
  }

  .cartao_areas
  .cartao_areas_adicional
  .cartao_areas_informacoes
  .stats
  .div.value.infinity {
    font-size: 2.5rem;
  }
</style>
