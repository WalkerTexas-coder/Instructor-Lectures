# Conditionals in Ruby use the keywords if else and end. Simple evaluations in Ruby don't need to be wrapped in () and our code blocks don't have {} so indentation and line managment is super important. Just like JavaScript the else block is a catch all and does not take an evaluation.

my_num = 10
if my_num == 10
  puts 'Your number is 10!'
else
  puts 'Your number is not 10.'
end

# The puts (short for “put string”) and print commands are both used to display the results of evaluating Ruby code. The primary difference between them is that puts adds a newline after executing, and print does not.

# If/Elsif/Else/End
# To add additional evaluations to an if/else code block, Ruby offers the keyword elsif. After the if statement you may use as many elsif statements as you want. Ending with an else will capture all the leftover possibilities.

my_num = 20
if my_num == 10
  puts 'Your number is 10!'
elsif my_num < 10
  puts "#{my_num} is less than 10."
elsif my_num > 10
  puts "#{my_num} is greater than 10."
else
  puts 'Something went wrong.'
end

# Unless
# Ruby also offers unless as a way to make conditional statements. Unless is just like if !(...). It is just like an if in reverse. It's a conditional statement that executes only if the condition is false instead of true. 

# I like to think of it as "Do this unless ..."

my_num = 10
unless my_num > 20
  puts "#{my_num} is not greater than 20."
else
  puts "#{my_num} is greater than 20."
end

# Wrap Up
    # string interporlation #{}
    # if/elsif/else
    # unless
    # puts
