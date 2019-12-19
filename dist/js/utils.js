/* global Handlebars, dataSource */

export const utils = {}; // eslint-disable-line no-unused-vars

utils.minusDays = function(dateStr, days){
  const dateObj = new Date(dateStr);
  dateObj.setDate(dateObj.getDate() - days);
  return dateObj;
};