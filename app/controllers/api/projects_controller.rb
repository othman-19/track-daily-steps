module API  
  class ProjectsController < ApplicationController
    before_action :set_project, only: %i[show edit update destroy]
    before_action :authenticate_user!, only: %i[create destroy]

    def new 
      @project = Project.new
    end

    def index
      @projects = current_user.projects
      render json: @projects
    end

    def show
      @project_user_goals = @project.goals.where(user_id: current_user.id)
      render json: [@project, @project_user_goals]
    end

    def create
      @project = Projects.build!(project_params)
      respond_to do |format|
        if @project.save
          format.html { redirect_to authenticated_root_path, notice: 'Project was successfully created.' }
          format.json { render :show, status: :created, location: @project }
        else
          format.html { redirect_to current_user, alert: 'project not created' }
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