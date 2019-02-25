'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: add_email
     */
    post: {
        200: function (req, res, callback) {
            var emailList = [];
            var registrationCard = {};
            registrationCard.email = req.query.email;
            registrationCard.timestamp = Date.now() / 1000 | 0;
            var myJSON = JSON.stringify(registrationCard);
            console.error(myJSON);
            if(!global.emailList){
                emailList.push(registrationCard);
                global.emailList = emailList;
            }
            else
            {
                //var num = emailList.push(registrationCard);
                //global.emailList = emailList;
                global.emailList.push(registrationCard);
            }
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/register',
                operation: 'post',
                response: '200'
            }, callback);
            
        }
    }
};
