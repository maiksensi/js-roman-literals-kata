function numberToRoman(number) {
  let romanNumber = '';
  if (number === 1) {
    romanNumber = 'I';
  } else {
    romanNumber = `${number}`;
  }
  return romanNumber;
}

export default numberToRoman