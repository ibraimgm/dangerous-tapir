import React from 'react';
import PropTypes from 'prop-types';

import { moneyFormat } from '../../util/';
import RoundedBar from '../chartjs/RoundedBar';

export const COR_RECEITA = '#00ddaa';
export const COR_DESPESA = '#ff4f64';

const options = {
  legend: {
    display: false
  },
  responsive: true,
  aspectRatio: 1.7,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        },
        barPercentage: 0.3,
        ticks: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          drawBorder: false
        },
        afterBuildTicks: chart => {
          chart.ticks.shift();
        },
        ticks: {
          min: 2000,
          stepSize: 2000,
          callback: value => `${moneyFormat(value)}  `
        }
      }
    ]
  },
  barRoundness: 1
};

const GraphReceitasDespesas = props => {
  const { receitas, despesas } = props;

  const data = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        data: [receitas, despesas],
        backgroundColor: [COR_RECEITA, COR_DESPESA]
      }
    ]
  };

  return (
    <RoundedBar
      data={data}
      options={options}
      width={null}
      height={null}
      {...props}
    />
  );
};

GraphReceitasDespesas.propTypes = {
  receitas: PropTypes.number.isRequired,
  despesas: PropTypes.number.isRequired
};

export default GraphReceitasDespesas;
