/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyMaxFrameLookBack (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (
        params.maxFrameLookBack === false ||
        params.maxFrameLookBack === true ||
        params.maxFrameLookBack === null ||
        params.maxFrameLookBack && typeof(params.maxFrameLookBack) !== 'number' ||
        typeof(params.maxFrameLookBack) === 'number' && params.maxFrameLookBack < -1 ||
        typeof(params.maxFrameLookBack) === 'number' && params.maxFrameLookBack > 256 ||
        typeof(params.maxFrameLookBack) === 'number' && params.maxFrameLookBack % 1 !== 0 ||
        typeof(params.maxFrameLookBack) === 'number' && src === 'decode'
    ) {
        warnUser('The maxFrameLookBack parameter must be a whole number between -1 and 256.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyMaxFrameLookBack;
