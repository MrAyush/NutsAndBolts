const fs = require('fs');
module.exports = (error, _, res) => {
    if (error) {
        console.log('Inside Error logger', error.message);
        let errorlog = "" + new Date() + " " + error.stack + "\n";
        fs.appendFile('ErrorLogger.txt', errorlog, function (err) {
            if (err) console.log('Error while logging');
        });
        res.status(error.status);
        res.json({'message': error.message})
    }
}