'use strict';
var dataProvider = require('../data/register.js');

/**
 * Operations on /register
 */
module.exports = {
    /**
     * summary: Registers an email address.
     * description: 
     * parameters: email
     * produces: application/json, text/json
     * responses: 200
     */
    post: function add_email(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        
        var rVal = provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
        });
        
        res.status(status).send("Registered");
    }
};
