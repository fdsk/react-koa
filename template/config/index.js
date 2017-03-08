/**
 * Created by pomy on 08/03/2017.
 */

'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: require('./dev.env.js'),
        assetsRoot: path.resolve(__dirname, '../public/dist'),
        assetsPublicPath: '/',
        clientPort: 3000,
        serverPort: 9003
    },
    build:{
        env: require('./prod.env.js'),
        assetsRoot: path.resolve(__dirname, '../public/dist'),
        assetsPublicPath: '/',
        serverPort: 9003
    }
};