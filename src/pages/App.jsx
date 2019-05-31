import React from 'react';

import Menu from '../molecules/Menu';
import Breadcrumb from '../molecules/Breadcrumb';
import ContentArea from '../templates/ContentArea';

import Faturamento from './Faturamento';

const App = () => (
  <ContentArea
    menu={<Menu items={['Logo', 'Meu Faturamento', 'Cadastro']} />}
    content={
      <React.Fragment>
        <p>content</p>
        <Breadcrumb items={['Petshop', 'Meu faturamento']} />
        <Faturamento />
      </React.Fragment>
    }
  />
);

export default App;
