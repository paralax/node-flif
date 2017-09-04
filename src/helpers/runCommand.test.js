/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'runCommand';
    var testData = [
        { expected: 'FLIF (Free Lossless Image Format) 0.3 [28 April 2017]', arguments: ['-v'] }
    ];

    runAllTests(testName, 'helpers', testData, true);

    return [testName, testData.length];
}

module.exports = test;
