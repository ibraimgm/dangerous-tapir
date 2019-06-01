import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import ic_totais from '../../assets/ico/ic_totais.svg';

const colorIcon = color =>
  color && (
    <SvgLoader path={ic_totais}>
      <SvgProxy selector="#Tela-01-Dashboard-Checkout" fill={color} />
    </SvgLoader>
  );

const GraphSubtitle = props => {
  const { label, value, fill, className, ...otherProps } = props;
  const css = classNames('row', 'graph__subtitle', className);

  return (
    <div className={css} {...otherProps}>
      <div className="col">
        {fill && colorIcon(fill)}
        <span className="graph__label">{label}</span>
      </div>
      <div className="col graph__value">{value}</div>
    </div>
  );
};

GraphSubtitle.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  fill: PropTypes.string,
  className: PropTypes.string
};

export default GraphSubtitle;
