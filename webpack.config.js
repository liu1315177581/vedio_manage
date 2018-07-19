module.exports = {
  egg: true,
  framework: 'react',
  // devtool: 'source-map',
  entry: {
    include: ['app/web/page',
      { layout: 'app/web/framework/layout/layout.jsx?loader=false' }
    ],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  dll: ['react', 'react-dom'],
  loaders: {
    swig : {
      test: /\.css$/,
      use: [
        {
          loader:'px2rem-loader',
          options:{
            remUnit:135
          }
        }
      ]
    }
  },
  plugins: {

  },
  done() {
    console.log('---webpack compile finish---');
  }
};
