// This file exists to check the limits of arguments

var fs = require('fs');
var nodeFLIF = require('./index.js');

function runCommandSync (args) {
    var exec = require('child_process').execSync;
    var wasmPath = require.resolve('flif-wasm');
    var executable = 'node "' + wasmPath + '"';

    if (process.platform === 'win32') {
        executable = nodeFLIF.executablePath();
    }

    var executableAndArgs = executable + ' ' + args;
    var child = exec(executableAndArgs);

    return child.toString().trim();
}

function openImage (args) {
    var exec = require('child_process').execSync;
    exec(args);
}

try { fs.unlinkSync('./sample/check.flif'); } catch (err) {}
try { fs.unlinkSync('./sample/check.png'); } catch (err) {}

// Should return flif.exe version
var version = runCommandSync('-v');
console.log(version);

// Should convert cat.png to check.flif
// var encode = runCommandSync('-e ./sample/catrun01.png ./sample/catrun02.png ./sample/catrun03.png ./sample/catrun04.png ./sample/catrun05.png ./sample/catrun06.png ./sample/check.flif');
var encode = runCommandSync('-e -HX ./sample/catrun01.png ./sample/check.flif');
console.log(encode);

// runCommandSync('-t ./sample/catrun01.flif ./sample/cat.flif potato.flif');

// good
// P-32000 P32000
// bad
// P-32001 P32001
// https://github.com/FLIF-hub/FLIF/blob/v0.3/src/flif.cpp#L580

// Log out true/false if file exists
console.log('Does ./sample/check.flif exist?', fs.existsSync('./sample/check.flif'));


// Should convert cat.flif to check.png
var decode = runCommandSync('-d ./sample/check.flif ./sample/check.png');
console.log(decode);

// Log out true/false if file exists
console.log('Does ./sample/check.png exist?', fs.existsSync('./sample/check.png'));

openImage('sample\\check.png');


