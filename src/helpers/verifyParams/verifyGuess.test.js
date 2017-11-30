/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var guesses = require('../guesses.js');
    var testName = 'verifyGuess';

    var testData = [
        // Test known good for guess
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.allHeuristically  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.allAverage        }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.allMedianGradient }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.allMedianNumber   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.allMixed          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.rainbow1          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.rainbow2          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.rainbow3          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.rainbow4          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.rainbow5          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.missingY          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.missingCo         }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.missingCg         }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.missingAlpha      }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.missingLookback   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: guesses.empty             }, 'encode',    true]},

        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.allHeuristically  }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.allAverage        }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.allMedianGradient }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.allMedianNumber   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.allMixed          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.rainbow1          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.rainbow2          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.rainbow3          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.rainbow4          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.rainbow5          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.missingY          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.missingCo         }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.missingCg         }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.missingAlpha      }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.missingLookback   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: guesses.empty             }, 'transcode', true]},

        // Test known bad for guess
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.allHeuristically  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.allAverage        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.allMedianGradient }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.allMedianNumber   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.allMixed          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.rainbow1          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.rainbow2          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.rainbow3          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.rainbow4          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.rainbow5          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.missingY          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.missingCo         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.missingCg         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.missingAlpha      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.missingLookback   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: guesses.empty             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'heuristically'           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'average'                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'median gradient'         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'median number'           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'mixed'                   }, 'decode',    true]},

        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: true                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: true                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: true                      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: false                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: false                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: false                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'a'                       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'a'                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'a'                       }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: [0, 1, 2]                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: [0, 1, 2]                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: [0, 1, 2]                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: {'a': 1}                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: {'a': 1}                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: {'a': 1}                  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: null                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: null                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: null                      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: 8                         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 8                         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 8                         }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
