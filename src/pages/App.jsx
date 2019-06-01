import React from 'react';

import Menu from '../molecules/Menu';
import Breadcrumb from '../molecules/Breadcrumb';
import ContentArea from '../templates/ContentArea';
import ic_logo from '../assets/ico/ic_logo.svg';
import ic_dashboard from '../assets/ico/ic_dashboard.svg';
import ic_cadastro from '../assets/ico/ic_cadastro.svg';

import Faturamento from './Faturamento';

const App = () => (
  <ContentArea
    fluid
    menu={
      <Menu
        main
        icon={ic_logo}
        fillActive="#fff"
        fillNormal="#049c7a"
        className="d-none d-lg-block"
        items={[
          { caption: 'Meu Faturamento', icon: ic_dashboard, active: true },
          {
            caption: 'Cadastro',
            icon: ic_cadastro
          }
        ]}
      />
    }
    content={
      <React.Fragment>
        <Breadcrumb
          className="pb-lg-4 pl-4 pl-lg-5"
          items={['Petshop', 'Meu faturamento']}
        />
        <Faturamento />
      </React.Fragment>
    }
  />
);

export default App;
