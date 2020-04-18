var exec = require('child_process').exec, kodiChild;

var params = [
    'height='+screen.height,
    'width='+screen.width,
    'fullscreen=yes' // only works in IE, but here for completeness
].join(',');

function openKodi() {
    kodiChild = exec('kodi',
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                 console.log('exec error: ' + error);
            }
        }
    );
}

function openMap() {
    window.open("https://wego.here.com", params);
}

