// TASK1
const firstRow = prompt("First row: ");
const secondRow = prompt("Secondr row: ");
const symbol = prompt("Your symbol: ");

let firstRowSymbSum = 0;
let secondRowSymbSum = 0;
let result = 0;

const RowASymbol = (row1, row2) => {
  for (let i = 0; i < row1.length; i++) {
    if (row1.charAt(i) == symbol) {
      firstRowSymbSum++;
    }
  }
  for (let i = 0; i < row2.length; i++) {
    if (row2.charAt(i) == symbol) {
      secondRowSymbSum++;
    }
  }

  result = firstRowSymbSum + secondRowSymbSum;

  console.log(`First row has ${firstRowSymbSum} '${symbol}' symbols`);
  console.log(`Second row has ${secondRowSymbSum} '${symbol}' symbols`);

  if (firstRowSymbSum > secondRowSymbSum) {
    console.log(`First row win: ${firstRow}`);
  } else if (firstRowSymbSum < secondRowSymbSum) {
    console.log(`Second row win: ${secondRow}`);
  } else {
    console.log(firstRow);
    console.log(secondRow);
  }
};

RowASymbol(firstRow, secondRow);

// TASK2
// const telnumber = prompt("Enter phone number: ");

// function formattelephone(phone) {
//   let formNumber = "";
//   let newNumber = "";
//   formNumber = phone;

//   if (formNumber.length == 11) {
//     if (
//       formNumber.charAt(0) == "7" ||
//       formNumber.charAt(0) == "8" ||
//       formNumber.charAt(0) == "9"
//     ) {
//       formNumber = formNumber.substr(1);
//       formNumber = "+7" + formNumber;
//     } else {
//         console.log("Invalid number");
//       return;
//     }
//   } else if (
//     formNumber.length != 12 ||
//     formNumber.charAt(0) != "+" ||
//     formNumber.charAt(1) != "7"
//   ) {
//     console.log("Invalid number");
//     return;
//   }

//   phone = formNumber;

//   for (let i = 0; i < phone.length; i++) {
//     newNumber += phone.charAt(i);

//     if (phone.charAt(i) == "7") {
//       if (phone.charAt(i - 1) == "+") {
//         newNumber += " (";
//       }
//     }

//     if (i == "4") {
//       newNumber += ") ";
//     }

//     if (i == "7") {
//       newNumber += "-";
//     }

//     if (i == "9") {
//       newNumber += "-";
//     }
//   }

//   console.log(`Format number: ${newNumber}`);
// }

// formattelephone(telnumber);
