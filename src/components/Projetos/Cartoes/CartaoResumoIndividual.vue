<template>
  <q-card
    class="cartao_resumoi"
    :class="cor"
  >
    <q-card-section class="text-center text-white">
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <q-icon :name="icone" :size="tamanhoIcone ? tamanhoIcone : '64px'" class="q-mr-md"/>
        </div>
        <div class="col">
          <div class="text-subtitle1">{{ descricao}}</div>
          <div class="text-h3">{{ valor }}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
    name: "CartaoResumoIndividual",
    props: ["descricao", "valor", "cor", "icone", 'tamanhoIcone']
  }
</script>

<style lang="scss">
  .cartao_resumoi {
    height: 100px;
    border-radius: 20px;

  }
</style>
