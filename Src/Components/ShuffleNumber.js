import React, {Component} from 'react';
class ShuffleNumber extends Component {
  shuffleNumber(numbersArray) {
    var temp,
      current,
      top = numbersArray.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        temp = numbersArray[current];
        numbersArray[current] = numbersArray[top];
        numbersArray[top] = temp;
      }
    return numbersArray;
  }
  genRandomNum(n) {
    var numbersArray = Array.from(Array(n).keys());

    for (let index = 0; index < numbersArray.length; index++) {
      numbersArray[index] = numbersArray[index] + 1;
    }

    var randomA = Math.floor(Math.random() * numbersArray.length);

    const a = numbersArray[randomA];
    return a;
  }
  genModify(result) {
    var tempResults = [];
    tempResults.push(
      result - 4,
      result - 3,
      result - 2,
      result - 1,
      result + 1,
      result + 2,
      result + 3,
      result + 4,
    );
    return tempResults;
  }
}

const sn = new ShuffleNumber();

export default sn;
