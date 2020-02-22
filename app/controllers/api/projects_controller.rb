module API  
  class ProjectsController < ApplicationController
    before_action :set_project, only: %i[show edit update destroy]
    before_action :authenticate_user!, only: %i[create destroy]

    def new 
      @project = Project.new
    end

    def index
      @allProjects = Project.all
      @projects = current_user.projects
      render json: @allProjects
    end

    def show
      @project_user_goals = @project.goals.where(user_id: current_user.id)
      render json: [@project, @project_user_goals]
    end

    def create
      @project = Project.create!(project_params)
      #respond_with :api, @project, status: :created, location: @project
      respond_to do |format|
        if @project.save
          format.json { render json: @project, status: :created, location: api_project_url(@project) }
        else
          format.json { render json: @project.errors, status: :unprocessable_entity }
        end
      end
    end 

    def edit;end 
    
    def update
      respond_to do |format|
        if @projet.update(project_params)
          format.html { redirect_to @project, notice: 'Project was successfully updated.' }
          format.json { render :show, status: :ok, location: @project }
        else
          format.html { render :edit }
          format.json { render json: @project.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @project.destroy
      respond_to do |format|
        format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
    private
      def project_params
        params.require(:project).permit(:name, :description, :start, :end)
      end
      def set_project
        @project = Project.find(params[:id])
      end
  end
end