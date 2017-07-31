var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//create an index.html file for us and put it in dist and have index.bundle
var User = require('./models/User');
var bodyParser = require("body-parser")


module.exports = {
  devtool: 'inline-source-map',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true,
    setup: function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/data',function(req,res){

        User.find({},function(err, docs) {
          console.log(docs);
          if (err) { return next(err); }
          res.send(docs);
    })
      });

    app.post('/form',function(req, res, next){

      console.log(req.body);

      var contact = new User({name : req.body.name});
      contact.save(function (err, contact) {
        if (err) { return next(err); }

      //res.redirect('/form');
      res.send("Done!")
      });
    });

    }
},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};


