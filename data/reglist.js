'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: list_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            /*Mockgen().responses({
                path: '/reglist',
                operation: 'get',
                response: '200'
            }, callback);
            */
        }
    }
};
