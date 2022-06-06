# Blocks and Iterables

https://www.rubyguides.com/2018/10/ruby-map-method/

Let's start off by revisiting the concept of iteration. What is iteration?

Repeating a code action until a condition is met.

In this section we are going to talk about different types of iteration in Ruby.

### While
Let's start with while. While is a keyword in Ruby. A while loop performs iteration. While just executes code until a condition is met.

while
end

While needs and end to define its scope. Then while takes a condition. Something will start as true and eventually become false. For this example we can just print a series of numbers from 1-10.
```ruby
num = 1
while num <= 10
end
```

Inside the while loop we are going to write logic. For this we want to print the num and redefine the variable to increment by one so that eventually our while condition becomes false.
```ruby
num = 1
while num <= 10
  p num
  num += 1
end
```

If I don't have the incrementor, I will end up with an infinite loop because the condition will never be met.
```ruby
num = 1
while num <= 10
  p num
  # num += 1 (commented out, need control+c to stop the loop)
end
```
To make my while loop a little more useful, I can store the output in an array using the shovel operator.

```ruby
nums_array = []
num = 1
while num <= 10
  nums_array << num +=1
end
p nums_array
```


### Blocks
Since we are in Ruby land, it shouldn't surprise you to learn that Ruby has lots of built in methods for different types of iteration. And when we are using a method for iteration we need to pass the method some info.

When you pass info to a method, the info is called a block. A block is an anonymous function. It modifies the behavior of the method.

This is very much like when you pass a function to the map or filter method in JavaScript. It is a function that gets passed to a method.

Blocks can be defined two ways: using the key words do/end or with curly braces. Generally speaking, the do/end should be used if the block is more than one line of code. Curly braces are used for code that can be written in one line.


### Each
The each method works on a list of items. So it needs an array order to run. It uses an array's length to determine the number of times it is going to run. By default, each starts at 0 and continues to the length of whatever it is acting on.
```ruby
num_array = [2, 3, 4]
num_array.each do
  p 'whats good'
end
```
To add a bit of functionality to this method we can pass in a local variable. Blocks can take in parameters. To pass a parameter to the block you use pipes.
```ruby
num_array = [2, 3, 4]
num_array.each do |value|
  p value
end
```

Modify each value:
```ruby
num_array = [2, 3, 4]
num_array.each do |value|
  p value * 3
end
```


If you block is only one line you can replace the do and end with curly braces.
```ruby
num = [2, 3, 4]
num.each {|value| p value * 3}
```
You'll remember that in JavaScript methods are really specific to one data type. Reverse can only be called on arrays. Map can only be called on an array. However, Ruby isn't so picky. Typically we associate arrays with iteration and that is still true. But there are other things that can be iterated and so I want to take a side step here real fast and talk about one of those things.


### Ranges
A range is an object which has a starting value and an ending value and creates a sequence that span between these values.

You can create ranges of numbers or ranges of letters.

The syntax for an inclusive range - meaning that the numbers used for the parameters are included in the range looks like this:

1..5

If I use a p on this range I get back exactly what I entered, so this is where the each method can be used to see all the values that exist within the range.

```ruby
range = 1..5
range.each do |value|
  p value
end
```
Creating a range of letters:
```ruby
letters = 'a'..'d'
letters.each do |value|
  p value.upcase
end
```
Logic inside a each block:
```ruby
range = 1..10
range.each do |value|
  if value % 2 == 0
    p 'even'
  else
    p value
  end
end
```



**EXTRA**
Can use a range to populate an array in a couple different ways:
nums = [*1..9]
nums = Array(1..10)
(1..5).to_a
Need the parentheses otherwise you are basically calling .to_a on the last value
**end**



### Map
Let's talk about map. So each/do is great, but it really is a bit of a more primitive version of map. It returns all the elements but it doesn't collect them in any way.

So for that, we can turn to map. Just like in JavaScript map needs an array or an iterable item and it returns an array. We like arrays!

```ruby
multArr = numbers.map do |value|
  value * 3
end
p multArr
```
To build on the example from before, let's wrap up the content inside of a custom method.
```ruby
def showOdds nums
  nums.map do |value|
    if value % 2 == 0   (OR: value.even?)
      'even'
    else
      value
    end
  end
end
p showOdds 1..7
```
So rather than a range, let's move to an array.
```ruby
nums = [3, 4, 5, 6, 7]
def showOdds array
  array.map do |value|
    value ** 2
  end
end
p showOdds nums
p nums
```
The original array is unchanged.


### Select
Select is very similar to filter. It has a built in if/else statement that looks for a Boolean return value.
```ruby
num = [2, 3, 4, 5, 6, 7, 8]
def is_even array
  array.select do |value|
    value % 2 == 0
  end
end
p is_even num

words = ['hey', 'yo', 'sup', 'hello', 'gang gang', 'gucci']
def is_even array
  array.select do |value|
    value.include?('e')
  end
end
p is_even num
```


### Additional Examples

Ruby iterators are "chainable" so we can add more functionality to the method by adding more methods on to it.

One that may come in handy is the .with_index that can be added to other iterables. Map and select only offer us the value in the array. So if we want the index we can add the .with_index  

```ruby
num = [2, 3, 4, 5, 6, 7, 8]
def is_even array
  array.select.with_index do |value, index|
    index.even?
  end
end
p is_even num
```

Adding more logic to a select.
```ruby
greetings = ['hey', 'yo', 'hello', 'sup']
uses parentheses around the letters
def has_e array
  array.select do |value|
    value.include?('e') && value.include?('y')
  end
end
p has_e greetings
```