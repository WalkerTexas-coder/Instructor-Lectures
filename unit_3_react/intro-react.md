# React Intro 

A JavaScript library for building user interfaces.
- [react](https://reactjs.org/)
  - Meta
  - Netflix
  - Uber
  - Yahoo!
  - Airbnb
  - Atlassian
  - Dropbox
  - NYT
  - Zendesk
  - Asana
  
- Library - collection of code snippets for developers to use in specific ways
- JavaScript library - code snippets are node modules
- Package manager - yarn, organizes and manages the node modules

### React
- Scalable
- Reusable
- User interactions focused
- Component based - built from little pieces like a tile mosaic

### Scalable
- thinking about how your app will grow
- React was created so Facebook could scale from only holding students for ivy league schools to colleges around and eventually the whole world

### Reusable
- Components
  - functions are reusable
  - functions return data including objects 
    - objects have data (some kind of data type) and behavior (method)
    - Objects can hold JSX

### User Interactions
- Virtual DOM - listening for a diff, identify which HTML tags were affected, update only the tags that need to be updated
  - Node - HTML tags when looking at the code through the lens of the DOM (named after a tree, leaves, etc)
  - DOM - document object model, visual representation of your code


### React Components
- Functions
- return
- inside the return is markup - JSX (JavaScript XML) combo of HTML and JavaScript
- Component Call/ Invocation: <HelloReact />


### Errors?
- Look in the console
  - JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
  - Fragments - empty opening and closing tags that don't create an additional node in the DOM

### Create React App
- yarn create react-app folder-name
- yarn start - fires up the server at localhost:3000
- control + c - stops the server
- files we care about:
  - public/index.html
  - src/index.js
- file we will work in:
  - src/App.js
  - src/App.css
