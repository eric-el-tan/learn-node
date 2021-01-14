const { test, expect } = require("@jest/globals");
const moment = require("moment");

test("moment object", () => {
  console.log(`moment: ${moment("2019-06-04 15:35:32.765")}`);
  console.log(
    `moment(json): ${JSON.stringify(moment("2019-06-04 15:35:32.765"))}`
  );
  expect(
    moment("2019-06-04 15:35:32.765").isSame("2019-06-04 15:35:32.765")
  ).toBe(true);
});

test("daylight saving affect date difference: Apr 06 - Apr 05: 1.041 days", () => {
  let s1 = "2020-04-05";
  let s2 = "2020-04-06";
  let start = moment(s1, "YYYY-MM-DD").startOf("day");
  let end = moment(s2, "YYYY-MM-DD").startOf("day");
  console.log(`start: ${start} - end: ${end}`);
  console.log(`start: ${JSON.stringify(start)} - end: ${JSON.stringify(end)}`);

  let daysOfCountable = Math.abs(moment.duration(start.diff(end)).asDays());
  console.log(`daysOfCountable: ${JSON.stringify(daysOfCountable)}`);

  expect(daysOfCountable !== 1.0).toBe(true);
});

test("daylight saving affect date difference: Apr 07 - Apr 06: 1 days", () => {
  let s1 = "2020-04-06";
  let s2 = "2020-04-07";
  let start = moment(s1, "YYYY-MM-DD").startOf("day");
  let end = moment(s2, "YYYY-MM-DD").startOf("day");
  console.log(`start: ${start} - end: ${end}`);
  console.log(`start: ${JSON.stringify(start)} - end: ${JSON.stringify(end)}`);

  let daysOfCountable = Math.abs(moment.duration(start.diff(end)).asDays());
  console.log(`daysOfCountable: ${JSON.stringify(daysOfCountable)}`);

  expect(daysOfCountable === 1.0).toBe(true);
});

test("remove timezone", () => {
  let s1 = "2020-04-01";
  let s2 = "2020-04-06"; // float number
  let start = moment(s1, "YYYY-MM-DD").startOf("day").utc(true); // .utc(true) to remove timezone
  let end = moment(s2, "YYYY-MM-DD").startOf("day").utc(true);
  console.log(`start: ${start} - end: ${end}`);
  console.log(`start: ${JSON.stringify(start)} - end: ${JSON.stringify(end)}`);

  let daysOfCountable = Math.abs(moment.duration(start.diff(end)).asDays());
  console.log(`daysOfCountable: ${JSON.stringify(daysOfCountable)}`);

  expect(daysOfCountable === 5).toBe(true);
});

test.only("date difference between Jan 1 and Dec 31", () => {
  let s1 = "2020-04-01";
  let s2 = "2020-04-06"; // float number
  let start = moment(s1, "YYYY-MM-DD").startOf("year").utc(true); // .utc(true) to remove timezone
  let end = moment(s2, "YYYY-MM-DD").endOf("year").startOf("day").utc(true); // endOfYear n startOfDay -> Dec 31 00:00:00
  console.log(`start: ${start} - end: ${end}`);
  console.log(`start: ${JSON.stringify(start)} - end: ${JSON.stringify(end)}`);

  let daysOfCountable = Math.abs(moment.duration(start.diff(end)).asDays());
  console.log(`daysOfCountable: ${JSON.stringify(daysOfCountable)}`);

  expect(daysOfCountable === 365).toBe(true);
});
