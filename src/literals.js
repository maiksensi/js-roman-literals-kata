function numberToRoman(number) {
  let rest = 0;
  let romanNumber = '';

  if (rest == 0) {
    romanNumber = 'V';
  } else if (rest == 4) {
    romanNumber = `IV`;
  } else {
    for(let i =0; i < rest; i++) {
      romanNumber += 'I';
    }
    
  }
  return romanNumber;
}

export default numberToRoman