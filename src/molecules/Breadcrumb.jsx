import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../atoms/Button';
import ic_menu from '../assets/ico/ic_menu.svg';

const Breadcrumb = props => {
  const { items, className } = props;
  const css = classNames('breadcrumb', 'bc__nav', className);

  return (
    <nav className={css}>
      <ol className="breadcrumb bc__list">
        <li className="bc__icon d-inline-block d-lg-none">
          <Button icon={ic_menu} />
        </li>
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
