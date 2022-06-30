const DotEnv = require('dotenv');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require.resolve('sass'),
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
  };
};
