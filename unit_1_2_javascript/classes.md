# JavaScript Classes

Classes are blueprints for objects. Which is a statement that at first sounds so abstract as to be completely meaningless.

But this is what I mean.

Think back to the first few days of class when we were creating conditionals. We made a conditional statement that worked for one specific set of variables and executed exactly one time for each time we ran the file in terminal. Which was fine, but limited.

Then we introduced functions. And we can create a function whose internal logic is a conditional statement. This makes the code reusable. We can call the function over and over again passing it different values each time and retrieve a different result which makes it quite a bit more useful than just a single conditional statement. Functions are reusable and dynamic.

Do you know what that means when I say dynamic? I can create code that adds 2 + 2. Or I can create code that will take any two numbers and add them together. The 2 + 2 is what was call hard coded. Values that will never change. The second options that will take any two numbers is dynamic.

So I can define a function. It can have all kinds of logic. And our functions are generic and reusable. But... what if I never call my function? The function will happily sit there doing absolutely nothing at all until it gets called.

So we can think of a function as a blueprint for logic. Does that track?

So now we can take this frame of reference and draw it over to objects. Yesterday we created objects. The objects ran executed one time for every time we ran the file in terminal. Our objects were also specific. We made an object that had numbers and then added the numbers up. But there was no way for us to modify the numbers. The numbers were hard coded. So great for our purposes yesterday, but not reusable.

So we need a way to be able to make objects reusable and dynamic. So enter classes.

Classes are the blueprint for objects in the same way that functions are the blueprint for logic.

So let's start with the anatomy. We are going to build out a class that will make our math object with numbers and adding the numbers that we did yesterday, but better.

First step is that we need to define our class. Just like functions and variables, classes have a declaration and a name. The declaration of a class is conveniently the word class. Next we need our name. The naming syntax for classes is different than we have seen before. It is a casing convention called PascalCase. This naming convention is true in many programming languages, not just JavaScript. Pascal case is similar to camel case but the first letter is also uppercase.

class DoingMath {
}

We have now defined a class. Just like an object, a class can have both static information or data and methods or behavior. So let's start with data. In our example we need some numbers, we need some static data. Classes have a special method that is used to establish data inside a class. That method is called the constructor.

class DoingMath {
  constructor(){

  }
}

Inside the constructor we can establish our numbers. Our numbers will be variables that belong to the class. Sooooo, we need our old friend this.

class DoingMath {
  constructor(){
    this.num1 = 5,
    this.num2 = 10,
    this.num3 = 15
  }
}

Now we have three variables that belong to the class. So static data is done. Now let's add the method that will add up the numbers.

class DoingMath {
  constructor(){
    this.num1 = 5,
    this.num2 = 10,
    this.num3 = 15
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
}

Okay so let's see this in action.

Just like a function, our class is not doing anything at all right now. It is just describing the idea of variables that contain numbers and a method that adds up those numbers.
We have to take our class make it useful.
And to make our class useful, we have to turn it into an object.
We have to take this blueprint and build it.

And we do that with a keyword in JavaScript called new. New is a keyword that creates an instance of a class. An instance of a class means that we are taking the blueprint and constructing something.

Imagine a very cookie cutter neighborhood. All the houses are look pretty much the same. They are just different colors. So if you were going to make that neighborhood you would start with a builders drawing plan for the house. Then you would hire a team to build each house. And if you were the most super boring neighborhood planner in history, you use your single set of blueprints and build an entire neighborhood of houses. And each house would be an instance of that plan. It would be a tangible representation of that blueprint. And even though the blueprint is the same, the houses are unique.

So here we are creating a new instance of our object. And we can look at it.

console.log(new DoingMath)

Now if we run this code we see that we have created an object with key values pairs. Cool. So let's save this as a variable so that we can do stuff to do it.

var math = new DoingMath
console.log(math)

So this of course gets us the same result. But now we can reference the variable and call our method.

console.log(math.addUp())

And we can create many different objects - or instances - from this class.

var math1 = new DoingMath
console.log(math1)

var math2 = new DoingMath
console.log(math2)

These are all different variables that hold unique instances of this class.

Sweet! But you may be considering the set up to this topic which was that the object we made yesterday was not dynamic. It was not reusable. And classes were the answer, but this class is clearly just creating a set of identical objects. It isn't doing anything different from what we created yesterday.

And you would be correct. The problem is that it has hard coded values. So let's make this class dynamic.

We can remove the hard coded values and instead tell our class that we need some parameters.

Now we are setting the expectation that every class that we create is going to have unique numbers. This brings us back to the constructor and its behavior. The constructor is a method that runs automatically when we create a new instance of a class. So we can pass it parameters. But if we pass it parameters we need to fill that space with actual values.

class DoingMath {
  constructor(num1, num2, num3){
    this.num1 = num1,
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
}

And the place to do that is when we create a new object.

var math = new DoingMath(5, 10, 15)
console.log(math.addUp())


What if we had a situation where the first number was always going to be 5. We could hard code that value and just pass in the other two.

class DoingMath {
  constructor(num2, num3){
    this.num1 = 5
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
}

var math = new DoingMath(5, 10)
console.log(math.addUp())


What if I also wanted to be able to return the largest number. (Google how to get Math.max)

class DoingMath {
  constructor(num2, num3){
    this.num1 = 5
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
  largestNum(){
    return Math.max(this.num1, this.num2, this.num3)
  }
}


var math = new DoingMath(5, 10)
console.log(math.addUp())
console.log(math.largestNum())







Review:
PascalCase

Casing and spacing always matter!!!