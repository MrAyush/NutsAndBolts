const fs = require('fs');
errorLogger = (error, req, res, _) => {
    if (error) {
        console.log('Inside Error logger', error.message);
        let errorlog = "" + new Date() + " " + error.stack + "\n";
        fs.appendFile('ErrorLogger.txt', errorlog, function (err) {
            if (err) console.log('Error while logging');
        });
        res.status(error.status? error.stack: 500);
        res.json({'message': error.message})
    }
}

module.exports = errorLogger;