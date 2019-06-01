import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../atoms/Button';

const Filter = props => {
  const { items, className } = props;
  const css = classNames('filter', className);

  return (
    <nav className={css}>
      <ol className="list-unstyled components filter__list">
        {items
          .map(it => (typeof it === 'string' ? { name: it } : it))
          .map((it, i) => {
            const { active, className } = it;
            const css = classNames(
              'filter__button',
              { 'filter__button--active': active },
              className
            );

            return (
              <li key={i} className="filter__item">
                <Button className={css} caption={it.name} />
              </li>
            );
          })}
      </ol>
    </nav>
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
        active: PropTypes.bool
      })
    ])
  ).isRequired
};

export default Filter;
