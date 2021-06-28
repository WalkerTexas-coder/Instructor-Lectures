let arry1 = ["purple", "blue", "green", "yellow", "pink"];
let arrayShuffle = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let newPos = Math.floor(Math.random() * (i + 1)); //
    temp = arr[i]; // declare a variable. temp is equal to arr[i].
    arr[i] = arr[newPos]; // place the new pos
    arr[newPos] = temp; // place what he have in temp, swap which is what the loop is doing
  }
  return arr; // returning array
};
let newArray = arrayShuffle(arry1); // testing array to see if the array will shuffle
console.log(newArray);
