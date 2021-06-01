require'rspec'
require_relative 'car'
# SET UP
    #  ask sarah if weve gone over gems before talk?
    # gem install rspec (not local to your project) 
    # ENVIROMENT SET UP
    # red green refactor
    # SO QUICK HYPOTHETICAL STORY... working on a code base and you write a test without writing the code & it passes



    # two lines of code are going to be required and funnily enough they both start with ...


describe 'Car' do

    it 'when a car is instatiated' do
        expect{ Car.new }.to_not raise_error
        # expect is really similar to JS
        # {} ref's the ruby block and specifically these curly braces allows us to capture the error if there is one so we can review and still allows us to carry on with the program. Later {} will allow us to cpature and review other behavior of code blocks. () value vs {} behavior
        # we could use () here for this particular test but we wouldn't get the level of feedback from our test suite.
    end
    #  each "it" block needs it own "end"
    it 'has a make' do
        my_car = Car.new
        my_car.make = 'Subaru'
        # Here we call on the data type as a test
        expect(my_car.make).to be_a String
        # and here we test that what we passed in has the expected result
        expect(my_car.make).to eq 'Subaru'
    end

    it 'can be unpainted by default' do
        my_car= Car.new 
        expect(my_car.color).to eq 'Unpainted'
        expect(my_car.color).to be_a String
    end

    it 'can be painted' do
        my_new_subaru = Car.new('Geyser blue')
        expect(my_new_subaru.color).to be_a String
        expect(my_new_subaru.color).to eq 'Geyser blue'
    end

    it "has a speed" do
        my_car = Car.new
        expect(my_car.speed).to be 0
        expect(my_car.speed).to be_a Numeric
    end
    

    it 'can accelerate by an amount' do
        my_car = Car.new 
        my_car.accelerate 10
        expect(my_car.speed).to be 10
    end

    it 'can deccelerate by an amount' do
        my_car = Car.new
        my_car.accelerate 20
        expect{ my_car.decelerate 10 }.to change{ my_car.speed }.from(20).to(10)
        expect{ my_car.decelerate 20 }.to change{ my_car.speed }.from(10).to(0)
    end
end

# lets make a garage