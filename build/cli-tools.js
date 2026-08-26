var { Command } = require('commander');
var { rimrafSync } = require('rimraf');
var { mkdirpSync } = require('mkdirp');

var config = require('./../config');

function dirParamToPath(dirParam) {
    switch(dirParam) {
        case 'dist':
            return config.distDir;
        case 'serve':
            return config.serveDir;
    }
    return null;
}

var commands = {
    clear: function(value) {
        var targetPath = dirParamToPath(value);

        if(targetPath) {
            rimrafSync(targetPath);

            console.info('Cleared target directory: %s', targetPath);
        }
    },

    create: function(value) {
        var targetPath = dirParamToPath(value);

        if(targetPath) {
            mkdirpSync(targetPath);

            console.info('Created target directory: %s', targetPath);
        }
    }
}

var program = new Command();

program
    .option('-c, --clear [serve/dist]')
    .option('--create [serve/dist]')
    .parse(process.argv);

var options = program.opts();

for (var commandName in commands) {
    if (commands.hasOwnProperty(commandName) && options[commandName]) {
        commands[commandName](options[commandName]);
    }
}
