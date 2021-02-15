import React, { Component } from 'react';
import ReactConditionManager from '@jswork/react-condition-manager';
import PropTypes from 'prop-types';

export default class ReactIfElse extends Component {
  static propTypes = {
    /**
     * If is only child.
     */
    only: PropTypes.bool
  };

  static defaultProps = {
    only: false
  };

  render() {
    const { value, only, ...props } = this.props;
    const items = only ? [!!value] : [!!value, !value];
    return <ReactConditionManager items={items} {...props} />;
  }
}
