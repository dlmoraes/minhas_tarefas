<template>
  <q-card class="cartao">
    <img class="cartao_imagem" :src="getImagem(gerencia.imagem)" :alt="gerencia.titulo" />

    <svg class="cartao_svg" viewBox="0 0 800 500">
      <path
        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
        stroke="transparent"
        fill="#333"
      />
      <path
        class="cartao_linha"
        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
        stroke="pink"
        stroke-width="5"
        fill="transparent"
      />
    </svg>
    <q-card-section class="cartao_container">
      <div class="cartao_titulo">{{gerencia.titulo}}</div>
    </q-card-section>
    <q-card-section>
      <div class="cartao_corpo">{{gerencia.conteudo}}</div>
    </q-card-section>
    <q-card-actions align="center">
        <q-btn
          flat
          round
          color="white"
          icon="insert_chart_outlined"
          @click="setGerencia(gerencia)"
          :to="`gerencia/${gerencia.titulo}`"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    gerencia: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('gerencias', ['setGerencia']),
    getImagem: imagem => {
      var img = require.context("assets/", false, /\.jpg$/);
      return img("./" + imagem);
    }
  }
};
</script>

<style lang="scss">
.cartao {
  width: 100%;
  height: 100%;
  min-height: 300px;
  max-height: 400px;
  max-width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
  background: #333;
  margin: 5px;

  &_imagem_container {
    height: 300px;
    width: 300px;
    margin: -2rem -2rem 1rem -2rem;
  }

  &_imagem {
    width: 300px;
    height: 200px;
    opacity: 0;
    animation: ImageFadeIn 0.8s 1.4s forwards;
  }

  &_titulo {
    color: white;
    margin-top: 0;
    margin-bottom: -25px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.005em;
  }

  &_linha {
    opacity: 0;
    animation: LineFadeIn 0.8s 0.8s forwards ease-in;
  }

  &_corpo {
    margin-top: -0.8rem;
    opacity: 0;
    animation: ContentFadeIn 0.8s 1.6s forwards;
    color: #efefef;
  }

  &_svg {
    position: absolute;
    left: 0;
    top: 80px;
  }

  &_container {
    opacity: 0;
    animation: ContentFadeIn 0.8s 1.6s forwards;
  }
}

.cartao:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25),
    -5px -5px 10px 5px rgba(0, 0, 0, 0.22);
}

@keyframes LineFadeIn {
  0% {
    opacity: 0;
    d: path(
      "M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 "
    );
    stroke: #fff;
  }
  50% {
    opacity: 1;
    d: path(
      "M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300"
    );
    stroke: $primary;
  }
  100% {
    opacity: 1;
    d: path(
      "M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400"
    );
    stroke: $primary;
  }
}

@keyframes ContentFadeIn {
  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes ImageFadeIn {
  0% {
    transform: translate(-0.5rem, -0.5rem) scale(1.05);
    opacity: 0;
    filter: blur(2px);
  }
  50% {
    opacity: 1;
    filter: blur(2px);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
    filter: blur(0);
  }
}
</style>
