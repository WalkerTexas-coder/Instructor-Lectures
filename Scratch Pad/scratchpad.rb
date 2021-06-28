beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
 letter_o = 'o'
 def finder(beverages_array) 
    array.select do |value| 
        value.downcase.start_with? ("o")
    end

 end
p finder beverages_array
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


#  def word_return(arr)

#  end