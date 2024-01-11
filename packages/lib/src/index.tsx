import React, { Component } from 'react';
import ReactConditionManager from '@jswork/react-condition-manager';

export interface ReactIfElseProps {
  value: boolean;
  only?: boolean;
}

export default class ReactIfElse extends Component<ReactIfElseProps, any> {
  static displayName = 'ReactIfElse';

  static defaultProps = {
    only: false,
  };

  render() {
    const { value, only, ...props } = this.props;
    const items = only ? [!!value] : [!!value, !value];
    return <ReactConditionManager items={items} {...props} />;
  }
}
