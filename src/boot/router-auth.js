import { LocalStorage } from "quasar";

export default ({ store, router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem("loggedIn");
    let user = LocalStorage.getItem("user");
    if (!user && to.path !== "/autenticacao") {
      next("/autenticacao");
    } else if (!loggedIn && to.path !== "/autenticacao") {
      next("/autenticacao");
    } else {
      store.dispatch("autenticacao/setAvatar", user);
      next();
    }
  });
};
