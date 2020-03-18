<template>
  <q-toolbar class="cabecalho_pagina bg-white" inset>
    <div class="cabecalho_pagina_container">
      <div class="titulo_pagina">
        <q-btn round flat icon="fas fa-arrow-circle-left" size="12px" color="black" to=""/>
        <span class="text-h6 text-weight-bold">{{ rotaAtual.titulo }}</span>
        <span v-if="rotaAtual.subtitulo" class="text-h6 text-weight-regular"> - {{ rotaAtual.subtitulo }}</span>
      </div>
    </div>
    <div class="linha_breadcrumb absolute-bottom-left full-width">
      <q-breadcrumbs active-color="black" align="left">
        <q-breadcrumbs-el label="Home" icon="home" to="/"/>
        <q-breadcrumbs-el v-for="breadcrumb in breadcrumbs"
                          :key="breadcrumb.titulo"
                          :label="breadcrumb.titulo"
                          :icon="breadcrumb.icone"
        />
      </q-breadcrumbs>
    </div>
  </q-toolbar>
</template>

<script>
  export default {
    name: "Breadcrumbs",
    data() {
      return {
        breadcrumbs: [],
        rotaAtual: {}
      };
    },
    mounted() {
      this.atualizarBreadCrumb();
      this.rotaAtual = this.breadcrumbs[this.breadcrumbs.length - 1];
    },
    watch: {
      $route() {
        this.atualizarBreadCrumb();
        this.rotaAtual = this.breadcrumbs[this.breadcrumbs.length - 1];
      }
    },
    methods: {
      atualizarBreadCrumb() {
        this.breadcrumbs = this.$route.meta.breadcrumb;
      }
    }
  }
</script>

<style lang="scss">
  .cabecalho_pagina {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    height: 134px;

    &_container {
      position: relative;
      padding: 0 1.25rem;
      margin-top: -2rem;
    }

    .titulo_pagina .q-btn {
      margin-left: -15px;
      margin-right: 10px;
      margin-top: -3px;
    }

    .linha_breadcrumb {
      background-color: #fafafa;
      border-color: #ddd !important;
      color: #333;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
    }

    .q-breadcrumbs {
      font-size: .8125rem;

      .q-breadcrumbs--last {
        color: #999;
      }
    }
  }

  .q-toolbar.cabecalho_pagina {
    position: relative;
    padding: 0 12px;
    min-height: 50px;
    width: 100%;
  }

  .container main {
    overflow: hidden;
  }
</style>
