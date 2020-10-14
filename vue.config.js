module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Alisdair Frost | Portfolio';
      return args;
    });
  },
  transpileDependencies: ['vuetify'],
};
