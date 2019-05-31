import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = props => {
  const { items } = props;

  return (
    <div>
      Breadcrumb:{' '}
      {items.map((item, i) => (
        <b key={i}>{item}&nbsp;</b>
      ))}
    </div>
  );
};

Breadcrumb.defaultProps = {
  items: []
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Breadcrumb;
