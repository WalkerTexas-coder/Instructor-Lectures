class Garage
    # once the class is made 
    attr_accessor :cars

    def initialize
        @cars = []
    end
    # When I was going through this I realized that garages are just arrays for cars-- it kinda blew my mind
end