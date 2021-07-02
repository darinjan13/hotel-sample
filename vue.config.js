module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    home: {
      entry: "src/pages/home/main.js",
      template: 'public/index.html',
      filename: 'home.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'home']
    },
    crud: {
      entry: "src/pages/crud/main.js",
      template: 'public/index.html',
      filename: 'crud.html',
      title: 'Crud',
      chunks: ['chunk-vendors', 'chunk-common', 'crud']
    },
    pota: {
      entry: "src/pages/pota/main.js",
      template: 'public/index.html',
      filename: 'pota.html',
      title: 'Pota',
      chunks: ['chunk-vendors', 'chunk-common', 'pota']
    }
  }
}
