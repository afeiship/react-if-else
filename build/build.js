import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactIfElse'
  }),
  externals: externals.base({
    '@feizheng/react-condition-manager': '@feizheng/react-condition-manager'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
