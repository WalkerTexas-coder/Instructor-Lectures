
// In mathematics, a subsequence of a given sequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements.

// [5,1,22,25,6,-1,8,10]
// [1,25,-1,10]

// the first array here that starts with 5 and ends with ten is a squence of integers
// and if we are to remove some of the integers and leave others we would be left with an array that is exactly like this second array here-- Making it a subsequence.


// because the order of the sequnce and the subsequence matter-- we're actually looking for the first element in the "potoential" Sub-sequence.
// So it doesn't matter if we find other elements in the array what matters first is that we find a "1"
// so we are going to create a pointer something that looks at the array for us and "traverse the array" until we find the first element in our subsequence which we will have our second pointer pointing too.

// so using our larger arrays pointer we can set up a for loop and traverse the array while looking for the first value in the potential subsequence array

// does 5 equal one? no move the big pointer
// does 1 equal 1? yes move the small pointer and the Big pointer because the order matters
// does 22 equal 25? no move the big pointer
// does 25 equal 25? yes move both pointers
// etc...

const isValidSubsequence = (array, sequence) => {
    let arrIndex = 0
    let seqIndex = 0
    for(let i=0; i<array.length; i++){
       for(let j=0; j<sequence.length; j++){
           if(array[i]===sequence[j]) {
               seqIndex++;
           }
           arrIndex++;
        }
    }
    return seqIndex === sequence.length;
}

const isValidSubsequence = (array, sequence) => {
    let arrIndex = 0
    let seqIndex = 0
    while(arrIndex < array.length && seqIndex < sequence.length){
        if(array[arrIndex]=== sequence[seqIndex]) seqIndex++;
        arrIndex;
    }
    return seqIndex === sequence.length
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10],[1,25,-1,10]))
