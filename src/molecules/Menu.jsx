import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../atoms/Button';
import SvgFill from '../atoms/SvgFill';

const Menu = props => {
  const {
    items,
    main,
    icon,
    className,
    itemClass,
    fillActive,
    fillNormal
  } = props;

  const css = classNames(
    'menu',
    { 'menu--main': main },
    { 'menu--inner': !main },
    className
  );
  const cssBtn = classNames('menu__button', { 'menu__button--main': main });
  const cssItem = classNames(
    'menu__item',
    { 'menu__item--main': main },
    { 'menu__item--inner': !main },
    itemClass
  );

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
          .map(it => {
            if (!it.icon || typeof it.icon !== 'string') {
              return it;
            }

            if (it.active && fillActive) {
              it.icon = <SvgFill path={it.icon} fill={fillActive} />;
            } else if (!it.active && fillNormal) {
              it.icon = <SvgFill path={it.icon} fill={fillNormal} />;
            }

            return it;
          })
          .map((it, i) => {
            const { active, className } = it;
            const css = classNames(
              cssBtn,
              { 'menu__button--active': active },
              className
            );

            return (
              <li key={i} className={cssItem}>
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
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        active: PropTypes.bool
      })
    ])
  ).isRequired,
  itemClass: PropTypes.string,
  fillActive: PropTypes.string,
  fillNormal: PropTypes.string
};

export default Menu;
