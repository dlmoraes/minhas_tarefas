<template>
  <q-drawer
    :show-if-above="painelDireita"
    v-model="painelDireita"
    side="right"
    content-class="painel_direita"
    :elevated="!mostrarPainel"
    :bordered="mostrarPainel"
    :width="500"
    :breakpoint="800"
    :mini="mostrarPainel"
    :mini-width="30"
  >
    <q-btn
      round
      :class="
        mostrarPainel
          ? 'btn_mostrar_painel_direita shadow-1'
          : 'btn_ocultar_painel_direita shadow-1'
      "
      :icon="mostrarPainel ? 'fas fa-angle-left' : 'fas fa-angle-right'"
      @click="mostrarPainel = !mostrarPainel"
    />
    <div v-if="!mostrarPainel">
      <q-list dense>
        <CabecalhoPainelDireito
          :tarefa="tarefa"
          :ocultar-painel="ocultarPainel"
          :get-tempo-solicitacao="getTempoSolicitacao"
          :get-tempo-vencimento="getTempoVencimento"
        />

        <q-item>
          <q-item-section class="titulo_tarefa col-11">
            {{
            tarefa.titulo
            }}
          </q-item-section>
        </q-item>

        <AreaSolicitante :tarefa="tarefa" :get-tempo-vencimento="getTempoVencimento" />

        <q-separator />

        <CabecalhoItensPainelDireito rotulo="Detalhes" icone="fas fa-align-left" />

        <DetalhesSumario rotulo="Código" :valor="tarefa.id" />
        <DetalhesSumario rotulo="Solicitado em" :valor="tarefa.created_at | dataFormatada" />

        <q-separator />

        <CabecalhoItensPainelDireito rotulo="Evidências" icone="fas fa-paperclip" />

        <Evidencias :evidencias="tarefa.evidencias" :tarefa_id="tarefa.id" />

        <CabecalhoItensPainelDireito rotulo="Comentários" icone="fas fa-comments" />

        <q-separator class="separador_comentario" />

        <template v-if="tarefa.comentarios.length > 0">
          <Comentarios
            v-for="comentario in tarefa.comentarios"
            :key="comentario.id"
            :comentario="comentario"
          />
        </template>

        <AdicionarComentario :tarefa="tarefa" />
      </q-list>
    </div>
  </q-drawer>
</template>

<script>
import { date } from "quasar";
import { mapActions } from "vuex";
import Comentarios from "../Comentarios/Comentarios";
import CabecalhoItensPainelDireito from "./Menu/CabecalhoItensPainelDireito";
import Evidencias from "../Evidencias/Evidencias";
import DetalhesSumario from "./Menu/DetalhesSumario";
import CabecalhoPainelDireito from "./Menu/CabecalhoPainelDireito";
import AreaSolicitante from "./Menu/AreaSolicitante";
import AdicionarComentario from "../Comentarios/Input/AdicionarComentario";

