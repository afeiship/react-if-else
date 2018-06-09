import React, { Component } from 'react';
import ReactConditionManager from 'react-condition-manager';

const DEFAULT_CONDITION = [true, false];

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
  };

  static defaultProps = {
  };
  /*===properties end===*/

  render() {
    return (
      <ReactConditionManager items={DEFAULT_CONDITION} {...this.props} />
    );
  }
}
