PART_TIME = 4;
FULL_TIME = 6;
NO_TIME = 0;
PER_HOUR_WAGE = 20;

const isPresent = Math.floor(Math.random() * 2);

if (isPresent == 1) {
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

  console.log(workhour);
} else {
  console.log("Absent");
}
