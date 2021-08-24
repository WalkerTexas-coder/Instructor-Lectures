# Set up
    $ cd into js-fundamentals-challenges
    $ git branch
    $ git status
    $ git checkout -b new-branch-name
    $ mkdir testing-a-s
    $ cd testing-a-s
    $ touch austin-sarah.test.js
    $ yarn add jest
###    Add the test    ###
    $ yarn jest

# Test Driven Development
https://www.youtube.com/watch?v=u6QfIXgjwGQ

The philosphy and practice of safely creating code. Different styles of testing are used for different levels of code interaction
 - Unit Test: Testing individual pieces of code (functions / methods)
                What we're gonna do today!
 - Intergration Test
 - End to End


## Red Green Refactor
 1. Writing our test and running it
    - Figurieng out our desired output
    - setting up the enviroment for our test
    - watch the test "fail" -- RED(good job)
2. Write the code that makes the test pass
    - problem solve the coding issue 
    - console.log("with tags", thingLogged) as needed
    - Make the test pass -- GREEN
3. Refactor your code
    - Clean up extra variables & console.logs
    - Make the code more readable / streamline
    - Keep checking your code with the testing suite

# Arrange Act Assert
 - https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/

 - https://docs.telerik.com/devtools/justmock/basic-usage/arrange-act-assert

Arrange – setup the testing objects and prepare the prerequisites for your test.

Act – perform the actual work of the test.

Assert – verify the result.

# Describe It Expect Syntax

```javascript
describe('The unit test to be created', ()=>{
    it('is a unit test that tests the unit',()=>{
        //Arrange
            //any avariables I might need to create
        //Act & Assert
        expect(thisFunct("with this var")).toEqual("this other thing")
    })
})
```
```javascript
describe('The unit test to be created', ()=>{
    test('is a unit test that tests the unit',()=>{
        //Arrange
            //any avariables I might need to create
        //Act & Assert
        expect(thisFunct("with this var")).toEqual("this other thing")
    })
})
```

```javascript 
describe('an array sorter',()=>{
    it('takes an array and returns it sorted',()=>{
        //Arrange
            //any avariables I might need to create
        //Act & Assert
        expect(sorter([2, 67, -45, 15, -4, 50]).toEqual([-45, -4, 2, 15, 50, 67]))
    })
})

const sorter = (array) => {
    return array.sort((a, b) => a - b)
}
```