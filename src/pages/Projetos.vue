<template>
  <q-page padding>
    <q-toolbar class="q-mb-md">
      <q-toolbar-title>Meus Projetos</q-toolbar-title>
    </q-toolbar>
    <q-card class="cartao_resumos">
      <div class="row justify-between">
        <div class="col-2">
          <img src="~assets/rocket.png" alt="projetos" class="img_projetos" />
        </div>
        <div class="col-2">
          <q-card class="cartao_resumo bg-transparent no-shadow">
            <q-card-section class="text-center">
              <div class="text-subtitle1">Em Andamento</div>
              <div class="text-h3">10</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-2">
          <q-card class="cartao_resumo bg-transparent no-shadow">
            <q-card-section class="text-center">
              <div class="text-subtitle1">Em espera</div>
              <div class="text-h3">2</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-2">
          <q-card class="cartao_resumo bg-positive no-shadow">
            <q-card-section class="text-center">
              <div class="text-subtitle1">Finalizados</div>
              <div class="text-h3">5</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
    <div class="row">
      <div class="col">
        <q-card class="cartao_filtro">
          <q-card-section>
            <q-icon name="img:statics/icons/filter.png" size="36px" class="icone_titulo" />
            <span class="titulo">Filtros:</span>
            <q-btn-dropdown icon="img:statics/icons/timer.png" flat label="Criado Em" no-caps>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Limpar Filtro</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Hoje</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Está semana</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Este Mês</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Este Ano</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown icon="img:statics/icons/priority.png" flat label="Prioridade" no-caps>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Limpar Filtro</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Alta</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Média</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Baixa</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown icon="img:statics/icons/correct.png" flat label="Situação" no-caps>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Limpar Filtro</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Em Andamento</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Finalizada</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Aguardando</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            {{$route.name.toLowerCase()}}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md time">
      <div class="col-12">
        <span class="titulo">Participantes</span>
      </div>
      <div class="row justify-start q-mt-md time">
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/260d105696cad1dffbb8c3d0484abbd3.png" />
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/4ff455e846db64b4ef1e379a7255b618.png" />
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/9c690426929f64edcb5117be1ca3a636.png" />
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/d0637046cfc0bc021458893129fc2a8b.png" />
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/4469e1b0130956bc3d022dad518b1026.png" />
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/24aa74636ad3163ad52506db34f54b2b.png" />
          </q-avatar>
        </div>
        <div class="time_avatar">
          <q-avatar>
            <img src="https://api.adorable.io/avatars/400/c1277c1db86d6f27f34a7e5575746f49.png" />
          </q-avatar>
        </div>
      </div>
    </div>
    <div class="row">
      <CartaoGrade v-for="projeto in projetos" :key="projeto.id" :projeto="projeto" />
    </div>
  </q-page>
</template>

<script>
import CartaoGrade from "components/Projetos/Cartoes/CartaoGrade";

export default {
  name: "Projetos",
  components: {
    CartaoGrade
  },
  data() {
    return {
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
.cartao_resumos {
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
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

  .img_projetos {
    width: 150px;
    margin-top: -3rem;
    margin-left: 50px;
  }
  .cartao_resumo {
    width: 200px;
    height: 100px;
    border-radius: 10px;

    &:first-child {
      margin-left: -30px;
    }

    .text-subtitle2 {
      margin-top: 10px;
    }

    &:last-child {
      border-radius: 0 50px 50px 0;
      margin-left: -50px;
    }
  }
}

.cartao_filtro {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 30px;

  .titulo {
    margin-top: -20px;
    margin-left: 10px;
    margin-right: 20px;
  }

  .icone_titulo.q-icon {
    margin-top: -10px;
  }

  .q-btn-dropdown {
    margin-top: -10px;
  }
}

.time {
  .titulo {
    font-size: 16px;
    font-weight: 500;
  }
  .time_avatar {
    margin-right: 20px;
  }
}

/*.cartao_grade {
  width: 50%;
  height: 200px;
}*/
</style>
