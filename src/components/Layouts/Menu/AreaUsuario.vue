<template>
  <div :class="miniPainel ? 'menu_usuario absolute-bottom q-mb-md' : 'menu_usuario absolute-top'">
    <div v-if="!miniPainel">
      <q-expansion-item class="btn_menu_usuario overflow-hidden">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar>
              <img :src="avatar !== '' ? avatar : 'https://cdn.quasar.dev/img/boy-avatar.png'">
            </q-avatar>
          </q-item-section>
          <q-item-section>Diego Moraes</q-item-section>
        </template>
        <q-item class="item_menu" active-class="item_menu_ativo" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="fas fa-id-badge"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Perfil</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="item_menu" active-class="item_menu_ativo" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="fas fa-door-open"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sair</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </div>
    <div v-else>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="avatar">
          </q-avatar>
        </q-item-section>
        <q-item-section>Diego Moraes</q-item-section>
        <q-menu
          :offset="[-85, -45]"
        >
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h7 text-center text-weight-bold q-mb-md">Ações</div>
              <q-btn
                class="q-mb-sm"
                flat
                no-caps
                text-color="grey-9"
                icon="fas fa-id-badge"
                label="Perfil"
                rounded
                size="sm"
                v-close-popup
              />
              <q-btn
                no-caps
                text-color="grey-9"
                flat
                icon="fas fa-door-open"
                label="Sair"
                rounded
                size="sm"
                v-close-popup
              />
            </div>

            <q-separator vertical inset class="q-mx-lg"/>

            <div class="column items-center">
              <q-avatar size="72px">
                <img :src="avatar !== '' ? avatar : 'https://cdn.quasar.dev/img/boy-avatar.png'">
              </q-avatar>
              <div class="text-h7 text-weight-bold q-mt-md q-mb-xs">Diego Moraes</div>
            </div>
          </div>
        </q-menu>
      </q-item>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "AreaUsuario",
    props: ['miniPainel'],
    computed: {
      ...mapState('autenticacao', ['avatar']),
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ .menu_usuario {
    margin-top: 35%;
    /*margin-bottom: 50px !important;*/
    width: 85%;
    border-radius: 0 32px 32px 0;
    margin-left: 20px;

    .btn_menu_usuario {
      background: #35acfa;
      border-radius: 32px;
      padding: 15px;

      .item_menu,
      .q-focus-helper {
        border-radius: 32px !important;
      }
    }
  }
</style>
