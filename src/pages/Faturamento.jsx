import React from 'react';

import Filter from '../molecules/Filter';
import Menu from '../molecules/Menu';
import Totais from '../organisms/Totais';
import ContentArea from '../templates/ContentArea';
import ic_totais from '../assets/ico/ic_totais.svg';
import ic_clientes from '../assets/ico/ic_clientes.svg';

const RECEITAS = [
  { categoria: 'Banho & tosa', valor: 6445.25 },
  { categoria: 'Consultas', valor: 3867.15 },
  { categoria: 'medicamentos', valor: 2578.1 }
];

const DESPESAS = 2711.9;

const Faturamento = () => {
  const iconTotal = (
    <i>
      <img src={ic_totais} alt="" />
      <span className="total-money total-money--stacked d-none d-lg-block">
        $
      </span>
      <span className="total-money total-money--inline d-block d-lg-none">
        $
      </span>
    </i>
  );

  const items = [
    { caption: 'Totais', icon: iconTotal, active: true },
    { caption: 'Clientes', icon: ic_clientes }
  ];

  return (
    <React.Fragment>
      <Filter
        className="pl-4 pl-lg-5"
        items={[
          { name: 'Hoje', active: true },
          'Última semana',
          'Último mês',
          { name: 'Outro período', className: 'd-none d-sm-inline-block' }
        ]}
      />
      <Menu
        className="pl-4 pl-lg-5 d-block d-lg-none"
        itemClass="d-inline-block menu__item--inline"
        items={items}
      />
      <ContentArea
        className="pl-4 pl-lg-5"
        menu={<Menu className="d-none d-lg-block" items={items} />}
        content={<Totais receitas={RECEITAS} despesas={DESPESAS} />}
      />
    </React.Fragment>
  );
};

export default Faturamento;
