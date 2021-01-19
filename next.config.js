module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dashboard/dashboard",
      },
    ];
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new webpack.DefinePlugin({
        GLOBALS: JSON.stringify({
          TITLE: "GitCMS",
          PACKAGE: {
            homepage: "https://github.com/morteza-jamali/gitcms#readme",
          },
        }),
      })
    );

    return config;
  },
};
