<template>
  <q-card style="min-width: 600px">
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="text-h6">Editar Tarefa</div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center q-mb-xs q-mx-md">
          <q-input
            outlined
            v-model="tarefaForm.titulo"
            label="Título"
            class="col"
            :rules="[val => !!val || 'Campo obrigatório']"
            ref="titulo"
          />
        </div>
        <div class="row justify-center q-mb-xs q-mx-md">
          <q-input
            outlined
            v-model="tarefaForm.data_vencimento"
            label="Vencimento Para"
            :rules="[val => !!val || 'Campo obrigatório']"
            class="col"
            @keypress="() => $refs.dataProxy.show()"
            ref="dataVencimento"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="dataProxy">
                  <q-date
                    v-model="tarefaForm.data_vencimento"
                    mask="DD/MM/YYYY"
                    @input="$emit('update:data', $event)"
                    @click="() => $refs.dataProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row justify-center q-mb-xs q-mx-md">
          <q-input
            outlined
            v-model="tarefaForm.data_fim"
            label="Finalizado Em"
            class="col"
            @keypress="() => $refs.dataFimProxy.show()"
            ref="dataFim"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="dataFimProxy">
                  <q-date
                    v-model="tarefaForm.data_fim"
                    mask="DD/MM/YYYY"
                    @input="$emit('update:data', $event)"
                    @click="() => $refs.dataFimProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div class="q-pa-md">
            <div class="q-gutter-sm">
              <q-checkbox
                v-model="finalizadoHoje"
                label="Finalizado Hoje?"
                @input="setFinalizadoHoje()"
              />
            </div>
          </div>
        </div>
        <div class="row justify-center q-mx-md">
          <q-select
            :disable="naoAtribuir"
            outlined
            v-model="tarefaForm.atribuidor"
            :options="atribuidoresOptions"
            label="Atribuir para"
            option-label="username"
            option-value="atribuido_por_id"
            map-options
            emit-value
            class="col"
            ref="atribuidor"
            :rules="[val => !!val || 'Campo obrigatório']"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="scope.opt.avatar_path" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html="scope.opt.username" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <div class="q-pa-md">
            <div class="q-gutter-sm">
              <q-checkbox
                v-model="naoAtribuir"
                label="Não Atribuir"
                @input="(d) => d ? setOptions() : ''"
              />
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" no-caps v-close-popup />
        <q-btn
          color="blue"
          rounded
          label="Editar"
          no-caps
          type="submit"
          v-close-popup
          :disable="tarefaForm.titulo === '' || tarefaForm.data_vencimento === ''"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { date } from "quasar";
import { mapActions, mapState } from "vuex";
import mixinAdicionarEditarTarefa from "src/mixins/adicionar_editar_tarefa.js";

export default {
  name: "EditarTarefa",
  props: ["tarefa"],
  mixins: [mixinAdicionarEditarTarefa],
  methods: {
    ...mapActions("gerenciadortarefa", ["atualizarTarefa"]),
    setTarefa() {
      this.tarefaForm.titulo = this.tarefa.titulo;
      this.tarefaForm.data_vencimento = date.formatDate(
        this.tarefa.data_vencimento,
        "DD/MM/YYYY"
      );
      this.tarefaForm.data_fim = date.formatDate(
        this.tarefa.data_fim,
        "DD/MM/YYYY"
      );
      if (this.tarefa.user_id !== this.tarefa.atribuidor.id) {
        this.tarefaForm.atribuidor = this.tarefa.atribuidor.id;
        this.naoAtribuir = !this.tarefa.atribuidor.id;
      }
    },
    submitTarefa(tarefa) {
      let payload = {
        id: this.tarefa.id,
        updates: tarefa
      };
      this.atualizarTarefa(payload);
    }
  },
  async created() {
    this.setOptions();
    this.setTarefa();
  }
};
</script>
