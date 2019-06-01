import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

export const SERVICOS_COLORS = ['#cc28d4', '#792ad5', '#3a86fe'];

const options = {
  cutoutPercentage: 75,

  legend: {
    display: false
  }
};

const GraphServicos = props => <Doughnut options={options} {...props} />;

GraphServicos.propTypes = {
  data: PropTypes.object.isRequired
};

export default GraphServicos;
