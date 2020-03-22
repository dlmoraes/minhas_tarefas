const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/autenticacao",
        component: () => import("pages/Autenticacao.vue"),
        name: "autenticacao"
      },
      {
        path: "",
        component: () => import("pages/Home.vue"),
        name: "dashboard"
      },
      {
        path: "/tarefas:visao?",
        component: () => import("pages/Tarefas.vue"),
        name: "tarefas"
      },
      {
        path: "/projeto",
        component: () => import("pages/Projetos.vue"),
        name: "projetos"
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
