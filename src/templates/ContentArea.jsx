import React from 'react';
import PropTypes from 'prop-types';

const ContentArea = props => {
  const { menu, header, content } = props;

  return (
    <div className="container">
      {header && (
        <div className="row">
          <div className="col">{header}</div>
        </div>
      )}
      <div className="row">
        <div className="col">{menu}</div>
        <div className="col">{content}</div>
      </div>
    </div>
  );
};

ContentArea.propTypes = {
  menu: PropTypes.node,
  header: PropTypes.node,
  content: PropTypes.node.isRequired
};

export default ContentArea;
