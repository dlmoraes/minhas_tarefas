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
  },
  created() {
    this.$q.dark.set(true)
  }
};
</script>
<style lang="scss">
* {
  font-family: "Open Sans", sans-serif;
  /*font-family: "Montserrat", sans-serif;*/
}

body {
  font-size: 0.8125rem !important;
}

body.body--dark {
  color: #fff;
  background: $dark;
}
</style>
