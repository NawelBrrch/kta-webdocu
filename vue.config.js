module.exports = {
  devServer: {
    host: "localhost",
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_styles.scss";`,
      },
    },
  },
};
