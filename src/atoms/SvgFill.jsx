import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

const SgvFill = ({ path, fill }) => (
  <SvgLoader path={path}>
    <SvgProxy selector="#Tela-01-Dashboard-Checkout" fill={fill} />
  </SvgLoader>
);

SgvFill.propTypes = {
  path: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired
};

export default SgvFill;
