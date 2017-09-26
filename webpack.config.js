webpack = require('webpack');
path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
];

const loaders = [
    {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        query: {
            presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
    },
    {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader?name=../fonts/[name].[ext]'
    },
    { 
        test: /\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader?name=../img/[name].[ext]'
    }
];

if (process.env.NODE_ENV == 'development') {
    loaders.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader?minimize!resolve-url-loader!sass-loader?sourceMap"
        })
    });
} else {
    loaders.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!resolve-url-loader!sass-loader?sourceMap"
        })
    });

    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          })
    );

    plugins.push(new UglifyJSPlugin({parallel: true}));
}

module.exports = {
    context: __dirname,
    entry: './resources/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/build',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: '#cheap-module-source-map',
    module: {loaders: loaders},
    plugins: plugins,
};