export default {
  name: "PainelDireita",
  props: ["modal_comentario", "tarefa"],
  data() {
    return {
      painelDireita: true,
      mostrarPainel: true,
      comentario: ""
    };
  },
  components: {
    Comentarios,
    CabecalhoItensPainelDireito,
    Evidencias,
    DetalhesSumario,
    CabecalhoPainelDireito,
    AreaSolicitante,
    AdicionarComentario
  },
  filters: {
    dataFormatada(data) {
      return date.formatDate(data, "DD/MM/YYYY");
    }
  },
  methods: {
    ...mapActions("gerenciadortarefa", ["setTarefa"]),
    ocultarPainel() {
      this.setTarefa({});
    },
    getTempoSolicitacao() {
      let diferenca = date.getDateDiff(new Date(), this.tarefa.data_criacao);
      const mapeamento = {
        "-1": () => "Amanhã",
        "0": () => "Hoje",
        "1": () => "Ontem",
        "2": () => "Anteontem",
        padrao: valor => {
          if (valor < 0) {
            return `a ${Math.abs(valor)} dias`;
          }
          return `há ${Math.abs(valor)} dias`;
        }
      };
      return (
        "Solicitado " +
        mapeamento[
          diferenca >= -1 && diferenca <= 2 ? diferenca.toString() : "padrao"
        ](-2)
      );
    },
    getTempoVencimento() {
      let diferenca = date.getDateDiff(new Date(), this.tarefa.data_vencimento);
      const mapeamento = {
        "-1": () => "Amanhã",
        "0": () => "Hoje",
        "1": () => "Ontem",
        "2": () => "Anteontem",
        padrao: valor => {
          if (valor < 0) {
            return `Daqui a ${Math.abs(valor)} dias`;
          }
          return `Daqui há ${Math.abs(valor)} dias`;
        }
      };
      return mapeamento[
        diferenca >= -1 && diferenca <= 2 ? diferenca.toString() : "padrao"
      ](diferenca);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .painel_direita {
  .btn_ocultar_painel_direita {
    background: #258ffc;
    width: 50px;
    height: 50px;
    position: absolute;
    display: block;
    top: 50%;
    margin-left: -30px;
    border: #258ffc solid 1px;
    border-radius: 100%;
    color: white;
    -webkit-animation: heartbeat 1.5s ease-in-out both;
    animation: heartbeat 1.5s ease-in-out both;
    z-index: 600;
  }

  .btn_mostrar_painel_direita {
    background: #258ffc;
    width: 50px;
    height: 50px;
    position: absolute;
    display: block;
    top: 50%;
    margin-left: -20px;
    border: #258ffc solid 1px;
    border-radius: 100%;
    color: white;
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;
    z-index: 600;
  }

  .btn_fechar_paineldireta {
    background: #fff !important;
    color: $grey-8;
    margin-right: 20px;
    margin-left: -20px;

    i {
      font-size: 25px;
    }
  }

  .cor_situacao_tarefa {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-left: 15px;
  }

  .situacao_finalizada_tarefa {
    background: #258ffc;
  }

  .situacao_pendente_tarefa {
    background: $negative;
  }

  .situacao_tarefa {
    .rotulo {
      font-weight: 600;
    }
  }

  .btn_opcoes_tarefa {
    background: #258ffc !important;
    color: #fff;
    margin-right: 20px;
  }

  .titulo_tarefa {
    margin-left: 15px;
    margin-top: 25px;
    font-size: 20px;
    font-weight: 500;
  }

  .usuario_tarefa {
    margin-top: 20px;
    margin-left: 20px;

    span {
      margin-right: -10px;
    }

    span:first-child {
      margin-top: 8px;
    }

    span:last-child {
      font-weight: 600;
    }

    .q-avatar {
      background: #258ffc;
    }

    .valor {
      font-size: 12px !important;
    }

    .valor:last-child {
      margin-left: 30px;
    }
  }

  .q-separator {
    width: 80%;
    margin-left: 50px;
    margin-top: 20px;
  }

  .separador_comentario {
    width: 80%;
    margin-left: 50px;
    margin-top: 5px;
  }

  .detalhes_tarefa_cabecalho {
    margin-top: 10px;

    .fa-align-left {
      font-size: 16px;
    }

    .rotulo {
      font-weight: 600;
      font-size: 16px;
    }
  }

  .sumario_tarefa_detalhes {
    .rotulo {
      margin-left: 18px;
    }

    .valor {
      margin-right: 20px;
    }
  }

  .evidencias_tarefa {
    margin-left: 18px;

    .q-img {
      height: 60px;
      max-width: 100px;
    }

    .q-btn {
      background: #258ffc !important;
      color: #fff;
      padding: 8px;
      margin-right: 15px;
    }
  }

  .campo_comentario {
    .q-field__append {
      font-size: 18px;
    }
  }

  .btn_modal_comentario {
    margin-left: 50%;
    margin-bottom: 20px;
    background: #258ffc !important;
    color: #fff;
    padding: 8px;
  }
}

.heartbeat {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}

/* ----------------------------------------------
   * Generated by Animista on 2020-2-18 9:54:8
   * Licensed under FreeBSD License.
   * See http://animista.net/license for more info.
   * w: http://animista.net, t: @cssanimista
   * ---------------------------------------------- */

/**
     * ----------------------------------------
     * animation heartbeat
     * ----------------------------------------
     */
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>
