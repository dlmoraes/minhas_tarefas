<template>
  <q-card :class="'cartao_resumo no-shadow ' + (cor === undefined ? 'bg-transparent' : cor)">
    <q-card-section class="text-center">
      <div class="text-subtitle1">{{ descricao }}</div>
      <div class="text-h3">{{ valor }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
    name: "CartaoResumo",
    props: ["descricao", "valor", "cor"]
  };
</script>

<style lang="scss" scoped>
  .cartao_resumo {
    width: 200px;
    height: 100px;
    border-radius: 10px;

    &:first-child {
      margin-left: 50px;
    }

    .text-subtitle2 {
      margin-top: 10px;
    }

  }

  @media (max-width: 950px) {
    .cartao_resumo {
      width: 180px;

      &:first-child {
        margin-left: -100px;
      }

      .text-subtitle1 {
        font-size: 14px !important;
      }

      .text-h3 {
        font-size: 28px !important;
      }
    }
  }

  @media (max-width: 900px) {
    .cartao_resumo {
      width: 160px;

      .text-subtitle1 {
        font-size: 14px !important;
      }

      .text-h3 {
        font-size: 28px !important;
      }
    }
  }

  @media (max-width: 650px) {
    .cartao_resumo {
      width: 150px;

      &:first-of-type {
        margin-left: 1px !important;
      }

      .text-subtitle1 {
        font-size: 12px !important;
      }

      .text-h3 {
        font-size: 24px !important;
      }
    }
  }

</style>
