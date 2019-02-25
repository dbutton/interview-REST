'use strict';

var port = process.env.PORT || 8000; // Better flexibility than hardcoding the port

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
//var SwaggerUi = require('swaggerize-ui'); // Provides UI for testing our API
var Path = require('path');

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./irs/interview-REST/config/swagger.json'),
    handlers: Path.resolve('./irs/interview-REST/handlers'),
    docspath: '/swagger'   //  Hooks up the testing UI
}));

/*App.use('/', SwaggerUi({    // Serves the testing UI from our base URL
    docs: '/swagger'          //
}));
*/

Server.listen(port, function () {
    App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    console.log('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
