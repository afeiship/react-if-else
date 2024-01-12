import React, { Component } from 'react';
import ReactConditionManager, { ReactConditionManagerProps } from '@jswork/react-condition-manager';

export interface ReactIfElseProps extends Omit<ReactConditionManagerProps, 'items'> {
  value: any;
}

export default class ReactIfElse extends Component<ReactIfElseProps, any> {
  static displayName = 'ReactIfElse';

  render() {
    const { value, only, ...props } = this.props;
    const items = only ? [!!value] : [!!value, !value];
    return <ReactConditionManager items={items} {...props} />;
  }
}
