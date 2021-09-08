
//PROMPT 
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers 

 const isValidSubsequence = (array, seq) => {
     return
 }


//HINT
//You can solve this question by iterating through the main input array once.

// HINT
// Iterate through the main array, and look for the first integer in the potential subsequence. If you find that integer, keep on iterating through the main array, but now look for the second integer in the potential subsequence. Continue this process until you either find every integer in the potential subsequence or you reach the end of the main array.

//HINT
// To actually implement what Hint #2 describes, you'll have to declare a variable holding your position in the potential subsequence. At first, this position will be the 0th index in the sequence; as you find the sequence's integers in the main array, you'll increment the position variable until you reach the end of the sequence.

//SPACE TIME COMPLEXITY = O(n) time | O(1) space - where n is the length of the array.

// Solution

// const isValidSubsequence = (array, sequence)=> {
// 	let arrIndx = 0
// 	let seqIndx = 0
// 	while (arrIndx < array.length && seqIndx < sequence.length) {
// 		if (array[arrIndx] === sequence[seqIndx]) seqIndx++;
// 		arrIndx++;
// 	}
// 	return seqIndx === sequence.length
// }
