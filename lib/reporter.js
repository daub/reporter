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

    console.warn.call(console, str, options);
};
