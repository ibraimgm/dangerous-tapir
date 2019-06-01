import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentArea = props => {
  const { menu, content, fluid, className } = props;

  const cssRoot = classNames('content-area', className);
  const cssContainer = classNames(
    { container: !fluid },
    { 'container-fluid': fluid }
  );

  return (
    <div className={cssRoot}>
      {menu}
      <div className={cssContainer}>
        <div className="row">
          <div className="col content-area__content">{content}</div>
        </div>
      </div>
    </div>
  );
};

ContentArea.propTypes = {
  menu: PropTypes.node,
  content: PropTypes.node.isRequired,
  fluid: PropTypes.bool
};

export default ContentArea;
