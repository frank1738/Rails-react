module Api
  class GreetingsController < ApplicationController
    def index
      @greetings = Greeting.all.sample.name
      render json: { greeting: @greetings }
    end
  end
end
