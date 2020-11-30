let num = 7;

if (num < 4 || num > 10) {
  console.log("Invalid number");
} else if (num % 2 != 0) {
  for (i = 0; i < num; i++) {
    let output = "";

    for (j = 0; j < num; j++) {
      if (i == 0 || i == num - 1) {
        output += "#";
      } else if (j == Math.floor(num / 2)) {
        output += "|";
      } else {
        output += " ";
      }
    }
    console.log(output);
  }
} else if (num % 2 == 0) {
  for (i = 0; i < num; i++) {
    let output = "";

    for (j = 0; j < num; j++) {
      if (i == 0 || i == num - 1) {
        output += "#";
      } else if (j == num / 2 - 1 || j == num / 2) {
        output += "|";
      } else {
        output += " ";
      }
    }
    console.log(output);
  }
}
