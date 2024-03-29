# Testing Lecture
 So today we're going to be getting into two testing suites - jest and enzyme. 

- Jest we've interacted with before - it was built by Facebook for purpose is a bit deeper than what we have used it for int the past. React comes bundled with Jest; it does not need to be installed separately.
- Jest acts as a test runner, assertion library, and mocking library.
- Jest also provides Snapshot testing, the ability to create a rendered ‘snapshot’ of a component and compare it to a previously saved ‘snapshot’. The test will fail if the two do not match. This would be a good subject for a tech talk abut we wont be dealing with it today. Today we are going to be using a different tool called "Enzyme"
- Enzyme, created by Airbnb, adds some great additional utility methods for rendering a component (or multiple components), finding elements, and interacting with elements.

### Jest and Enzyme
- Both Jest and Enzyme are specifically designed to test React applications, Jest can be used with any other Javascript app but Enzyme was designed mainly for use with React, React native but can be used in conjunction with mocha to test Node.js.
- Jest can be used to test React projects without Enzyme.
- Enzyme can be used without Jest, however Enzyme must be paired with another test runner if Jest is not used. 
 
As described, we will use:
-   Jest as the test runner, assertion library, and mocking library
-   Enzyme to provide additional testing utilities and interaction with react elements


# Vocabulary
Jest
Enzyme
Shallow rendering

# Jest

## Jest Demonstration 
    In /src/App.test.js: this is a testing file built for us by Create React App. This file only 

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
## Running Jest
`$ yarn test`
this test should fail because Sarah has already changed what our App project shows when it renders. In fact because all our text is inside the other components this test wont do us much good we'll need to set up some other tools.

I just wanted  show you that his testing suite works without Enzyme as jest will be our "Test runner" If we look in the package.json file we can see the line 

`"test": "react-scripts test"`

this is the "test" in our $ yarn test

# Enzyme
`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`


# Imports to component-name.test.js
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
```
<hr>
configuration

```javascript
Enzyme.configure({ adapter: new Adapter() })
```
Here we are going to have Enzyme configure its set up by destructing a new instance of adapter from the class adapter that we imported
<hr>

from here we can open up our describe and it blocks

```javascript
describe("When App renders", () => {
  it("displays a Header and Footer", () => {
```

Cool we've caught up to what we're most familiar with in testing 

<!-- ## Arrange
Set up a situation, ex. shallow rendering a component

## Act
User Interaction: User sees/finds something, clicks something, inputs something etc...
<hr>

## Assert
expectation of the behavior in tangible terms  -->

```javascript
const renderedApp = shallow(<App/>
```
## Shallow
- Renders only the react nodes that we select, generally we will use it to select our components. This is useful to isolate the component for pure unit testing. It protects against changes or bugs in a child component altering the behavior or output of the component under test
- As of Enzyme 3 shallow components do have access to life cycle methods by default
<hr>


# Syntax for assertions

```javascript
expect(<actualQueried>),<matcher>(<expected>)
```


# App.test.js 
```javascript

import App from './App'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './pages/Home'

Enzyme.configure({ adapter: new Adapter()})


describe("When App renders", () => {
  it("displays a Header and Footer", () => {
    //arrange
    const renderedApp = shallow(<App/>)

    //act
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    //assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })

  it('provides a route "/" to the home component', () => {
    //Arrange
    const renderedApp = shallow(<App/>)

    //Act
    // https://enzymejs.github.io/enzyme/docs/api/selector.html
    // give enzymes selectors a look over when you are thinking about how to form your tests. 
    const renderedHomeRoute = renderedApp.find('[path="/"]')
        // debug
    console.log("rendered home debug", renderedHomeRoute.debug())
        // props
    console.log("rendered home props", renderedHomeRoute.props())
    //Assert
    expect(renderedHomeRoute.length).toEqual(1)
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})
```


# Organization
- lets move away from testing our general app and start the practice of making solid tests for each of our components and pages. 

we'll make a new file called and place it along side our Header file

`Header.test.js`



# src/components/Header.test.js
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'


Enzyme.configure({ adapter: new Adapter()})

describe("When Header Loads ... ", ()=>{
    
    // let header
    // beforeEach(()=>{
    //     header = shallow(<Header/>)
    // })
    it('displays NavLinks on the header',()=>{
        
        const navLinkWrapper = header.find('NavLink')
       
        expect(navLinkWrapper.length).toEqual(3)
    })
    it('displays an "a" tag on the header',()=>{
        
        const aTagWrapper = header.find('a')
       
        expect(aTagWrapper.length).toEqual(1)
    })

})

// GO BACK TO THE FOR EACH
```
# src/components/Footer.test.js
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter()})

describe('When Footer renders', () => {
  const footer = shallow(<Footer />)
  const footerNav = footer.find('NavLink')

  it('has clickable links', () => {
    expect(footerNav.length).toEqual(4)
  })
})
```

RECAP 

# Imports and Configuration
    Import ... from ...
    Enzyme.configure({ adapter: new Adapter()})
<!-- # Arrange Act Assert
    ex. shallow
        find
        expect -->
# Selectors syntax
    https://enzymejs.github.io/enzyme/docs/api/selector.html
# Assertion syntax
    expect(<componentVariable>.<elementQueryMethod>()).<matcher>(<expectedValue>)
    expect(<actualThing>).<matcher>(<expectedValue>)