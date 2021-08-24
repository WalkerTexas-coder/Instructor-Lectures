#   THEN WE WRITE THE CODE
class Car
    def model=car_model
      @model = car_model
    end
    def model
      @model
    end
  end
  
#_______________________________________________________
# class Car

#     def initialize color='unpainted'
#       @color = color
#     end
  
#     def color
#       @color
#     end
  
#     def model=car_model
#       @model = car_model
#     end
  
#     def model
#       @model
#     end
  
#   end

#_______________________________________________________

class Car
    # once we have the class we can change the describe fromclass 'Car' to Car   --
    #  Bring in Color first -- then make -- then speed
    attr_accessor :make, :color
    attr_reader :speed

    def initialize color='Unpainted', speed=0
        # COLOR Setting default values if not arguments are passed in
        # SPEED to alter speed we have to pass in an argument for color
        # SPEED think about coworkers here, we dont want to change the order of arguments 
        @speed = speed
        @color = color
    end
    
    # So I could make a getter method for color here or I could do something else which is a little bit easier to think about and less cluttered

    # whats really cool about this simple logic is this kind of logic is actually what cars are using today. Although they will have a spreadsheet with saved values that they check the input against. 
    def accelerate increase_by
        @speed = @speed + increase_by
    end

    def decelerate decrease_by
        if @speed >= decrease_by
        @speed = @speed - decrease_by
        else
            @speed = 0
        end
    end
end


# time to open garage
