import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
  const { items } = props;

  return (
    <React.Fragment>
      {items
        .map(it => (typeof it === 'string' ? { caption: it } : it))
        .map((it, i) => (
          <button key={i} style={{ display: 'block' }}>
            {it.caption}
          </button>
        ))}
    </React.Fragment>
  );
};

Menu.defaultProps = {
  items: []
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        caption: PropTypes.string,
        icon: PropTypes.string,
        active: PropTypes.bool
      })
    ])
  ).isRequired
};

export default Menu;
