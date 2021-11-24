require 'rspec'
require_relative 'garage'
require_relative 'car'

describe 'Garage' do
    # change to class after making class
    it 'has to be real' do
        expect{ Garage.new }.to_not raise_error
    end
    it 'can hold a collection of cars' do
        my_garage = Garage.new
        # we can use the shovel opperator to add a car (with our default values) to our garage.
        my_garage.cars << Car.new
        
        expect(my_garage.cars).to be_a Array
        expect(my_garage.cars.length).to eq 1
    end
end