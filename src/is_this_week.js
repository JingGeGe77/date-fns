var isSameWeek = require('./is_same_week')

/**
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param {Date|String|Number} date to check
 * @param {Number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {Boolean} the date is in this week
 */
var isThisWeek = function(dirtyDate, weekStartsAt) {
  return isSameWeek(new Date(), dirtyDate, weekStartsAt)
}

module.exports = isThisWeek

