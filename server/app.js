import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';

const app = express();

//setting
app.set('port', process.env.PORT || 5000);

//middleares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//Start server
app.listen(app.get('port'), () => {
    console.log(`Run on port ${app.get('port')}`);
});