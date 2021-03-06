/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyEffort (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 0;
    var upperBounds = 100;

    if (
        params.effort === null ||
        params.effort === false ||
        params.effort &&
        typeof(params.effort) !== 'number' ||
        typeof(params.effort) === 'number' && params.effort < lowerBounds ||
        typeof(params.effort) === 'number' && params.effort > upperBounds ||
        typeof(params.effort) === 'number' && params.effort % 1 !== 0 ||
        typeof(params.effort) === 'number' && src === 'decode'
    ) {
        warnUser('The effort parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyEffort;
