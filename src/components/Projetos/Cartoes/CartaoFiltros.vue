<template>
  <q-card class="cartao_filtro no-shadow">
    <q-markup-table class="tb_filtros" flat :v-ripple="false">
      <tbody>
      <tr>
        <td>
          <q-icon name="img:statics/icons/filter.png" size="36px" class="icone_titulo"/>
          <span class="titulo q-ml-md">Filtros:</span>
          <q-btn-dropdown class="q-ml-md" icon="img:statics/icons/timer.png" flat label="Criado Em" no-caps>
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Limpar Filtro</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator/>

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
          <q-btn-dropdown class="q-ml-md" icon="img:statics/icons/priority.png" flat label="Prioridade" no-caps>
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Limpar Filtro</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator/>
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
          <q-btn-dropdown class="q-ml-md" icon="img:statics/icons/correct.png" flat label="Situação" no-caps>
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Limpar Filtro</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator/>
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
        </td>
        <td>
          <q-input class="q-ml-md" outlined  v-model="procurar" dense label="Pesquisar">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </td>
      </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script>
  export default {
    name: "CartaoFiltros",
    data() {
      return {
        procurar: ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cartao_filtro {
    width: 100%;
    height: 50px;

    .filtros {
      margin-top: -10px;
    }

    .tb_filtros {
      .q-table tbody td:before {
        background: transparent;
      }
    }
  }
</style>
