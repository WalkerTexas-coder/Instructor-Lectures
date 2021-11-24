# # Goals 
# # CREATE:  a simple method Using Ruby syntax  
# # PASS: arguments to a Ruby method
# # CALL: a ruby method and logg an outcome to the terminal

# #Key Words
#     # def 
#     # end

# #Key Term
#     # implicit return


#     # Def- Which stands for define is how we open all ruby methods. 
#         # the Method gets a name
#     def greeter
#         # then we open our block of code
#       "Hello World!"
#         # we use the "end" key word to close out our method
#     end

#     #Let's add two ideas we're already familar with
#         # arguments / paramters
#         # string interporlation
#     # 
#     def greeter name
#         "Hello, #{name}!"
#     end
      
#       > greeter 'LEARN Student'
#       => "Hello, LEARN Student!"

#     #   While Ruby doesn't require parentheses around the arguments for a method, it is best practice to use parentheses if there is more than one argument.

#     # so what does that look like?
#     def add(num1, num2)
#     num1 + num2
#     end

#     > add 1, 3
#     => 4

#     > add(1, 2)
#     => 3

#     def ruby_conditional(input1, input2)
#         if input1 == input2
#             'they equal'
#         end
#     end


# Wrap Up
    # def name
    # end
    # code block
    # implicit return
    # arguments / parameters 
    
    # 

    def login(username, password)
        if username == password
            puts 'INVALID: username and password cannot be the same'
        elsif username.length < 6 || password.length < 6
            puts 'INVALID Username and Password must be at least 6 characters'
        elsif !password.include?('!') && !password.include?('#') && !password.include?('$') 
            puts 'INVALID password must contain at least one of  !,#,$'
        elsif username.include?('!') || username.include?('#') || username.include?('$') || username.include?(' ') 
            puts "INVALID username cannot contain !,#,$,' '"
        elsif password == 'password' || password == 'Password'
            puts 'INVALID password cannot be password'
        else
            puts 'VALID'
        end
    end
    
    
    login('Austin','austin!')