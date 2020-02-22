module API  
  class GoalsController < ApplicationController
    before_action :set_goal, only: %i[show edit update destroy]
    before_action :authenticate_user!, only: %i[create destroy]
    before_action :authorized?, only: %i[update destroy]

    def new 
      @goal = Goal.new
    end

    def index
      @user_goals = Goal.where(user_id: current_user.id)
      render json: @user_goals
    end

    def show;end

    def edit; end

    def create
      @goal = current_user.goals.build(goal_params)
      respond_to do |format|
        if @goal.save
          format.json { render json: @goal, status: :created, location: api_goal_url(@goal) }
        else
          format.json { render json: @goal.errors, status: :unprocessable_entity }
        end
      end
    end 
    
    def update
      respond_to do |format|
        if @goal.update(goal_params)
          format.html { redirect_to @goal, notice: 'Goal was successfully updated.' }
          format.json { render :show, status: :ok, location: @goal }
        else
          format.html { render :edit }
          format.json { render json: @goal.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @goal.destroy
      respond_to do |format|
        format.html { redirect_to goals_url, notice: 'Goal was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      def goal_params
        params.require(:goal).permit(:description, :start, :end, :user_id, :project_id)
      end
      def set_goal
        @goal = Goal.find(params[:id])
      end
      def authorized?
        redirect_to :authenticated_root unless @goal.user_id == current_user.id
      end
  end
end
