import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { caption, icon } = props;

  return (
    <b>
      {icon && icon}
      {caption}
    </b>
  );
};

Button.propTypes = {
  caption: PropTypes.string,
  icon: PropTypes.string
};
