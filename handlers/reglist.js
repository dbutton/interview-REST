'use strict';
var dataProvider = require('../data/reglist.js');
/**
 * Operations on /reglist
 */
module.exports = {
    /**
     * summary: Retrieves the list of timestamped email addresses.
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function list_get(req, res, next) {
        var status;
        var message;
        
        // If there's a list in progress, retrieve its current state
        if (global.emailList){
            status = 200;
            var provider = dataProvider['get']['200'];
            provider(req, res, function (err, data) {
                if (err) {
                    next(err);
                    return;
                }
            });
            res.json(global.emailList);
        }
        else { // No game in progress: set bad request error
            status = 400;
            message = "Please register an email address (POST '/register?email={email address}')."
        }
        res.status(status).send(message);
        
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        /*var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
        */
    }
};
