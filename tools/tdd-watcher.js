var fs = require('fs'),
    spawn = require('child_process').spawn,
    ignoreRegex = /^(\.|Makefile|package.json|node_modules|tools)/,
    isExecuting = false,
    needRestart = false,
    debug = function(message) {
        process.stdout.write(message);
    };

function executeTests(message) {
    var timeout;

    isExecuting = true;
    debug(`\n${message}`);

    timeout = setInterval(function() {
        debug('. ');
    }, 1000);

    spawn('make', ['test'])
        .on('close', code => {
            isExecuting = false;
            clearTimeout(timeout);

            if (!code) {
                debug('\x1b[32m ok\x1b[0m');
            } else {
                debug('\x1b[31m Error! Run "make test" for details\x1b[0m');
            }

            if (needRestart) {
                needRestart = false;
                executeTests('Tests restarted');
            }
        });
}

debug('begin watch');

fs.watch('./', {
    persistent: true,
    recursive: true
}, function(event, filename) {
    if (!ignoreRegex.test(filename)) {
        if (!isExecuting) {
            executeTests(`${filename} changed`);
        } else {
            needRestart = true;
        }
    }
});

executeTests('Make tests after start');
