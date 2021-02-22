const moment = require("moment");

function tryToSortDateStr() {
    // let vals = ["a","hello","b","goodbye"];
    // let vals = ['2021-12-31','2021-12-30','2020-05-21'];
    let vals = ["2021-07-01","2022-07-01","2023-07-01","2024-07-01","2021-02-01","2022-02-01","2023-02-01","2024-02-01"];
    console.log(vals);
    vals.sort();
    // vals.sort((a,b) => b.y - a.y);
    console.log(vals);

    return true;
}

function tryToSortDate() {
    // let vals = ["a","hello","b","goodbye"];
    let vals = [ toDate('2021-12-31'),toDate('2021-12-30'),toDate('2020-05-21')];
    console.log(vals);
    // vals.sort();
    vals.sort((a,b) => a.diff(b));
    console.log(vals);

    return true;
}

function toDate(dateStr) {
    return moment(dateStr, "YYYY-MM-DD").utc(true);
}

module.exports = [tryToSortDateStr, tryToSortDate];