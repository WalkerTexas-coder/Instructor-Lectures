# _______________________________________________________________________________________

class FoodOrder
  attr_accessor :restaurant_name, :meal_order
  def initialize(restaurant_name, meal_order)
            @restaurant_name = restaurant_name
            @meal_order = meal_order
        end

        def print_order_ticket
            puts " An order from #{restaurant_name} for a #{meal_order}"
        end
end

sandwhich_order = FoodOrder.new("Jimmy Johns", "No.11")

puts sandwhich_order
p sandwhich_order

# The variable starting with @ is an instance variable, meaning it belongs to the "instance" of a class (an object). The instance variable @name belongs to class Person. Each "instance" of the class Person has its own set of instance variables independent of other Person objects.

# You can't just access an instance variable from outside of an object, as you can with variables in JavaScript. Think local scope.

# p person_one.name
# # => returns an error: undefined method `name' for #<Person:0x00007fc99f09d420 @name="Jon Snow"> (NoMethodError)



sandwhich_order.meal_order = ("No.2")

sandwhich_order.print_order_ticket




# _______________________________________________________________________________________
# So when were making a superclass we are going to want to pass in information that we want every child of the class to have in common. 
class Orderer
    attr_accessor :shop, :user, :order
    
    def initialize(shop, user, order)
        @shop = shop
        @user = user
        @order = order
    end

    def get_order
        p @user, @shop, @order
    end
end

t_shirt = Orderer.new('Donut Tees', 'Austin', '20 yellow striped on black, Donut Tee Shirts' )

t_shirt.get_order
t_shirt.user = "Erik"
t_shirt.get_order
t_shirt.order = "1 Tshirt"
t_shirt.get_order


# _______________________________________________________________________________________

class TshirtOrderer < Orderer
    def initialize (shop, user, number, style)
        super(shop, user, order)
        # The super() method is used in the child class. It calls the method of the same name in the parent class. After invoking super(), the child class will have access to the instance variables within that method.
        @number_of_shirts = number
        @t_shirt_style = style
    end

    def get_tshirt_order_info
        "An order for #{@number_of_shirts} #{@t_shirt_style} shirts for user #{@user} from #{@shop} shop"
    end
end

orderArray = []

donut_shirts = TshirtOrderer.new("Donut Media", "Austin", "1", "RIP PopUp&Down Headlights")
donut_shirts.get_tshirt_order_info

orderArray << donut_shirts

# _______________________________________________________________________________________
class CarOrderer < Orderer
    attr_accessor :ssn, :deposit, :ssn, :depsoit_info, :location
    def initialize (shop, user, order)
        super(shop, user, order)
        @shop = shop
        @user = user
        @order = order
    end

    def set_background_info (ssn, depsoit_info, location)
        @ssn = ssn
        @depsoit_info = depsoit_info
        @location = location
    end
end

