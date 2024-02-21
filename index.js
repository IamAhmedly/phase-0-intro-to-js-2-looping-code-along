// Code your solutions in this file
function writeCards(namesArray) {
    let messagesArray = [];
    for (let name of namesArray) {
      messagesArray.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messagesArray;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }