Create React App 12/15/21

Yesterday we looked at react as a JavaScript component that allows for us as developers to instantiate classes as individual components and display them as many time as we like. 
Each of these class components can be thought of as legos or building blocks that we can use to build robust websites. React is a lot more than just simple JavaScript components rendering HTML-- React has an entire eco system of libraries and modules that can be brought in from other developers. In fact Facebook built React with as little extra features as possible to encourage developers to create their own additions and modification to the platform. 

So how do we gain access to all this wonderful magic made by computer wizards around the world? That where I am going to reintroduce you to yarn. Yarn or "Yet another resource negotiator" is a JavaScript package manager also built by Facebook that optimizes build and download times of the packages. 

Using yarn and a special command called create react app -- we can have the our yarn software build us a new website that can be run locally in a less than a minute. 


The process looks like this
1. First I navigte to where I want to build my new project
2. I run the command $ yarn create react-app <name of app goes here>
3. next I cd into the app that has been created
4. from here I run $ yarn start
5. Boom! Just like that we have a running app that I can update and hack around in

I want to take you on a little tour of the app
- index.html
- public
- src
- App.css
- App.js

Currently our App.js is a functional component. This is the new normal for react apps. Functional components are very simple as they are just a single function whose job is to return to us some JSX.

We want our App.js to handle some more complex data management using OOP so we need to set up our App.js as a class component. 

```javascript
import React, { Component } from 'react'

class App extends Component{
  render(){
    return(
      <>
        <h1>A Basic Class Component</h1>
      </>
    )
  }
}

export default App
```
```javascript
// We're using React and destructuring Component from the React library
import React, { Component } from 'react'

// We create a new component that extends the Component class, which React provides
class App extends Component{

  // Render is a React lifecycle method
  // When the component is first put on the page, and every time something changes in our component, the render function runs automatically
  render(){

    // The render method returns JSX
    // React apps use a hybrid markup language called JSX to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser
    return(
      // React fragments are used to wrap all the markup tags
      <>
        <h2>Welcome to React</h2>
      </>
    )
  }
}

// Every component must be exported
export default App
```

Cool this is a basic SPA 
next up we need to build some of our building blocks so that we can use them
in the src folder we need to create a folder called components
these components will be pieces we can use over and again throughout our app if we want

Although the first one we are going to make is the Header compoennt
in components I create a new file and call it Header.js
inside that file I create a a class called header that extends component uses the render lifecycle method and returns some jsx

```javascript
import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <>
        <h1>This is the header</h1>
      </>
    )
  }
}

export default Header
```
now that that is built I want to make it available to my SINGLE PAGE APP in App.js
 so in App.js 

```javascript
import React, { Component } from 'react'
import Header from './component/Header'

class App extends Component {
  render(){
    return(
      <>
        <Header />
    //     ^ can anyone tell me what this is called right here
      </>
    )
  }
}

export default App
```
Next up we are going to make a list of favorite books


```javascript
import React, { Component } from 'react'

class Books extends Component{
  render(){
    return(
      <>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
      </>
    )
  }
}

export default Books
```
Same as before I am going to import that new building block into my app 
```javascript 
import React, { Component } from 'react'
import Header from './component/Header'
import Books from './component/Book'

class App extends Component {
  render(){
    return(
      <>
        <Header />
        <Books />
      </>
    )
  }
}

export default App
```


```javascript 
import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <>
        LEARN Academy
        <br />
        Echo 2021
      </>
    )
  }
}

export default Footer
```


```javascript 
import React, { Component } from 'react'
import Header from './components/Header'
import Books from './component/Book'
import Footer from './components/Footer'

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Books />
        <Footer />
      </>
    )
  }
}

export default App
```


So recap: 
We used yarn as our package manager and the Create React App Command to build ourselves a working react app

We updated the app to use class components

We set up a components folder we we can build out individual pieces of our app and bring them together in our App.js

We imported and called upon the components in our App.js

We can see all the changes we have made while we were making them


# Running down the challenges 