class GoalsController < ApplicationController
  def index
    @goals = Goal.all
  end

  def show
    @goal = Goal.find_by(id: params[:id])
  end

  def create
  end 
  
  def update
  end

  def destroy
  end
  private
    def goal_params
      params.require(:goal).permit(:description, :start, :user_id, :project_id)
    end
end
