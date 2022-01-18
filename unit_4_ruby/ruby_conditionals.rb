# Ruby Conditionals Notes updated Jan 6th, 2022

#Running Ruby in terminal
# In terminal $ ruby file-name.rb
# puts 'hello world'
# Comments in Ruby - same shortcut command + /

# print 'Hello World'
# print 'Hello World'
# print 'Hello World'

# p 'Hello World'
# p 'Hello World'
# p 'Hello World'

# puts 'Hello World'
# puts 'Hello World'
# puts 'Hello World'



num = 101

# if num > 100
#   p '#{num} is greater than 100'
# end

# if num > 100
#   p '#{num} is greater than 100'
# else
#   p '#{num} is less than 100'
# end

# if num > 100
#   p '#{num} is greater than 100'
# elsif num == 100
#   p 'The number is 100'
# else
#   p '#{num} is less than 100'
# end


# if/elsif/else/end

# Error messages - ruby-conditionals.rb:34: syntax error, unexpected end-of-input, expecting `end'

# Missing an end




# If you want your head to really spin ... Ruby also offers "unless" as a way to make conditional statements. "Unless" is just like if !(...). It's a conditional statement that executes only if the condition is false instead of true.

my_num = 21
unless my_num.even?
    puts "#{my_num} is not even"
 else
    puts "#{my_num} is even"
 end

# Input in the terminal

# GETS
# gets - collects info from the user in the terminal
# can save that info as a variable
# Add a label:
# p 'Enter you name:'
# name = gets
# p name

# DOT CHOMP
# .chomp removes any non-string characters like line breaks

# A gets will always return a string
# p 'Enter you name:'
# name = gets.chomp
# p "hey there, #{name}"


# p "Hello, #{name}"

p 'Enter yes or no:'
answer = gets.chomp

if answer.downcase == 'yes' || answer.downcase == 'y'
  p 'You chose yes.'
elsif answer.downcase == 'no'
  p 'You chose no.'
else
  p "You rebel, you said: #{answer}"
end
