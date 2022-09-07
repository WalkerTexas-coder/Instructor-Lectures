###  Ruby Classes


###   Class object

        > 1.class
        # Fixnum
        > 1.0.class
        # Float
        'hello'.class
        # String
        'hello'.class.class
        # Class

        # Interesting and helpful tool
        .method



###   Class Name
       class FoodOrder
       end

###   Instance Variable
    - represented by the symbol @
    - @restaurant

        class FoodOrder
            @restaurant = "Jimmy Johns"
        end

    - sandwhich_order = FoodOrder.new
    - p sandwhich_order.restaurant
        # Instance variables are NOT accessible outside the class
        # inorder to get this informatio we have to set up something called a


###   Getter / Accessor Method

        def get_restaurant
            @restaurant
        end

        - sandwhich_order.get_restaurant

###   Setter Method

        def set_restaurant (restaurant_name)
            @restaurant = restaurant_name
        end

        - sandwhich_order = FoodOrder.new
        - sandwhich_order.set_name("Jimmy Johns")

###   Class Initialization
    def initialize
          @restaurant = "Jimmy Johns"
          @orderTime = Time.now
    end


#   Class Initialization w/ Arguments
    def initialize(restaurant_name, item_order)
        @restaurant = restaurant_name
        @item_order = item_order
        @orderTime = Time.now
    end
### A quick recap of where we're at
        # we can declare a class
        # we can initalize class values by passing arguments
        # we can update values through a set method
        # we can retrieve values through a get method


#   SYMBOLS
         attr_accessor :noun, :noun
#      There are other options as well including attr_reader and attr_writer.

        attr_reader will only allow you to get a value.
        attr_writer will only allow you to set a value.
        attr_accessor allows you to do both.

##  OOP
    # I want to take a moment to take a break and talk about OOP

    # "The problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle." - Joe Armstrong

    https://www.csm.ornl.gov/~v8q/Homepage/Papers%20Old/spetep-%20printable.pdf  Potok, Vouk & Rindous published in the journal "Software – Practice and Experience"

    # Again, every object in Ruby belongs to a class, meaning each object is an instance of class. Once you know what class the object belongs to (by using the .class method), it is easy to Google that Ruby class and see all the methods of the class. OR use the Ruby method .methods in irb to generate a list of all the methods available to that class.

    # Classes are made up of Nouns (data) and Verbs (methods).
    # All Ruby classes have this structure.

class FoodOrder
  attr_accessor :restaurant_name, :sandwhich_order, :drink, :chips, :order_time, :order_due

  def initialize(restaurant_name, sandwhich_order, drink, chips)
            @restaurant_name = restaurant_name
            @sandwhich_order = sandwhich_order
            @drink = drink
            @chips = chips
            @order_time = Time.now
            @order_due = Time.at(Time.now.to_i + 780)
        end

        def order_ticket
            puts " An order from #{restaurant_name} for a #{sandwhich_order}, #{drink}, & #{chips} chips. Order placed at #{order_time} and should be ready at #{order_due}"
        end
end

# jj_order = FoodOrder.new("Jimmy Johns", "No.7", "Coca Cola", "Salt & Pepper")
# p jj_order.drink
# p


# jj_order.drink = "Dr. Pepper"
# p jj_order.drink

 subway_order = FoodOrder.new("Subway", "No.11", "Sprite", "Plain")
# puts subway_order.restaurant_name
# puts subway_order.sandwhich_order
# puts subway_order.drink
# puts subway_order.chips
# puts subway_order.orderTime

subway_order.order_ticket
