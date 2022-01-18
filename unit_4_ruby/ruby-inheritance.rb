# Class in ruby 
    # super()
     # The super() method is used in the child class. It calls the method of the same name in the parent class. After invoking super(), the child class will have access to the instance variables within that method.
# _______________________________________________________________________________________
# So when were making a superclass we are going to want to pass in information that we want every child of the class to have in common. 
class App
    attr_accessor 
    
    def initialize(x, y, z)
        @shop = x
        @user = y
        @order = z
        @date = Time.now
    end

    def get_order
    #    puts "#{@user}, has ordered #{@order} from #{@shop} on/at #{@date}"
       @order_ticket = "#{@user}, has ordered #{@order} from #{@shop} on/at #{@date}"
    end
end


# _______________________________________________________________________________________



class ChildAppOne < App
    attr_accessor :shop, :user, :order, :number, :style
    def initialize (shop, user, order, style, number=1)
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


# Because of the way this code behaves, you may be tempted to say that the instance variables are also inherited. But remember, that is not how Ruby works. In the above code, Pointer defines an initialize method that chains to the initialize method of its superclass. The chained method assigns values to the variable @breed, which makes those variables come into existence for a particular instance of Pointer.
# _______________________________________________________________________________________

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
