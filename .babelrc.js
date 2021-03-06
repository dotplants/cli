module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: ['add-module-exports'],
  env: {
    production: {
      presets: ['minify'],
      comments: false
    }
  }
};
