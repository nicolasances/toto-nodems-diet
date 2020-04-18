var http = require('toto-request');

exports.predict = (date, time, cid) => {

    return http({
        correlationId: cid, 
        microservice: 'model/dfrbot',
        method: 'POST',
        resource: '/predict',
        body: {
            date: date,
            time: time
        },
        fulldns: true
    });

}