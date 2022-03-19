// Code your solutions in this file

function writeCards(name) {
  let newArr = [];
  let nam = 0;
  for (let i = 0; i < name.length; i++) {
    nam = `Thank you, ` + name[i] + `, for the wonderful surprise gift!`;
    newArr.push(nam);
  }

  return newArr;
}

function countDown(num) {
  for (let j = 0; j <= num; num--) {
    console.log(num);
    // debugger;
  }
}
