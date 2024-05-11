function cutDecimal(decimalNumber) {
  if (decimalNumber > 0) {
    let integerPart = Math.floor(decimalNumber);
    let decimalPart = decimalNumber - integerPart;
    decimalToBinary(integerPart, decimalPart);
    console.log(integerPart, decimalPart);
  }
}

function decimalToBinary(integer, decimalPart) {
  let arraydeci = "";
  for (let i = 0; integer > 0; i++) {
    arraydeci += integer % 2;
    integer = Math.floor(integer / 2);
  }
  let reverseDesi = arraydeci.split("").reverse().join("");

  decimalPartToBinary(decimalPart, 6);
  function decimalPartToBinary(decimalPart, precision = 8) {
    let binary = "";

    for (let i = 0; i < precision; i++) {
      decimalPart *= 2;
      if (decimalPart >= 1) {
        binary += "1";
        decimalPart -= 1;
      } else {
        binary += "0";
      }
    }
    let finalOut = reverseDesi + "." + binary;
    console.log(finalOut);
    nomalize(finalOut);
  }

  // FUNCTION FOR NOMALIZE
  function nomalize(nonNomalized) {
    if (nonNomalized >= 1) {
      // shifting floating point to left
    } else {
      //shifting floating point to right
    }
  }
}

cutDecimal(15.65);
