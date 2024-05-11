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
      var numString = number.toString();
      if (numString.indexOf(".") === -1) {
        return { number: number, exponent: 0 };
      }
      var isNegative = numString.startsWith("-");
      if (isNegative) {
        numString = numString.substring(1);
      }
      numString = numString.replace(/^0+/, "");
      var decimalIndex = numString.indexOf(".");
      var numDigitsLeft = decimalIndex;
      var shift = numDigitsLeft - 1;
      var normalizedNumber = parseFloat(numString) / Math.pow(10, shift);
      var exponentAdjustment = shift >= 0 ? shift : -Math.abs(shift);
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
