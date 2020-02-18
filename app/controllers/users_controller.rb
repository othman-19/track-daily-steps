class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.all
    render json: [@users, current_user]
  end
  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end
  private
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
