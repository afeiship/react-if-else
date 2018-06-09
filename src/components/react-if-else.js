import React, { Component } from 'react';
import ReactConditionManager from 'react-condition-manager';
import PropTypes from 'prop-types';


const DEFAULT_CONDITION = [true, false];

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    value: PropTypes.bool
  };

  static defaultProps = {
  };
  /*===properties end===*/

  render() {
    const { value, ...props } = this.props;
    return (
      <ReactConditionManager items={[ value, !value ]} {...props} />
    );
  }
}
