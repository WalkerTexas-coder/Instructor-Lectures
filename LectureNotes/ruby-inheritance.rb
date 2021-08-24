# Class in ruby 
    # super()
    
# _______________________________________________________________________________________
# So when were making a superclass we are going to want to pass in information that we want every child of the class to have in common. 
class Orderer
    attr_accessor :shop, :user, :order
    
    def initialize(shop, user, order)
        @shop = shop
        @user = user
        @order = order
        @date = Time.now
    end

    def get_order
    #    puts "#{@user}, has ordered #{@order} from #{@shop} on/at #{@date}"
       @order_ticket = "#{@user}, has ordered #{@order} from #{@shop} on/at #{@date}"
    end
end

# t_shirt = Orderer.new('Donut Tees', 'Austin', '20 yellow striped on black, Donut Tee Shirts' )

# t_shirt.get_order


# _______________________________________________________________________________________

class TshirtOrderer < Orderer
    def initialize (shop, user, number, style)
        super(shop, user, order)
        # The super() method is used in the child class. It calls the method of the same name in the parent class. After invoking super(), the child class will have access to the instance variables within that method.
        @number_of_shirts = number
        @t_shirt_style = style

    end

    def get_tshirt_order_info
        "An order for #{@number_of_shirts} #{@t_shirt_style} shirts for user #{@user} from #{@shop} shop on #{@date}"
    end
end

donut_shirts = TshirtOrderer.new("Donut Media", "Austin", 1, "RIP Pop Up & Down Headlights")
synthwave_shirt = TshirtOrderer.new("local shirt shop", "LEARN STUDENT" , 1, "Synthwave Japanese theme")
# donut_shirts.get_tshirt_order_info
p donut_shirts
# order_array = []

# order_array << donut_shirts
# order_array << synthwave_shirt

# puts order_array
# p order_array

# _______________________________________________________________________________________
class CarOrderer < Orderer
    attr_accessor :ssn, :deposit, :ssn, :depsoit_info, :location
    def initialize (shop, user, order)
        super(shop, user, order)

    end

    def set_background_info (ssn, depsoit_info, location)
        @ssn = ssn
        @depsoit_info = depsoit_info
        @location = location
    end
end

heisenberg_mobile = CarOrderer.new("Pontiac", "Walter White", "Aztec")
heisenberg_mobile.set_background_info(123456789, "cash", "ABQ")

# order_array << heisenberg_mobile

# p order_array

# _______________________________________________________________________________________

class FoodOrder < Orderer
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

# jj.order_Number_one("NO.7, no mayo, add mustard", "Salt and vinegar Chips", "Coke")
# jj.order_Number_two("NO.11", "BBQ chips", "Coke")
# jj.side_two = "Plain chips"
# jj.get_order_details
