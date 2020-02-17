class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find_by(id: params[:id])
  end

  def create
  end 
  
  def update
  end

  def destroy
  end
  private
    def project_params
      params.require(:project).permit(:name, :description, :start, :end)
    end
end
