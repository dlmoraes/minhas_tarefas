<template>
  <q-expansion-item
    :class="classe ? classe : 'item_menu'"
    :active-class="classe_ativo ? classe_ativo : 'item_menu_ativo'"
    :active="ativo"
    :icon="icone"
    :label="rotulo"
  >
    <div v-if="menus">
      <div v-for="menu in menus" :key="menu.rotulo">
        <q-item v-if="!menu.menus">
          <q-item-section v-if="menu.icone" avatar class="q-ml-md">
            <q-icon :name="menu.icone" size="16px" />
          </q-item-section>
          <q-item-section :class="menu.icone ? '' : 'q-ml-md'">{{ menu.rotulo }}</q-item-section>
        </q-item>
        <q-expansion-item v-else
                          :label="menu.rotulo"
                          :icon="menu.icone"
                          class="submenu q-ml-md"
                          active-class="submenu_ativo"
                          exact-active-class="submenu_ativo">
          <q-item v-for="submenu in menu.menus" :key="submenu.rotulo">
            <q-item-section v-if="submenu.icone" avatar class="q-ml-md">
              <q-icon :name="submenu.icone" size="16px" />
            </q-item-section>
            <q-item-section :class="submenu.icone ? '' : 'q-ml-md'">{{ submenu.rotulo }}</q-item-section>
          </q-item>
        </q-expansion-item>
      </div>
    </div>
  </q-expansion-item>
</template>

<script>
  export default {
    name: "Item",
    props: ['classe', 'classe_ativo', 'ativo', 'icone', 'rotulo', 'menus']
  }
</script>
