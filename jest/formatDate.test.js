const { test, expect } = require("@jest/globals");
const moment = require("moment");

test.only("date difference between Jan 1 and Dec 31", () => {
  let s1 = "2020-02-01";
  let s2 = "2021-01-31";

  let start = moment(s1, "YYYY-MM-DD").startOf("year").utc(true); // .utc(true) to remove timezone
  let end = moment(s2, "YYYY-MM-DD").endOf("year").startOf("day").utc(true); // endOfYear n startOfDay -> Dec 31 00:00:00
  console.log(`start: ${start} - end: ${end}`);
  console.log(`start: ${JSON.stringify(start)} - end: ${JSON.stringify(end)}`);

  let daysOfCountable = Math.abs(moment.duration(start.diff(end)).asDays());
  console.log(`daysOfCountable: ${JSON.stringify(daysOfCountable)}`);

  expect(daysOfCountable === 365).toBe(true);


  // function addYears(date: moment.Moment, years: number): moment.Moment {
  //   let UNIT_YEAR: moment.unitOfTime.DurationConstructor = 'year';
  //   return date.add(years, UNIT_YEAR);
  // }
  
  // function subtractDays(date: moment.Moment, days: number): moment.Moment {
  //   let UNIT_DAY: moment.unitOfTime.DurationConstructor = 'days';
  //   return date.subtract(days, UNIT_DAY);
  // }
  
});
