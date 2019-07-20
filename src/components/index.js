import React, { Component } from 'react';
import ReactConditionManager from 'react-condition-manager';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    unique: PropTypes.bool
  };
  render() {
    const { value, unique, ...props } = this.props;
    const items = unique ? [!!value] : [!!value, !value];
    return <ReactConditionManager items={items} {...props} />;
  }
}
