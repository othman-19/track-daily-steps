module API
  class UsersController < ApplicationController
    def index
      if user_signed_in?
        render json: current_user
      else
        render json: {}, status: 401
      end
    end
  end
end
