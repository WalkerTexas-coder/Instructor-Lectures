Talk Flow
# Cat Tinder Intro
## Tools
  - Trello
  - Github
  - Wireframe
  - React
  - Reactstrap
  - ReactRouter
  - Mock Data

## Trello
  - Kanban boards and agile development
  - Kanban boards highlight two things
    - time 
    - tasks
  - Generally kanban boards have something called swim lanes, Trello is no different
  - A kanban board system will usually have boards that represent three concepts
    - to-do 
    - doing
    - done
  - Our trellos have been pre populated to get you used to the trello baord system
  - You do not need to augment these cards or boards



## Github
  - We are using a process that we've only used a few times now but the goal I have is that you will all understand whats going on here. 
  - If you want to make your own projects this is the process you will use. 
  - GHCR
  - Creating a branch with the name of each CARD



## Creating Basic code for the class components 

```javascript
class App extends Component{
  render(){
    return(

    )
  }
}
export default App
```


```javascript
import React, { Component } from 'react'
import Header from './components/Header' 
import Footer from './components/Footer' 
import CatIndex from './components/CatIndex' 
import CatShow from './components/CatShow' 
import CatNew from './components/CatNew' 
import CatEdit from './components/CatEdit' 
import NotFound from './components/NotFound' 
```


## Reactstrap
` yarn add ...`
` yarn add ... `
import in index.js





## React-Router-Dom
 - everything is showing up all at once and thats not the goal
 ### SPA
 
 - running js in the browser
 - no request response cycles like rails
 - third party package r-r-d
 - we want to take a moment and install it to our project

`$ yarn add react-router-dom@5.3.0`
 - with that we cna checkout out the package json again and see that it has been updated with r-r-d

## Mock Data


## Styled components
- insert a style for a navbar w/o dropdown
- footer style as well