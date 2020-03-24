<template>
  <q-page padding>
    <q-toolbar class="q-mb-md">
      <q-toolbar-title>Meus Projetos <q-icon name="img:statics/icons/rocket.png" size="36px"/></q-toolbar-title>
    </q-toolbar>
    <div class="row justify-center items-center">
      <CartaoResumoIndividual descricao="Andamento" :valor="10" cor="bg-primary" class="col-md-2 q-ma-sm"
                              icone="img:statics/icons/start-button.png"/>
      <CartaoResumoIndividual descricao="Em Espera" :valor="2" cor="bg-negative" class="col-md-2 q-ma-sm"
                              icone="img:statics/icons/stopwatch.png"/>
      <CartaoResumoIndividual descricao="Finalizado" :valor="5" cor="bg-positive" class="col-md-2 q-ma-sm"
                              icone="img:statics/icons/checklist_1.png"/>
    </div>
    <div class="row q-mb-md">
      <CartaoFiltros />
    </div>
    <div class="row q-mb-md time">
      <div class="col-12">
        <span class="titulo">Participantes</span>
      </div>
      <div class="row justify-start q-mt-md time">
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/260d105696cad1dffbb8c3d0484abbd3.png"/>
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/4ff455e846db64b4ef1e379a7255b618.png"/>
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/9c690426929f64edcb5117be1ca3a636.png"/>
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/d0637046cfc0bc021458893129fc2a8b.png"/>
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/4469e1b0130956bc3d022dad518b1026.png"/>
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/24aa74636ad3163ad52506db34f54b2b.png"/>
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/c1277c1db86d6f27f34a7e5575746f49.png"/>
          </q-avatar>
        </div>
      </div>
    </div>
    <div class="row">
      <CartaoGrade v-for="projeto in projetos" :key="projeto.id" :projeto="projeto"/>
    </div>
  </q-page>
</template>

<script>
  import CartaoGrade from "components/Projetos/Cartoes/CartaoGrade";
  import CartaoResumoIndividual from "../components/Projetos/Cartoes/CartaoResumoIndividual";
  import CartaoFiltros from "../components/Projetos/Cartoes/CartaoFiltros";


  export default {
    name: "Projetos",
    components: {
      CartaoGrade,
      CartaoResumoIndividual,
      CartaoFiltros
    },
    data() {
      return {
        procurar: "",
        projetos: [
          {
            id: 1,
            titulo: "#1. Criar pagina de projetos",
            criadoEm: "21 Março, 2020",
            prioridade: "Alta",
            venceEm: "6 dias"
          },
          {
            id: 2,
            titulo: "#2. Criar Cartões de Resumo",
            criadoEm: "21 Março, 2020",
            prioridade: "Média",
            venceEm: "6 dias"
          },
          {
            id: 3,
            titulo: "#3. Criar Cartão e Botões de filtros",
            criadoEm: "21 Março, 2020",
            prioridade: "Baixa",
            venceEm: "6 dias"
          },
          {
            id: 4,
            titulo: "#4. Criar Cartões de Grade",
            criadoEm: "21 Março, 2020",
            prioridade: "Alta",
            venceEm: "6 dias"
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  .time {
    .titulo {
      font-size: 16px;
      font-weight: 500;
    }

    .time_avatar {
      margin-right: 20px;
    }
  }
</style>
