module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new webpack.DefinePlugin({
        GLOBALS: JSON.stringify({
          TITLE: 'GitCMS',
          PATH: {
            IMAGES: '/images'
          },
          PACKAGE: {
            homepage: 'https://github.com/morteza-jamali/gitcms#readme'
          }
        })
      })
    );

    return config;
  }
};
