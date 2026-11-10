import { rspack } from '@rspack/core';
import { withZephyr } from 'zephyr-rspack-plugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default withZephyr()({
  entry: './src/index.js',
  output: { publicPath: 'auto', clean: true },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [{
      test: /\.jsx?$/, exclude: /node_modules/, loader: 'builtin:swc-loader',
      options: { jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'automatic' } } } },
    }],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({ template: './index.html' }),
    new ModuleFederationPlugin({
      name: 'host',
      // Zephyr rewrites this URL to the remote's Zephyr deployment at build time.
      remotes: { remote: 'remote@http://localhost:3001/remoteEntry.js' },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
});
