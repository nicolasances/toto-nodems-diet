var http = require('toto-request');

exports.predict = (foodId, cid) => {

    return http({
        correlationId: cid, 
        microservice: 'model/dfamp',
        method: 'POST',
        resource: '/predict',
        body: {
            alimentId: foodId,
        },
        fulldns: true
    });

}