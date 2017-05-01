/**
 * Returns the versions of node-flif and the flif executable.
 * @return {object} Contains keys for nodeFLIF and flif that contain a string of the versions.
 */
function version () {
    var fs = require('fs');
    var path = require('path');
    var manifest = fs.readFileSync(path.join('package.json'), 'utf-8');
    manifest = JSON.parse(manifest);
    var versionInfo = {
        'nodeFLIF': manifest.version,
        'flif': manifest.flifVersion
    };
    return versionInfo;
}

module.exports = version;
