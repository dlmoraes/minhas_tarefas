import { date } from "quasar";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      atribuidoresOptions: [],
      naoAtribuir: true,
      finalizadoHoje: false,
      tarefaForm: {
        titulo: "",
        data_vencimento: new Date().toLocaleDateString("pt-br"),
        atribuidor: "",
        data_fim: ""
      }
    };
  },
  computed: {
    ...mapState("gerenciadortarefa", ["atribuidores"])
  },
  methods: {
    ...mapActions("gerenciadortarefa", ["getAtribuidores"]),
    async setOptions() {
      if (this.atribuidoresOptions.length === 0) {
        await this.getAtribuidores();
        this.atribuidoresOptions = this.atribuidores;
      }
    },
    submitForm() {
      this.$refs.titulo.validate();
      this.$refs.dataVencimento.validate();

      if (!this.$refs.titulo.hasError || !this.$refs.dataVencimento.hasError) {
        let tarefa = {
          titulo: this.tarefaForm.titulo,
          data_vencimento: this.tarefaForm.data_vencimento
            .split("/")
            .reverse()
            .join("/"),
          data_fim: ""
        };

        if (!this.naoAtribuir) {
          this.$refs.atribuidor.validate();
          if (!this.$refs.atribuidor.hasError) {
            tarefa.atribuido_por_id = this.tarefaForm.atribuidor;
          }
        }

        if (
          this.tarefaForm.data_fim !== "" &&
          this.tarefaForm.data_fim !== undefined
        ) {
          tarefa.data_fim = this.tarefaForm.data_fim
            .split("/")
            .reverse()
            .join("/");
        }

        this.submitTarefa(tarefa);
      }
    },
    setFinalizadoHoje() {
      if (this.finalizadoHoje) {
        this.tarefaForm.data_fim = new Date().toLocaleDateString("pt-br");
      } else {
        this.tarefaForm.data_fim = "";
      }
    }
  }
};
