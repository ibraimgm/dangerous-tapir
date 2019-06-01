import React from 'react';
import PropTypes from 'prop-types';

import { moneyFormat } from '../../util';

import GraphSubtitle from './GraphSubtitle';
import GraphServicos, { SERVICOS_COLORS } from './GraphServicos';
import GraphReceitasDespesas, {
  COR_RECEITA,
  COR_DESPESA
} from './GraphReceitasDespesas';

const Totais = props => {
  const { receitas, despesas } = props;

  const totalReceitas = receitas
    .map(r => r.valor)
    .reduce((acc, v) => acc + v, 0);

  const servicosSub = [];
  const servicosData = receitas.reduce(
    (acc, r, i) => {
      const label = r.categoria.toUpperCase();
      const percent = (r.valor / totalReceitas) * 100;
      const value = `${moneyFormat(r.valor)} (${percent}%)`;
      const color = SERVICOS_COLORS[i % SERVICOS_COLORS.length];

      acc.labels.push(label);
      acc.datasets[0].data.push(r.valor);
      acc.datasets[0].backgroundColor.push(color);

      servicosSub.push(
        <GraphSubtitle key={i} label={label} value={value} fill={color} />
      );

      return acc;
    },
    { labels: [], datasets: [{ data: [], backgroundColor: [] }] }
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col spotlight">
          <span className="title">Valor total</span>
          <span className="spotlight__currency">R$</span>
          <span className="spotlight__amount">10.178,60</span>
        </div>
      </div>
      <div className="row">
        <div className="col col-xl-6 graph">
          <span className="title">Serviços</span>
          <div className="graph__container graph__container--circle">
            <GraphServicos data={servicosData} />
          </div>
          {servicosSub}
          <GraphSubtitle
            className="graph__subtitle--total"
            label="Total"
            value={`${moneyFormat(totalReceitas)} (100%)`}
          />
        </div>
        <div className="col col-xl-6 graph">
          <span className="title">Despesas x Receitas</span>
          <div className="graph__container graph__container--bar">
            <GraphReceitasDespesas
              receitas={totalReceitas}
              despesas={despesas}
            />
          </div>
          <GraphSubtitle
            label="RECEITAS"
            value={`${moneyFormat(totalReceitas)} (50%)`}
            fill={COR_RECEITA}
          />
          <GraphSubtitle
            label="DESPESAS"
            value={`${moneyFormat(despesas)} (30%)`}
            fill={COR_DESPESA}
          />
        </div>
      </div>
    </div>
  );
};

Totais.propTypes = {
  receitas: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired
    })
  ).isRequired,
  despesas: PropTypes.number.isRequired
};

export default Totais;
