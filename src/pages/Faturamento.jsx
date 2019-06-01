import React from 'react';

import Filter from '../molecules/Filter';
import Menu from '../molecules/Menu';
import Totais from '../organisms/Totais';
import ContentArea from '../templates/ContentArea';
import ic_totais from '../assets/ico/ic_totais.svg';
import ic_clientes from '../assets/ico/ic_clientes.svg';

const Faturamento = () => {
  return (
    <React.Fragment>
      <Filter
        items={[
          { name: 'Hoje', active: true },
          'Última semana',
          'Último mês',
          'Outro período'
        ]}
      />
      <ContentArea
        menu={
          <Menu
            items={[
              { caption: 'Totais', icon: ic_totais, active: true },
              { caption: 'Clientes', icon: ic_clientes }
            ]}
          />
        }
        content={<Totais />}
      />
    </React.Fragment>
  );
};

export default Faturamento;
