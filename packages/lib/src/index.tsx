import React from 'react';
import ReactConditionManager, { ReactConditionManagerProps } from '@jswork/react-condition-manager';

export interface ReactIfElseProps extends Omit<ReactConditionManagerProps, 'items'> {
  value: any;
}

const ReactIfElse: React.FC<ReactIfElseProps> = ({ value, children, ...props }) => {
  const isOnly = React.Children.count(children) === 1;
  const items = isOnly ? [!!value] : [!!value, !value];

  return <ReactConditionManager items={items} {...props}>{children}</ReactConditionManager>;
};

ReactIfElse.displayName = 'ReactIfElse';

export default ReactIfElse;
