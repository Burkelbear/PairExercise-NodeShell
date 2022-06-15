const fs = require('fs');

module.exports = (err, files) => {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err
        } else {
            process.stdout.write(files.join('\n'))
            process.stdout.write("prompt > ");
        }
    })
};