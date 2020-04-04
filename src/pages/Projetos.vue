<template>
  <q-page padding>
    <q-toolbar class="q-mb-md">
      <q-toolbar-title>Meus Projetos
        <q-icon name="img:statics/icons/rocket.png" size="36px"/>
      </q-toolbar-title>

      <q-btn
        flat
        dense
        class="btn_add_tarefa"
        icon-right="fas fa-plus-circle"
        no-caps
        rounded
        @click="mostrarAdicionarProjeto = !mostrarAdicionarProjeto"
      >
        <q-tooltip>
          Novo Projeto
        </q-tooltip>
      </q-btn>
    </q-toolbar>
    <div class="row justify-center items-center">
      <CartaoResumoIndividual descricao="Andamento" :valor="10" cor="bg-primary" class="col-md-2 q-ma-sm"
                              icone="img:statics/icons/start-button.png"/>
      <CartaoResumoIndividual descricao="Em Espera" :valor="2" cor="bg-negative" class="col-md-2 q-ma-sm"
                              icone="img:statics/icons/stopwatch.png"/>
      <CartaoResumoIndividual descricao="Finalizado" :valor="5" cor="bg-positive" class="col-md-2 q-ma-sm"
                              icone="img:statics/icons/checklist_1.png"/>
    </div>
    <div class="row q-my-md">
      <CartaoFiltros/>
    </div>
    <q-separator/>
    <AreaParticipantes :participantes="participantes" />
    <q-separator spaced/>
    <div class="row">
<!--      <CartaoGrade v-for="projeto in projetos" :key="projeto.id" :projeto="projeto"/>-->
      <CartaoGrade v-for="projeto in projetosOrdenados" :key="projeto.id" :projeto="projeto"/>
    </div>
    <q-dialog  v-model="mostrarAdicionarProjeto">
      <AdicionarProjeto @close="mostrarAdicionarProjeto = false" />
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import CartaoGrade from "components/Projetos/Cartoes/CartaoGrade";
  import CartaoResumoIndividual from "../components/Projetos/Cartoes/CartaoResumoIndividual";
  import CartaoFiltros from "../components/Projetos/Cartoes/CartaoFiltros";
  import AreaParticipantes from "../components/Projetos/Cartoes/AreaParticipantes";
  import AdicionarProjeto from "../components/Projetos/Modal/AdicionarProjeto";
  import {date} from "quasar";


  export default {
    name: "Projetos",
    components: {
      CartaoGrade,
      CartaoResumoIndividual,
      CartaoFiltros,
      AreaParticipantes,
      AdicionarProjeto
    },
    data() {
      return {
        mostrarAdicionarProjeto: false,
        participantes: [
          {avatar_url: 'https://api.adorable.io/avatars/400/260d105696cad1dffbb8c3d0484abbd3.png'},
          {avatar_url: 'https://api.adorable.io/avatars/400/4ff455e846db64b4ef1e379a7255b618.png'},
          {avatar_url: 'https://api.adorable.io/avatars/400/9c690426929f64edcb5117be1ca3a636.png'},
          {avatar_url: 'https://api.adorable.io/avatars/400/d0637046cfc0bc021458893129fc2a8b.png'},
          {avatar_url: 'https://api.adorable.io/avatars/400/4469e1b0130956bc3d022dad518b1026.png'},
          {avatar_url: 'https://api.adorable.io/avatars/400/24aa74636ad3163ad52506db34f54b2b.png'},
          {avatar_url: 'https://api.adorable.io/avatars/400/c1277c1db86d6f27f34a7e5575746f49.png'}
        ],
        projetos: [
          {
            id: 1,
            titulo: "#1. Criar pagina de projetos",
            created_at: "21 Março, 2020",
            prioridade: "Alta",
            venceEm: "6 dias"
          },
          {
            id: 2,
            titulo: "#2. Criar Cartões de Resumo",
            created_at: "21 Março, 2020",
            prioridade: "Média",
            venceEm: "6 dias"
          },
          {
            id: 3,
            titulo: "#3. Criar Cartão e Botões de filtros",
            created_at: "21 Março, 2020",
            prioridade: "Baixa",
            venceEm: "6 dias"
          },
          {
            id: 4,
            titulo: "#4. Criar Cartões de Grade",
            created_at: "21 Março, 2020",
            prioridade: "Alta",
            venceEm: "6 dias"
          }
        ]
      };
    },
    methods: {
      ...mapActions('projeto', ['getProjetos']),
      async init() {
        await this.getProjetos();
        console.log(this.projetosOrdenados)
      },
    },
    computed: {
      ...mapGetters('projeto', ['projetosOrdenados'])
    },
    created() {
      this.init();
    }
  };
</script>

<style lang="scss" scoped>
  /deep/ .btn_add_tarefa {
    background: #017eff;
    color: #fff;

    i {
      font-size: 18px !important;
      background: #3b9cff;
      padding: 20px;
      border-radius: 50%;
    }
  }
</style>
