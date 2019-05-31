import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const { items } = props;

  return (
    <div>
      Filter:
      {items
        .map(it => (typeof it === 'string' ? { name: it, active: false } : it))
        .map((it, i) => (
          <b key={i}>{it.name}&nbsp;</b>
        ))}
    </div>
  );
};

Filter.defaultProps = {
  options: []
};

Filter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
      })
    ])
  ).isRequired
};

export default Filter;
