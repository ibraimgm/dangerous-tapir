import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SvgFill from '../../atoms/SvgFill';
import ic_totais from '../../assets/ico/ic_totais.svg';

const GraphSubtitle = props => {
  const { label, value, fill, className, ...otherProps } = props;
  const css = classNames('row', 'graph__subtitle', className);

  return (
    <div className={css} {...otherProps}>
      <div className="col">
        {fill && <SvgFill path={ic_totais} fill={fill} />}
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
