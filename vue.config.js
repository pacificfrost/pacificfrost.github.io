// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/main.scss";',
      },
    },
  },
};
