import React from 'react';

const Totais = () => {
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
        <div className="col">Serviços</div>
        <div className="col">Despesas x Receitas</div>
      </div>
    </div>
  );
};

export default Totais;
