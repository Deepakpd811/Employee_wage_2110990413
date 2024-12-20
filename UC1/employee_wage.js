PART_TIME = 4;
FULL_TIME = 6;
NO_TIME = 0;
PER_HOUR_WAGE = 20;
WORKING_DAY_IN_MONTH = 20;

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

  return x === 0 ? true : false;
}

function calculateMonthlyWage() {
  let totalMonthlyWage = 0;

  for (let i = 0; i < WORKING_DAY_IN_MONTH; i++) {
    if (isPresent) {
      let workingHour = getHour();
      totalMonthlyWage += workingHour * PER_HOUR_WAGE;
    }
  }
  return totalMonthlyWage;
}

console.log(calculateMonthlyWage());
