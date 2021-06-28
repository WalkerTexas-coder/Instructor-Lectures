var testArray1 = [3, 7, 10, 5, 4, 3, 3];
var testArray2 = [7, 8, 2, 3, 1, 5, 4];

const noDupe = (array1, array2) => {
  //add arrays make empty array for new
  let combined = [(array1 += array2)];
  let newArr = [];
  //loop over array checking each value
  for (let i = 0; i < combined.length; i++) {
    if (newArr.indexOf(combined[i] === -1)) {
      //push values to new array
      newArr.push(combined[i]);
    }
  }
  return newArr;
};
