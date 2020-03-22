<template>
  <q-item
    class="item_menu"
    :active-class="rotaAtual() ? 'item_menu_ativo' : ''"
    :active="rotaAtual()"
    clickable
    tag="a"
    :to="rota ? rota : ''"
  >
    <q-item-section avatar>
      <q-icon v-if="!icone.includes('img:')" :name="icone" />
      <q-icon v-else :name="icone" class="custom_icone_menu" />
    </q-item-section>
    <q-menu
      transition-show="flip-right"
      transition-hide="flip-left"
      v-if="menus"
      content-class="menu_item"
      :offset="[-85, -45]"
    >
      <q-list style="min-width: 100px">
        <q-item-label header class="text-center">{{ rotulo }}</q-item-label>
        <div v-for="menu in menus" :key="menu.rotulo">
          <q-separator v-if="menu.menus" />
          <q-item
            :active="eAtivo(menu)"
            clickable
            class="submenu"
            active-class="submenu_ativo"
            exact
            v-if="!menu.menus"
            :to="menu.rota ? menu.rota : ''"
          >
            <q-item-section v-if="menu.icone" avatar class="q-ml-md">
              <q-icon :name="menu.icone" size="16px" />
            </q-item-section>
            <q-item-section>{{ menu.rotulo }}</q-item-section>
            <q-item-section avatar side v-if="menu.menus">
              <q-icon name="keyboard_arrow_right" size="18px" />
            </q-item-section>
          </q-item>
          <Item classe="submenu" classe_ativo="submenu_ativo" v-bind="menu" v-else />
        </div>
      </q-list>
    </q-menu>
    <q-tooltip content-class="bg-blue" anchor="center right" self="center left" :offset="[10, 10]">
      <strong>{{ rotulo }}</strong>
    </q-tooltip>
  </q-item>
</template>

<script>
import Item from "./Item";

export default {
  name: "ItemMini",
  props: [
    "classe",
    "classe_ativo",
    "ativo",
    "icone",
    "rotulo",
    "menus",
    "rota"
  ],
  components: {
    Item
  },
  methods: {
    eAtivo(menu) {
      if (this.$route.params.visao !== undefined) {
        return (
          this.$route.params.visao.toLowerCase() === menu.rotulo.toLowerCase()
        );
      }
    },
    rotaAtual() {
      console.log(this.$route.name.toLowerCase());
      console.log(this.rotulo.toLowerCase());
      console.log(this.$route.name.toLowerCase() === this.rotulo.toLowerCase());
      return this.$route.name.toLowerCase() === this.rotulo.toLowerCase();
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.q-expansion-item.submenu {
  i {
    font-size: 16px !important;
    left: 15px;
  }

  .q-item__label {
    margin-left: 15px;
  }

  .q-expansion-item__toggle-icon {
    margin-left: 10px;

    &.q-icon {
      left: 0 !important;
    }
  }
}

/deep/.q-expansion-item--expanded.submenu {
  .q-expansion-item__container
    .q-item.q-item-type.row.no-wrap.q-item--clickable.q-link.cursor-pointer.q-focusable.q-hoverable {
    background: rgba(0, 0, 0, 0.1) !important;
  }
}

.submenu_ativo {
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
  font-weight: 600;
}
</style>
