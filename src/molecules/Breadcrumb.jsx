import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = props => {
  const { items } = props;

  return (
    <nav className="breadcrumb bc__nav">
      <ol className="breadcrumb bc__list">
        {items
          .join('_|_')
          .split('_')
          .map((item, i) => (
            <li key={i} className="breadcrumb-item bc__item">
              {item}
            </li>
          ))}
      </ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  items: []
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Breadcrumb;
