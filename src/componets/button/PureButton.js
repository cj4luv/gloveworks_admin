import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

function coalesceNonElementChildren(children, coalesceNodes) {
  const coalescedChildren = [];

  let contiguousNonElements = [];
  Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      contiguousNonElements.push(child);
      return;
    }

    if (contiguousNonElements.length) {
      coalescedChildren.push(coalesceNodes(contiguousNonElements, coalescedChildren.length));
      contiguousNonElements = [];
    }

    coalescedChildren.push(child);
  });

  if (contiguousNonElements.length) {
    coalescedChildren.push(coalesceNodes(contiguousNonElements, coalescedChildren.length));
  }

  return coalescedChildren;
}

class PureButton extends Component {
  renderGroupedChildren() {
    const getChildren = coalesceNonElementChildren(this.props.children, (children, index) => (
      <p
        key={index}
      >
        {children}
      </p>
    ));

    switch (getChildren.length) {
      case 0:
        return null;
      case 1:
        return getChildren[0];
      default:
        return getChildren;
    }
  }

  render() {
    return (
      <div
        role="button"
        tabIndex={this.props.tabIndex}
        onClick={() => this.props.onClick()}
        style={{ ...this.props.style, cursor: 'pointer' }}
      >
        {this.renderGroupedChildren()}
      </div>
    );
  }
}

PureButton.propTypes = {
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
};

PureButton.defaultProps = {
  tabIndex: 0,
  onClick: () => {},
  style: {},
  children: {},
};

export default PureButton;
