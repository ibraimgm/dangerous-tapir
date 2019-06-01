import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const { caption, icon, className, ...otherProps } = props;
  delete otherProps.active;

  const css = classNames('button', className);

  return (
    <button type="button" className={css} {...otherProps}>
      {icon && <img src={icon} alt="" />}
      {caption && <span>{caption}</span>}
    </button>
  );
};

Button.propTypes = {
  caption: PropTypes.string,
  icon: PropTypes.string
};

export default Button;
