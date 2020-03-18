module.exports = function check(str, bracketsConfig) {
  console.log('sdadsd')
  const strLen = str.length
  if (str.length % 2 != 0) {
    return false;
  }

  let tempVal = []

  // length should be 0 to return true
  for (var i = 0; i < strLen; i++) {
    //loop throught each
    for (let j = 0; j < bracketsConfig.length; j++) {


      if (str[i] == bracketsConfig[j][1] && tempVal[0] == bracketsConfig[j][0]) {
        //в цикл "j" порівняй перший "1" елемент або нульовий елемент [0]

        tempVal.shift();

      } else if (str[i] == bracketsConfig[j][0]) {
        tempVal.unshift(str[i]);
      };
    };
  };
  let len = tempVal.length;
  return len == 0;
};

