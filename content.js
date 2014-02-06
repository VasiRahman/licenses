'use strict';

module.exports = require('./parser').extend({
  /**
   * Parse the markdown information from the package.
   *
   * @param {Object} data The package.json or npm package contents.
   * @param {Function} next Continuation.
   * @api public
   */
  parse: function parse(data, next) {
    data = this.get(data);

    //
    // We cannot detect a license so we call the callback without any arguments
    // which symbolises a failed attempt.
    //
    if (!data) return next();

    //
    // Optimize the matches by trying to locate where the licensing information
    // starts in the given content. Usually, we, as developers add it at the
    // bottom of our README.md files and prefix it with "LICENSE" as header.
    //
    data.split('\n').some(function some(line, index, lines) {
      if (/^.{0,7}\s{0,}?licen[cs]e[s]?.{0,2}\s{0,}?$/gim.test(line.trim())) {
        data = lines.slice(index).join('\n');
        return true;
      }

      return false;
    });

    var license = this.scan(data);
    if (!license) license = this.test(data);

    next(undefined, this.normalize(license));
  },

  /**
   * Is content based license detection an option for this package.
   *
   * @param {Object} data The package.json or npm package contents.
   * @returns {Boolean}
   * @api public
   */
  supported: function supported(data) {
    return !!this.get(data);
  },

  /**
   * Retrieve the only possible location of data. Which is the `readme` content
   * but that's only available for packages that are retrieved through npm.
   *
   * @param {Object} data The package.json or npm package contents.
   */
  get: function get(data) {
    if ('string' === typeof data) return data;
    return data.readme;
  }
});