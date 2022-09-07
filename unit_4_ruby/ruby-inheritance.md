Class in ruby 

#OOP 
  OOP is 
  everything in ruby is an object
   so if everything in ruby is an object it has rules that dictate how those objects are made -- the instructions for how those onjects are made and what methods can be applied to them are their classess
```Ruby
    $ irb
    > [].class
    > 42.class
    > 0.42.class
    > {key:'value'}.class
    > {key:'value'}.class.class
    > 42.class.class
```

Every object-oriented developer should be well familiar with the so called Four Pillars OOP:

Encapsulation - Removing access to parts of your code and making things private. (often times, people refer to it as data hiding).
  
Inheritance - Inheritance lets one object acquire the properties and methods of another object.

Polymorphism -"the condition of occurring in several different forms."

Abstraction - To abstract something away means to hide away the implementation details inside something – sometimes a prototype, sometimes a function. So when you call the function you dont have to understand exactly what it is doing.

 - Describe making coffee



  Classes are made up of nouns and verbs 
  Our nouns are the data that we want to save and we use to describe the world around us. 
  The verbs describe how we get and set that data and specifically what we want to happen when we do. 

  
    
# _______________________________________________________________________________________
 So when were making a superclass we are going to want to pass in information that we want every child of the class to have in common. 
```Ruby
class App
    attr_accessor :x, :y, :z
    
    def initialize(x, y, z)
        @x = x
        @y = y
        @z = z
        @date = Time.now
    end

    def get_info
       @info = "#{@x}, has ordered #{@y} from #{@z}"
    end
end
```

# _______________________________________________________________________________________


```Ruby
class ChildAppOne < App
    attr_accessor :shop, :user, :order, :number, :style
    
    def initialize (shop, user, order, style, number=1)
      # super()
        # The super() method is used in the child class. It calls the method of the same name in the parent class. After invoking super(), the child class will have access to the instance variables within that method.
        super(shop, user, order)
        # The super() method is used in the child class. It calls the method of the same name in the parent class. After invoking super(), the child class will have access to the instance variables within that method.
        @number_of_items = number
        @item_style = style
    end

    def get_info
        if @number > 200
            "You have exceeded the limit of items that can be purchased at this time"
        else
            "An order for #{@number_of_shirts} #{@t_shirt_style} shirts for user #{@user} from #{@shop} shop on #{@date}"
        end
    end
end

donut_shirts = TshirtOrderer.new("Donut Media", "Austin", "RIP Pop Up & Down Headlights", 2)
synthwave_shirt = TshirtOrderer.new("local shirt shop", "LEARN STUDENT", "Synthwave Japanese theme")

# donut_shirts.get_tshirt_order_info
p donut_shirts
# order_array = []

# order_array << donut_shirts
# order_array << synthwave_shirt

# puts order_array
# p order_array

```

# _______________________________________________________________________________________

```Ruby

class FoodOrderApp < OrderApp
    attr_accessor :entree_one, :side_one, :drink_one, :entree_two, :side_two, :drink_two
    def initialize(shop, user, order)
        super(shop, user, order)
    end
    def order_Number_one(entree, side, drink)
        @entree_one= entree
        @side_one= side
        @drink_one = drink
    end
    def order_Number_two(entree, side, drink)
        @entree_two= entree
        @side_two= side
        @drink_two = drink
    end
    def get_order_details
        get_order
        if entree_one != nil && entree_two == nil
            p @order_ticket + " The order is for #{@entree_one} with a #{@side_one} for a side and a #{@drink_one} for a drink."
        elsif entree_one != nil && entree_two != nil
            p @order_ticket + " The first order is #{@entree_one} with a #{@side_one} for a side and a #{@drink_one} for a drink. The second order is #{@entree_one} with a #{@side_two} for a side and a #{@drink_two} for a drink"
        else 
           p @order_ticket + " no other information was given, reach-out to contact"
        end
    end
end

jj = FoodOrder.new("Jimmy Johns", "Austin", 12345)

jj.order_Number_one("NO.7, no mayo, add mustard", "Salt and vinegar Chips", "Coke")
jj.order_Number_two("NO.11", "BBQ chips", "Coke")
jj.side_two = "Plain chips"
jj.get_order_details

```