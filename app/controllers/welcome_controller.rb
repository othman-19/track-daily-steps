class WelcomeController < ApplicationController
  def welcome
    render layout: 'welcome_layout'
  end
end
