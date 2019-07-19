import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from 'webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build(),
  externals: externals.base({
    'react-condition-manager': 'react-condition-manager'
  }),
  plugins: [plugins.clean(), plugins.copyAssets(), plugins.copyStyles()]
});
