import React from 'react';
import ReactConditionManager, { ReactConditionManagerProps } from '@jswork/react-condition-manager';

export interface ReactIfElseProps extends Omit<ReactConditionManagerProps, 'items'> {
  value: any;
}

export default class ReactIfElse extends React.Component<ReactIfElseProps, any> {
  static displayName = 'ReactIfElse';

  get isOnly() {
    const { children } = this.props;
    return React.Children.count(children) === 1;
  }

  render() {
    // todo: only will remove later
    const { value, only, ...props } = this.props;
    const items = this.isOnly ? [!!value] : [!!value, !value];
    return <ReactConditionManager items={items} {...props} />;
  }
}
