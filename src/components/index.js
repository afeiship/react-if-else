import React, { Component } from 'react';
import ReactConditionManager from 'react-condition-manager';

export default class extends Component {
  render() {
    const { value, ...props } = this.props;
    return <ReactConditionManager items={[!!value, !value]} {...props} />;
  }
}
