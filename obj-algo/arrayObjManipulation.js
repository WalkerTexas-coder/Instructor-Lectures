var people = [
    { name: "ford prefect", occupation: "hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
  

  
  
  // b) Create the function that makes the test pass.


// ***** STEP ONE ***** 

// write a function that takes in an array
const peopleJob = (array) => {
    return
}

// ***** STEP TWO ***** 

// Use forEach to loop over each object in the array
const peopleJob = (array) => {
    array.forEach((array) => {
        // Just console log to see the name on each object
        console.log(object.name)
    })
    return
}

// ***** STEP THREE *****

const peopleJob = (array) => {
    array.forEach((object) => {
        // split each name
        let splitName = object.name.split(" ");
        console.log(splitName)
    })
    return
}

// ***** STEP FOUR *****

const peopleJob = (array) => {
    array.forEach((object) => {
        let splitName = object.name.split(" ");
        // Map over the name, which is an array of the first and last name, and capitalize the first letter in each string
        let mappedName = splitName.map(value => {
            // Uppercase the first letter in the first name and last name. Remember that the first letter is at index "0" in the string. Then add the remainder of the name onto that capitalized letter with slice (look up slice)
            let upperCasedName = value[0].toUpperCase() + value.slice(1);
            // console log to see what you have
            console.log(upperCasedName);
            return upperCasedName
        })
    })
    return
}


// ***** STEP FIVE *****

const peopleJob = (array) => {
    array.forEach((object) => {
        let splitName = object.name.split(" ");
        let mappedName = splitName.map(value => {
            let upperCasedName = value[0].toUpperCase() + value.slice(1);

            return upperCasedName
        })

        // console log mappedName here to see what you have
        console.log(mappedName)

        // Join the first and last name together back into one string
        let joinedCapitalizedName = mappedName.join(" ");
        
        // console log 
        console.log(joinedCapitalizedName)
    })
    return
}

// ***** STEP SIX *****

const peopleJob = (array) => {
    array.forEach((object) => {
        let splitName = object.name.split(" ");

        let mappedName = splitName.map(value => {
            let upperCasedName = value[0].toUpperCase() + value.slice(1);

            return upperCasedName
        })

        let joinedCapitalizedName = mappedName.join(" ");

        // Use string interpolation to create a sentence for each person with their capitalized name and their occupation.
        // Remember that we are still inside the forEach, so we can still access the whole object from the forEach (look at line 111)

        let sentence = `${joinedCapitalizedName} is a ${object.occupation}.`
        // console log the sentence
        console.log(sentence)
    })
    return
}

// ***** STEP SEVEN *****

// REMEMBER to look back at what the expected output is. We need to return an array of the sentences that we have created. 
const peopleJob = (array) => {
    // Create an empty array to hold each sentence that we create
    let arrayOfSentences = [];

    array.forEach((object) => {
        let splitName = object.name.split(" ");

        let mappedName = splitName.map(value => {
            let upperCasedName = value[0].toUpperCase() + value.slice(1);

            return upperCasedName
        })

        let joinedCapitalizedName = mappedName.join(" ");

        let sentence = `${joinedCapitalizedName} is a ${object.occupation}.`
        // Push each sentence that we create for each object into the variable that we created above
        arrayOfSentences.push(sentence);
    })
    // return the array of sentences that we created
    return arrayOfSentences
}

// ***** STEP EIGHT *****

// Refactor
const peopleJob = (array) => {
    // Create an empty array to hold each sentence that we create
    let arrayOfSentences = [];

    array.forEach((object) => {
        let splitName = object.name.split(" ").map(value => {
            let upperCasedName = value[0].toUpperCase() + value.slice(1);

            return upperCasedName
        }).join(" ");

        let sentence = `${splitName} is a ${object.occupation}.`
        arrayOfSentences.push(sentence);
    })
    return arrayOfSentences
}

console.log(peopleJob(people));