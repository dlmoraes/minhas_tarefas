<template>
  <q-drawer
    content-class="painel_esquerda"
    show-if-above
    v-model="painelEsquerda"
    side="left"
    :breakpoint="800"
    :mini="miniPainel"
    :mini-width="80"
  >
    <div class="menu_logo absolute-top">
      <q-avatar icon="fas fa-chart-line" />
      <span>Meu Indicador</span>
    </div>
    <q-scroll-area class="menu_scroll">
      <q-list padding>
        <q-item-label header class="text-grey-2">Navegação</q-item-label>
        <template v-if="!miniPainel">
          <Item v-for="menu in menus" :key="menu.rotulo" v-bind="menu" />
        </template>
        <template v-if="miniPainel">
          <ItemMini v-for="menu in menus" :key="menu.rotulo" v-bind="menu" />
        </template>
      </q-list>
    </q-scroll-area>
    <AreaUsuario :mini-painel="miniPainel" />
  </q-drawer>
</template>

<script>
import Item from "./Menu/Item";
import ItemMini from "./Menu/ItemMini";
import AreaUsuario from "./Menu/AreaUsuario";
import menus from "../../mixins/menus";

export default {
  name: "PainelEsquerda",
  props: ["painelEsquerda", "miniPainel"],
  components: {
    Item,
    ItemMini,
    AreaUsuario
  },
  data() {
    return {
      menus
    };
  }
};
</script>

<style lang="scss" scoped>
/deep/ .q-drawer--standard {
  .painel_esquerda {
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

    .item_menu {
      margin-left: 20px;
    }

    .item_menu:hover {
      background: #138bfe;
      border-radius: 32px;
    }

    .q-expansion-item__toggle-icon {
      color: #fff;
    }

    .item_menu,
    .q-expansion-item__container,
    .q-focus-helper {
      border-radius: 32px !important;
    }

    .item_menu_ativo,
    .item_menu.q-expansion-item--expanded {
      background: #1082ed;
      color: #fff;
      border-radius: 32px;
    }

    .menu_logo {
      margin-left: 12%;
      font-size: 20px;
      margin-top: 30px;
    }
  }

  .menu_scroll {
    height: calc(100% - 200px);
    margin-top: 200px;
    border-right: 1px solid transparent;
  }

  .submenu {
    i:first-child {
      font-size: 16px !important;
    }
  }
}

/deep/ .q-drawer--mini {
  .painel_esquerda {
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

  .menu_logo {
    margin-top: 15px;

    .q-avatar {
      left: 16px;
    }

    i {
      font-size: 30px;
    }

    span {
      display: none;
    }
  }

  .item_menu {
    color: rgba(255, 255, 255, 0.5);
    margin-top: 60px;

    .custom_icone_menu {
      filter: opacity(60%);
    }

    &:hover {
      background: #138bfe;
      border-radius: 32px;
      width: 100%;

      .custom_icone_menu {
        filter: opacity(100%);
      }
    }
  }

  .item_menu_ativo {
    margin-top: 20px;
    margin-bottom: 20px;
    border-left: #fff solid 3px;
    color: #fff;

    .custom_icone_menu {
      filter: opacity(100%);
    }

    &:hover {
      background: #138bfe;
      border-left: none;
    }
  }

  .menu_scroll {
    height: calc(100% - 150px);
    margin-top: 100px;
    border-right: 1px solid transparent;
  }
}

@keyframes rect-anim-left {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(-60px);
  }
}

@keyframes rect-anim-right {
  0% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(60px);
  }
}
</style>
