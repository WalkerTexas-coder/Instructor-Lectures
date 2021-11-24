- clarify and write the problem
- input output
- time limit
- pseudo code Everything

Tips and tricks
- Write pseudo tests using words like "expect" and "describe"

- Ask if there is a time limit

- Go the long way and refactor if you have time

- It is okay to say you don't know, but follow it with a plan

- Solve a simpler version of the problem

Questions to ask ahead of time
- Do you have a particular language you would like me to use?

- I am comfortable with both JavaScript and Ruby but since each language has its strengths, can I hear the prompt before I make my decision?

Prompt: Create a function that will take a multi digit number that will add the digits together until the number gets down to a single digit
// ask questions to clarify
// edge cases - would I deal with a situation that is not a number, could I have negative numbers
// input/output ex: if I was writing a spec for this i would expect that an input of 555 should equal the output of 6
// do you have an input you would like me to use?
// pseudo code the process:

- split

- add them together

- check the length - or if it is greater than 10

- actually I would specifically want to check that the number was 1-9 because less than 10 could include negative numbers

- if it is not a single digit then I would repeat the process if the condition is not met

- realize: that this process could potentially be repeated many, many times so I will start with meeting the condition of my test case 
but I would want to think about the scalability - probably do some research into how I could make this repeatable process more efficient, I imagine this is a pretty good case for a recursive function

- I know I need to keep track of my data types because split will return a string

- Actually I don't think I can even call split on a number - am I remembering correctly that split is a string method?

- another option is to use the higher order function reduce but I have never managed to memorize all the optional arguments for reduce so I would go to their MDN page and refresh my memory before I started this project in earnest

- but either way I need an iterator and the one I am really familiar with is .map so I'll use that for now