
num_array = [ 0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5]

def sortedSquaredArray array
    smaller_value_index = 0
    larger_value_index = array.length - 1
    sortedSquares = array.map! do |value, index|
        small_value = array[index]
        large_value = array[index]
        if small_value.abs > large_value.abs
            smaller_value_index++
            sortedSquares[index] = small_value * small_value
        else
            larger_value_index--
            sortedSquares[index] = large_value * large_value
        end
    end
end
p sortedSquaredArray num_array



def square_ascending array
    new_array = array.map! do |value|
    value * value
    end
    new_array.sort
end

p square_ascending(num_array)



