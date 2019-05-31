import React from 'react';

import Filter from '../molecules/Filter';
import Menu from '../molecules/Menu';
import Totais from '../organisms/Totais';
import ContentArea from '../templates/ContentArea';

const Faturamento = () => {
  return (
    <ContentArea
      header={
        <Filter
          items={[
            { name: 'Hoje', active: true },
            'Última semana',
            'Último mês',
            'Outro período'
          ]}
        />
      }
      menu={<Menu items={['Totais', 'Clientes']} />}
      content={<Totais />}
    />
  );
};

export default Faturamento;
