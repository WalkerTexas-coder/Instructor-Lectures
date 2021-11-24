
# people = [
#     {
#     name: 'Austin',
#     age: '29'
#     }, 
#     {
#     name:'Nicole',
#     age:30
#     },
#     {
#     name: 'Sheldon',
#     age:2
#     }]
# people.each do |value|
#     p value.name
# end


# range = 1...100
# range.each do |value|
#     if value % 3 == 0 && value % 5 == 0
#         p 'FizzBuzz'
#     elsif value % 5 == 0
#         p 'Buzz'
#     elsif value % 3 == 0
#         p 'Fizz'
#     else 
#         p value
#     end
# end

letters = Array('a'..'z')

def uppercaser array
    array.map do |value|
        value.upcase
    end
end

# p uppercaser letters
p uppercaser 'hello'.split