/**
 * Created by pomy on 08/03/2017.
 */

'use strict';

let env = process.env.NODE_ENV || 'development';

let renderOnline = function*(projectName, bundleUrl,title, tpl) {

    this.body = yield this.render(tpl, {
        scripts:['/dist/vendor.js',bundleUrl],
        styles: ['/dist/styles'],
        title: title
    });
};

let renderPage = function*(projectName, bundleUrl, title, tpl) {
    tpl = tpl || 'index';
    if (env === 'development') {
        this.body = yield this.render(tpl, {
            scripts: [
                'http://127.0.0.1:3000/dist/vendor.js',
                `http://127.0.0.1:3000${bundleUrl}`
            ],
            styles: ['/dist/styles'],
            title: title
        });
    } else {
        yield renderOnline.call(this, projectName, bundleUrl,title, tpl);
    }
};

let index = function*() {
    yield renderPage.call(this, 'react-kao', '/dist/app.js', 'react-kao','index');
};

module.exports.register = function (router) {
    router.all('/', index);
    router.all('/index', index);
};