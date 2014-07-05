/**
 * Wrapper for `console.warn`,
 * could be replaced with a custom logger.
 *
 * @param {String} str
 * @param {Object} options
 * @api private
 */

module.exports = function (str, options) {
    if (str == void 0)
        return str;

    var info = '';

    if (options)
        info = coordinates(options.index, options.source);

    console.warn.call(console, str, info);
};

function coordinates(index, source) {
    if (!index || !source)
        return void 0;

    var lines = source
            .slice(0, index)
            .split('\n');

    return lines.length + ':' + lines.pop().length;
}
