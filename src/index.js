module.exports = function check(str, bracketsConfig) {
    let string = str,
        openingBracket = [],
        closingBracket = [],
        openSymb,
        closeSymb;
    const stack = [];
     
    for (let i = 0; i < bracketsConfig.length; i++) {
        let symb = bracketsConfig[i];
        openingBracket.push(symb[0]);
        closingBracket.push(symb[1]);
    }
    
    for (let i = 0; i < string.length; i++) {
      openSymb = openingBracket.indexOf(string[i]);
      closeSymb = closingBracket.indexOf(string[i]);
      if (openSymb !== closeSymb) {
      if (openSymb !== -1) {
        stack.push(openSymb);
      }
     
      if (closeSymb !== -1) {
        openSymb = stack.pop();
        if (closeSymb !== openSymb) {
          return false;
        }
      }
     }
     let lastBracket = stack[stack.length - 1];
         if (lastBracket === undefined) {
             stack.push(openSymb);
             continue;
         }
         if ((lastBracket === openSymb) && (closeSymb !== -1)) {
             openSymb = stack.pop();
              if (closeSymb !== openSymb) {
          return false;
         }
     } else {
         stack.push(openSymb);
     }
    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
    }
