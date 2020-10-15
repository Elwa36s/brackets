module.exports = function check(str, bracketsConfig) {
let string = str.split(''),
    stack = [],
    openingBracket = [],
    closingBracket = [],
    openSymb,
    closeSymb;
for (let i = 0; i < bracketsConfig.length; i++) {
    let symb = bracketsConfig[i];
    openingBracket.push(symb[0]);
    closingBracket.push(symb[1]);
}
console.log('open: ' + openingBracket);
console.log('close: ' + closingBracket);
for (let i = 0; i < string.length; i++) {
  openSymb = openingBracket.indexOf(string[i]);
  if (openSymb !== -1) {
    stack.push(openSymb);
    //continue;
  }
  closeSymb = closingBracket.indexOf(string[i]);
  if (closeSymb !== -1) {
    openSymb = stack.pop();
    if (closeSymb !== openSymb) {
      return false;
    }
  }
}
if (stack.length !== 0) {
  return false;
}
return true;
}
