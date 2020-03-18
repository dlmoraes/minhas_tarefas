<template>
  <q-page padding>
    <div class="row justify-start">
      <!--      <q-card class="cartao_grafico full-width">-->
      <!--        <q-card-section>-->
      <!--          <q-toggle-->
      <!--            :disable="indicador.acumulado === 'Fixo' || Object.keys(indicador).length <= 0"-->
      <!--            v-model="acumulado"-->
      <!--            icon="show_chart"-->
      <!--            label="Acumulado"-->
      <!--            @input="alterarVisaoGrafico"-->
      <!--          />-->
      <!--          <q-toggle-->
      <!--            :disable="Object.keys(indicador).length <= 0"-->
      <!--            v-model="maximo"-->
      <!--            icon="show_chart"-->
      <!--            label="Máximo"-->
      <!--            @input="alterarVisaoGrafico"-->
      <!--          />-->
      <!--          <q-toggle-->
      <!--            :disable="Object.keys(indicador).length <= 0"-->
      <!--            v-model="media"-->
      <!--            icon="show_chart"-->
      <!--            label="Média"-->
      <!--            @input="alterarVisaoGrafico"-->
      <!--          />-->
      <!--          <q-toggle-->
      <!--            :disable="Object.keys(indicador).length <= 0"-->
      <!--            v-model="minimo"-->
      <!--            icon="show_chart"-->
      <!--            label="Mínimo"-->
      <!--            @input="alterarVisaoGrafico"-->
      <!--          />-->
      <!--        </q-card-section>-->
      <!--        <q-card-section class="echarts">-->
      <!--          <IEcharts-->
      <!--            :option="option"-->
      <!--          />-->
      <!--        </q-card-section>-->
      <!--      </q-card>-->
      <!--      <q-card class="cartao_indicadores col-5 q-mr-sm">-->
      <!--        <q-markup-table class="dt_indicadores">-->
      <!--          <thead>-->
      <!--          <tr>-->
      <!--            <th class="text-left">Indicador</th>-->
      <!--            <th class="text-left">Tipo</th>-->
      <!--            <th class="text-left">Tipo de Acumulado</th>-->
      <!--            <th class="text-left">Fórmula</th>-->
      <!--          </tr>-->
      <!--          </thead>-->
      <!--          <tbody>-->
      <!--          <tr v-for="indicador in indicadores" :key="indicador.key" @click="setIndicador(indicador)">-->
      <!--            <td>{{indicador.nome}}</td>-->
      <!--            <td>{{indicador.tipo}}</td>-->
      <!--            <td>{{indicador.acumulado}}</td>-->
      <!--            <td>{{indicador.formula}}</td>-->
      <!--          </tr>-->
      <!--          </tbody>-->
      <!--        </q-markup-table>-->
      <!--      </q-card>-->
      <!--      <q-card class="col-6 cartao_grafico_anual transparent no-shadow" style="height: 300px">-->
      <!--        <IEcharts-->
      <!--          :option="optionPie"-->
      <!--        />-->
      <!--      </q-card>-->
      <q-card class="col-12 cartao_grafico_mapa transparent no-shadow" style="height: 500px">
        <IEcharts
          :option="optionMap"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
  import {mapGetters} from 'vuex';
  import IEcharts from 'vue-echarts-v3/src/full.js';
  import echarts_layout from "../mixins/echarts_layout";
  import geojson from '../statics/geojson/Para';


  export default {
    name: "Area",
    components: {
      IEcharts
    },
    props: {},
    data: () => ({
      indicador: {},
      acumulado: false,
      media: false,
      maximo: false,
      minimo: false,
      option: {},
      optionPie: {

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: 'Anual',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '2016'},
              {value: 310, name: '2017'},
              {value: 274, name: '2018'},
              {value: 235, name: '2020'},
              {value: 400, name: '2019'}
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: '#000'
            },
            labelLine: {
              lineStyle: {
                color: '#000'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#145A86',
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      },
      optionMap: {
        // title: {
        //   text: 'USA Population Estimates (2012)',
        //   subtext: 'Data from www.census.gov',
        //   sublink: 'http://www.census.gov/popest/data/datasets.html',
        //   left: 'right'
        // },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return params.seriesName + '<br/>' + params.name + ': ' + value;
          }
        },
        visualMap: {
          left: 'right',
          min: 500000,
          max: 38000000,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text: ['High', 'Low'],           // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'Pará',
            type: 'map',
            roam: true,
            map: 'Brasil',
            emphasis: {
              label: {
                show: true
              }
            },
            // 文本位置修正
            // textFixed: {
            //   Alaska: [20, -20]
            // },
            data: [
              {name: 'Abaetetuba', value: 4822023},
              {name: 'Abel Figueiredo', value: 731449},
              {name: 'Acará', value: 6553255},
              {name: 'Afuá', value: 2949131},
              {name: 'Água Azul do Norte', value: 38041430},
              {name: 'Alenquer', value: 5187582},
              {name: 'Almeirim', value: 3590347},
              {name: 'Altamira', value: 917092},
              {name: 'Anajás', value: 632323},
              {name: 'Ananindeua', value: 19317568},
              {name: 'Anapu', value: 9919945},
              {name: 'Augusto Corrêa', value: 1392313}
            ]
          }
        ]
      }
    }),
    computed: {
      ...mapGetters('gerencias', ['indicadores']),
    },
    created() {
      this.carregarMapa();
    },
    methods: {
      async carregarMapa() {
        this.$axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8';
        const geojsons = await this.$axios.get(
          'https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-15-mun.json'
        );
        // const geo = JSON.parse(geojsons.toString('UTF-8'));

        IEcharts.registerMap('Brasil', geojsons);
      },
      setIndicador(indicador) {
        this.indicador = indicador;
        this.montarGrafico();
      },
      alterarVisaoGrafico() {
        if (Object.keys(this.indicador).length > 0) {
          this.montarGrafico();
        } else {
          alert('Sem nada para mostrar');
        }
      },
      montarGrafico() {
        let series = [];
        let realizados = [];
        let previstos = [];
        let apurados = [];
        let metas = [];

        if (this.acumulado && this.indicador.acumulado !== 'Fixo') {
          this.indicador.apurado.reduce((total, numero) => {
            let v = total + numero;
            apurados.push(v);
            return v;
          }, 0);

          this.indicador.previsto.reduce((total, numero) => {
            let v = total + numero;
            metas.push(v);
            return v;
          }, 0);
        } else {
          apurados = this.indicador.apurado;
          metas = this.indicador.previsto;
        }

        for (let i = 0; i < apurados.length; i++) {
          let cor = (eval(apurados[i] +
            echarts_layout.graficos_indicador.operador_comparativo(this.indicador.tipo.substring(0, 3)) +
            metas[i]
          ) ? '#2E7D32' : '#C10015');
          realizados.push(echarts_layout.graficos_indicador.template_serie_data(apurados[i], cor));
        }

        series.push(
          echarts_layout.graficos_indicador.template_serie({
            nome: 'Real',
            tipo: 'bar',
            sobreposicao: '0%'
          }, realizados)
        );

        // series.push({
        //   name: 'Real ',
        //   type: 'bar',
        //   barMaxWidth: '-100%',
        //   data: []
        // });

        for (let i = 0; i < metas.length; i++) {
          previstos.push(
            echarts_layout.graficos_indicador.template_serie_data(metas[i], '#145A86')
          );
        }

        series.push(
          echarts_layout.graficos_indicador.template_serie({
            nome: 'Meta',
            tipo: 'bar',
            sobreposicao: '0%'
          }, previstos)
        );

        if (this.maximo) {
          series[0].markLine.data.push(echarts_layout.series.template_maximo());
        } else {
          series[0].markLine.data.slice(series[0].markLine.data.find(elemento => {
            return elemento.type === 'max'
          }), 1)
        }

        if (this.minimo) {
          series[0].markLine.data.push(echarts_layout.series.template_minimo());
        } else {
          series[0].markLine.data.slice(series[0].markLine.data.find(elemento => {
            return elemento.type === 'min'
          }), 1)
        }

        if (this.media) {
          series[0].markLine.data.push(echarts_layout.series.template_media());
        } else {
          series[0].markLine.data.slice(series[0].markLine.data.find(elemento => {
            return elemento.type === 'average'
          }), 1)
        }

        this.option = {};
        this.option = echarts_layout.tema_padrao;

        this.option.series = series;
      }
    }
  }
</script>

<style lang="scss">
  .cartao_grafico {
    margin-bottom: 3rem;
    height: 370px;
  }

  .echarts {
    height: 300px;
  }

  .cartao_indicadores {
    max-height: 300px;
    height: calc(100% - 300px) !important;
  }

  .dt_indicadores thead {
    background: $primary;
    color: #FFF;
  }

  .cartao_grafico_anual {
    margin-top: -50px;
  }

</style>
