import React, { Component } from 'react';
import ReactConditionManager from '@jswork/react-condition-manager';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    only: PropTypes.bool
  };
  render() {
    const { value, only, ...props } = this.props;
    const items = only ? [!!value] : [!!value, !value];
    return <ReactConditionManager items={items} {...props} />;
  }
}
