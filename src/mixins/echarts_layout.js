let tema_padrao = {
  title: {
    textStyle: {
      fontWeight: 'normal',
      fontSize: 22,
      color: '#008acd'          // 主标题文字颜色
    }
  },
  color: [
    '#2E7D32', '#C10015', '#145A86', '#ffb980', '#d87a80',
    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
    '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
  ],
  animationDuration: 1500,
  legend: {
    data: ['Real ', 'Real', 'Meta'],
    itemGap: 15,
    textStyle: {
      fontSize: 14
    }
  },
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.8)',     // 提示背景颜色，默认为透明度为0.7的黑色
    padding: [8, 12, 8, 12],
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'line',         // 默认为直线，可选为：'line' | 'shadow'
      lineStyle: {          // 直线指示器样式设置
        color: '#607D8B',
        width: 1
      },
      crossStyle: {
        color: '#607D8B'
      },
      shadowStyle: {                     // 阴影指示器样式设置
        color: 'rgba(200,200,200,0.2)'
      }
    },
    textStyle: {
      fontFamily: 'Roboto, sans-serif'
    },
    formatter: function (params) {
      if (params.componentType === 'series') {
        return params.name + '<br/> ' + params.seriesName + ': ' + params.value.toLocaleString('PT-BR') + ' ' + params.marker;
      }
      return params.name + ': ' + params.value.toLocaleString('PT-BR') + ' ' + params.marker;
    }
  },
  grid: {
    x: 40,
    x2: 45,
    y: 35,
    y2: 25,
    left: '25px'
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderRadius: 5
      },
      emphasis: {
        barBorderRadius: 5
      }
    }
  },
  line: {
    smooth: true,
    symbol: 'emptyCircle',  // Symbol type
    symbolSize: 3           // Circle dot size
  },
  textStyle: {
    fontFamily: 'Roboto, Arial, Verdana, sans-serif'
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    x: 'right',
    y: 'top',
    itemGap: 10,
    showTitle: false,
    feature: {
      dataView: {
        show: true,
        readOnly: false,
        title: 'Dados',
        lang: ['Visualizaçao de dados', 'Voltar', 'Atualizar']
      },
      magicType: {
        show: true,
        type: ['line', 'bar', 'stack', 'tiled'],
        title: {line: 'linha', bar: 'barra', stack: 'pilha', tiled: 'mosaico'}
      },
      restore: {show: true, title: 'Restaurar'},
      saveAsImage: {show: true, title: 'Salvar'}
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  series: []
};

const series = {
  template_apurado: ({nome, tipo, sobreposicao}) => {
    return {
      name: nome,
      type: tipo,
      barGap: sobreposicao,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            textStyle: {
              fontWeight: 500
            },
            formatter: function (params) {
              return params.value.toLocaleString('PT-BR');
            }
          }
        }
      },
      markLine: {
        data: []
      },
      data: [

      ]
    }
  },
  template_media: () => {
    return {
      type: 'average', name: 'Média'
    }
  },
  template_maximo: () => {
    return {
      type: 'max', name: 'Máx'
    }
  },
  template_minimo: () => {
    return {
      type: 'min', name: 'Min'
    }
  }
};

const graficos_indicador = {
  template_serie: (serie, dados) => {
    let template = series.template_apurado(serie);
    template.data = dados;
    return template;
  },
  template_serie_data: (valor, cor) => {
    let template = {
      value: valor,
      itemStyle: {
        color: cor,
        barBorderRadius: 3
      }
    };
    return template;
  },
  operador_comparativo: (tipo_indicador) => {
    const tipos = {
      'Aum': {
        comparacao: '>='
      },
      'Red': {
        comparacao: '<='
      }
    };
    return tipos[tipo_indicador].comparacao
  }
};

export default {
  tema_padrao,
  graficos_indicador,
  series
}
