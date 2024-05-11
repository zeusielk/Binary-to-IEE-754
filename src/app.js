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
    normalizeWithExponent(finalOut);

    function normalizeWithExponent(number) {
      // Convert number to string to handle floating point precision issues
      var numString = number.toString();

      // Check if the number is already normalized
      if (numString.indexOf(".") === -1) {
        // No decimal point, already normalized
        return { number: number, exponent: 0 };
      }

      // Check if the number is negative
      var isNegative = numString.startsWith("-");

      // Remove the negative sign if present
      if (isNegative) {
        numString = numString.substring(1);
      }

      // Remove leading zeros
      numString = numString.replace(/^0+/, "");

      // Find the index of the decimal point
      var decimalIndex = numString.indexOf(".");

      // Count the number of digits to the left of the decimal point
      var numDigitsLeft = decimalIndex;

      // Calculate the number of digits to shift
      var shift = numDigitsLeft - 1;

      // Shift the decimal point to the left
      var normalizedNumber = parseFloat(numString) / Math.pow(10, shift);

      // Calculate the exponent adjustment
      var exponentAdjustment = shift >= 0 ? shift : -Math.abs(shift);

      // Restore negative sign if necessary
      if (isNegative) {
        normalizedNumber *= -1;
      }

      console.log({ number: normalizedNumber, exponent: exponentAdjustment });
      biasSetup(exponentAdjustment);
    }

    function biasSetup(exp) {
      const biasNumber = 127;
      let newExp = biasNumber + exp;
      console.log(newExp);
      let expBinary = "";
      for (let i = 0; newExp > 0; i++) {
        expBinary += newExp % 2;
        newExp = Math.floor(newExp / 2);
      }
      let newReversedExp = expBinary.split("").reverse().join("");
      console.log(`Exponent binary = ${newReversedExp}`);
    }
    function finalOutputIie(sign, exponent, mantissa) {
      let newSign;
      if (sign >= 1) {
        newSign = 0;
        return;
      } else {
        newSign = 1;
        return;
      }
    }
  }
}

cutDecimal(0.6545);
