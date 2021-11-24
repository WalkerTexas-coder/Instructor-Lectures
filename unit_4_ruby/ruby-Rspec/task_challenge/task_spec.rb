require 'rspec'
require_relative 'task'





describe 'Task' do
    it 'has to be a real task' do
        expect{ Task.new }.to_not raise_error
        # expect is really similar to JS
        # {} ref's a ruby block and specifically these curly braces allows us to capture the error if there is one so we can review and still allows us to carry on with the program.
    end
    #  each "it" block needs it own "end"
    it 'can have a name' do
        new_task = Task.new 
        new_task.title = "Sweeping"
        expect(new_task.title).to be_a String
    end

end
