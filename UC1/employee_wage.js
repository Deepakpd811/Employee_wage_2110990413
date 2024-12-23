PART_TIME = 4;
FULL_TIME = 8;
NO_TIME = 0;
PER_HOUR_WAGE = 20;
WORKING_DAY_IN_MONTH = 20;
MAX_WORKING_HOUR_IN_MONTH = 160;

function getHour() {
  const x = Math.floor(Math.random() * 3);
  let workhour;

  switch (x) {
    case 0:
      workhour = 0;
      break;
    case 1:
      workhour = PART_TIME;
      break;
    case 2:
      workhour = FULL_TIME;
      break;

    default:
      workhour = 0;
      break;
  }
  return workhour;
}

function isPresent() {
  const x = Math.floor(Math.random() * 2);

  return x === 0 ? "Absent" : "Present";
}

function calculateWageTill() {
  let totalHour = 0;
  let day = 1;
  let totalWage = 0;

  while (totalHour < MAX_WORKING_HOUR_IN_MONTH && day <= WORKING_DAY_IN_MONTH) {
    let workingHour;
    let presence = isPresent()
    if (presence==="Present") {
      workingHour = getHour();
      totalWage += workingHour * PER_HOUR_WAGE;
      totalHour += workingHour;
      console.log(
        `in Day ${day} person is present and workingHour is ${workingHour} and wage till day is ${totalWage}  `
      );
    } else {
      console.log(
        `in Day ${day} person is Absent and workingHour is ${workingHour} and wage till day is ${totalWage}  `
      );
    }
    day++;
  }
  console.log("total working hour in month " + totalHour);
  console.log("Day " + day);
  return totalWage;
}

console.log(calculateWageTill());
