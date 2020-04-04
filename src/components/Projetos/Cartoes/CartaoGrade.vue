<template>
  <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6">
    <q-card
      :class="'cartao_grade ' + getClassePrioridade() + ' shadow-1 q-ma-sm'"
    >
      <div class="row">
        <q-card-section class="cartao_grade_titulo">
          <span class="ellipsis">{{ `#${projeto.id} ${projeto.titulo}` }}</span>
        </q-card-section>
        <q-card-section class="cartao_grade_corpo">
          <p class="ellipsis">{{ projeto.resumo }}</p>
          <div class="cartao_grade_corpo_detalhes">
            <span>{{ projeto.created_at|formataData }}</span>
          </div>
        </q-card-section>
        <q-card-section class="cartao_grade_participantes absolute-left"
                        :class="mostrarParticipantes ? 'mostrar' : 'ocultar'"
                        @click="mostrarParticipantes = !mostrarParticipantes"
        >
          <q-avatar class="primeiro">
            <img
              src="https://api.adorable.io/avatars/400/24aa74636ad3163ad52506db34f54b2b.png"
            />
          </q-avatar>
          <q-avatar class="segundo">
            <img
              src="https://api.adorable.io/avatars/400/4469e1b0130956bc3d022dad518b1026.png"
            />
          </q-avatar>
          <q-avatar class="terceiro">
            <img
              src="https://api.adorable.io/avatars/400/c1277c1db86d6f27f34a7e5575746f49.png"
            />
          </q-avatar>
        </q-card-section>
        <q-card-section class="cartao_grade_complementos absolute-bottom">
          <div class="row justify-between">
            <span v-if="projeto.data_vencimento">Vence Em: {{ getDiasVencimento() }}</span>
            <span v-else>Sem Vencimento</span>
            <q-badge :label="projeto.prioridade" :color="getClassePrioridadeLabel()"/>
          </div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
  import {date} from "quasar";

  export default {
    name: "CartaoGrade",
    props: ["projeto"],
    data() {
      return {
        options: [
          {
            label: "Bloqueado",
            value: "Bloq"
          },
          {
            label: "Alta Prioridade",
            value: "Alta"
          },
          {
            label: "Média Prioridade",
            value: "Media"
          },
          {
            label: "Baixa Prioridade",
            value: "Baixa"
          }
        ],
        mostrarParticipantes: false
      };
    },
    methods: {
      getClassePrioridade() {
        const classes = {
          Alta: () => "cartao_grade_alta_prioridade",
          Média: () => "cartao_grade_media_prioridade",
          Baixa: () => "cartao_grade_baixa_prioridade",
          default: () => "cartao_grade_baixa_prioridade"
        };
        return (classes[this.projeto.prioridade] || classes["default"])();
      },
      getClassePrioridadeLabel() {
        const classes = {
          Alta: () => "negative",
          Média: () => "warning",
          Baixa: () => "positive",
          default: () => "positive"
        };
        return (classes[this.projeto.prioridade] || classes["default"])();
      },
      getDiasVencimento() {
        if (this.projeto.data_vencimento) {
          return date.getDateDiff(this.projeto.data_vencimento, new Date(), 'days')
        }
        return ''
      }
    },
    filters: {
      formataData(value) {
        return date.formatDate(value, "D MMMM, YYYY");
      }
    }
  };
</script>

<style lang="scss">
  .cartao_grade {
    height: 202px !important;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 10px;
    -webkit-animation: scale-in-ver-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-ver-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    &_titulo {
      cursor: pointer;
      font-weight: bold;
      font-size: 0.9375rem;
      height: 30px;
    }

    &_titulo:hover {
      text-decoration: underline;
      color: #0089ba;
    }

    &_corpo {
      position: absolute;
      margin-top: 50px;
      width: 100%;

      .cartao_grade_corpo_detalhes {
        float: right;
        display: flex;
        flex-direction: column;
        margin-top: -80px;
      }

      .cartao_grade_corpo_detalhes span {
        margin-bottom: 5px;
      }

      .cartao_grade_corpo_detalhes
      span:first-child:not(.dropdown_prioridade_rotulo) {
        color: #999999;
      }
    }

    .cartao_grade_participantes {
      margin-top: 80px;
      float: left;
      cursor: pointer;

      &.mostrar {
        .q-avatar {
          margin-right: 10px !important;

          &:first-child {
            animation: rotate-center 0.6s ease-in-out both;
          }

          &:not(:first-child) {
            animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          }
        }
      }

      &.ocultar {
        perspective: 40px !important;
        perspective-origin: -100% 50% !important;
        transition: all 0.2s ease-in-out;

        .q-avatar {
          margin-right: 5px !important;
          position: absolute;
          font-size: 30px;
          top: 38%;
          left: 40% !important;

          &:not(:first-child) {
            opacity: 0.9;
          }

          &.primeiro {
            transform: translate3d(-50%, -50%, 15px) !important;
            z-index: 4;
          }

          &.segundo {
            transform: translate3d(-30%, -50%, 15px) !important;
            z-index: 3;
          }

          &.terceiro {
            transform: translate3d(-10%, -50%, 15px) !important;
            z-index: 2;
          }
        }
      }
    }

    .dropdown_prioridade_rotulo {
      margin-top: 5px;
      margin-right: 3px;
    }

    &_complementos {
      background: rgba(0, 0, 0, 0.02);
      padding: 0.9375rem 1.25rem;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
    }
  }

  .cartao_grade_media_prioridade {
    border-left: 3px solid $warning;
  }

  .cartao_grade_baixa_prioridade {
    border-left: 3px solid $positive;
  }

  .cartao_grade_alta_prioridade {
    border-left: 3px solid $negative;
  }

  .dropdown_select .q-field__inner .q-field__control {
    min-height: 30px !important;
    height: 30px !important;
  }

  .dropdown_select .q-select__dropdown-icon {
    margin-top: -11px;
    margin-right: -10px !important;
  }

  .dropdown_select .q-field__native {
    font-size: 75%;
    margin-top: -2px !important;
  }

  @media (max-width: 800px) {
    .cartao_grade_corpo_detalhes {
      flex-direction: row;
    }
  }

  /* ----------------------------------------------
     * Generated by Animista on 2020-2-16 11:33:16
     * Licensed under FreeBSD License.
     * See http://animista.net/license for more info.
     * w: http://animista.net, t: @cssanimista
     * ---------------------------------------------- */
  /**
     * ----------------------------------------
     * animation scale-in-ver-center
     * ----------------------------------------
     */
  @-webkit-keyframes scale-in-ver-center {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      opacity: 1;
    }
  }

  @keyframes scale-in-ver-center {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      opacity: 1;
    }
  }

  .rotate-center {
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2020-3-29 13:49:50
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
   * ----------------------------------------
   * animation rotate-center
   * ----------------------------------------
   */
  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .slide-in-left {
    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2020-3-29 13:58:40
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
   * ----------------------------------------
   * animation slide-in-left
   * ----------------------------------------
   */
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  .slide-out-left {
    -webkit-animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2020-3-29 14:45:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
   * ----------------------------------------
   * animation slide-out-left
   * ----------------------------------------
   */
  @-webkit-keyframes slide-out-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
  }

  @keyframes slide-out-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
  }


</style>
