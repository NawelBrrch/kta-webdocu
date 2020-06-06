module.exports = {
  devServer: {
    host: 'localhost'
    },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/scss/config/_reset.scss";
        @import "@/scss/global/_variables.scss";
        @import "@/scss/global/_mixins.scss";
        @import "@/scss/global/_fonts.scss";`

      }
    }
  }
};