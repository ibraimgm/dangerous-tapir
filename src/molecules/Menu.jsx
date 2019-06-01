import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../atoms/Button';

const Menu = props => {
  const { items, main, icon, className } = props;

  const css = classNames(
    'menu',
    { 'menu--main': main },
    { 'menu--inner': !main },
    className
  );
  const cssBtn = classNames('menu__button', { 'menu__button--main': main });

  return (
    <nav className={css}>
      <ul className="list-unstyled components">
        {icon && (
          <li className="menu__icon">
            <img src={icon} alt="" />
          </li>
        )}
        {items
          .map(it => (typeof it === 'string' ? { caption: it } : it))
          .map((it, i) => {
            const { active, className } = it;
            const css = classNames(
              cssBtn,
              { 'menu__button--active': active },
              className
            );

            return (
              <li key={i}>
                <Button {...it} className={css} />
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

Menu.defaultProps = {
  main: false,
  items: []
};

Menu.propTypes = {
  main: PropTypes.bool,
  icon: PropTypes.string,
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
