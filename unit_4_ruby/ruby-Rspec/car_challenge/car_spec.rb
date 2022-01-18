require'rspec'
require_relative 'car'
# SET UP

    # ask sarah if weve gone over gems before talk? 

    # TALK ABOUT RUBY GEMS 

    # a tool designed to easily manage the installation of gems, and a server for distributing them. It was created during RubyConf 2004 on pi day 3/14. Gems have been a part of ruby ever since and if you want you wcan make your own gem the guide for which can be found at guides.rubygems.org

    #  $ gem install rspec

    # gem install rspec (not local to your project) 
    # ENVIROMENT SET UP

    # red green refactor

    # SO QUICK HYPOTHETICAL STORY... It's your first day at your intership and you're told to write out a method for a large project that'll help do ... something. Your working on a pretty large code base and some instinct bugs you and you write a test without writing the code 
    # ...
    # you name the test "something" just like you were instructed
    # and run the test... GREEN

    # _____________________________________________
# ARRANGE ACT ASSERT 
    
    # Arrange inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.

    # Act on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.

    # Assert expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.
    
    # Some tests will lack one of the above depending oon the situation as devs. Thats okay this is a tool for us to use. The best thing is to try to find ways that it is working so we as developers can keep track of what we are testing vs. what we want to be testing. 

# A bit of set up
    # two lines of code are going to be required and funnily enough they both start with .... 
        # require
    # after that we have the start of our testing suite our  "describe block"
describe 'Car' do
# FIRST WE WRITE THE TEST
    it 'when a car is instatiated' do
        expect{ Car.new }.to_not raise_error
        # expect is really similar to JS
        # {} ref's the ruby block and specifically these curly braces allows us to capture the error if there is one so we can review and still allows us to carry on with the program. Later {} will allow us to cpature and review other behavior of code blocks. () value vs {} behavior
        # we could use () here for this particular test but we wouldn't get the level of feedback from our test suite.
    end
    #  each "it" block needs it own "end"
    it 'has a make' do
         # ARRANGE
        my_car = Car.new
         # ACT
        my_car.make = 'Subaru'
         # ASSERT
        # Here we call on the data type as a test
        expect(my_car.make).to be_a String
         #ASSERT
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