export function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}

export function getToday() {
  const date = new Date();
  const dateOnly = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  // console.log(`dateOnly = ${dateOnly}`);
  return dateOnly;
}

export function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  // console.log(`result = ${result}`);
  return result;
}

export function formatStrToDate(dateStr) {
  const regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
  console.log(`dateStr: ${dateStr}`);
  console.log(`dateStr.match(regex): ${dateStr.match(regex)}`);
  if (dateStr.match(regex)) {
    return dateStr;
  }
  return formatDate(getToday());
}
