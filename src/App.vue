<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("configuracao", ["getSettings", "saveSettings"])
  },
  mounted() {
    //this.saveSettings();
    //this.getSettings();
  }
};
</script>
<style lang="scss">
* {
  font-family: "Montserrat", sans-serif;
}

body {
  font-size: 0.8125rem !important;
  background: #fff;
}
</style>
