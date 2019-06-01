import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const { caption, icon, className, ...otherProps } = props;
  delete otherProps.active;

  const css = classNames('button', className);

  return (
    <button type="button" className={css} {...otherProps}>
      {icon && (typeof icon === 'string' ? <img src={icon} alt="" /> : icon)}
      {caption && <span>{caption}</span>}
    </button>
  );
};

Button.propTypes = {
  caption: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Button;
