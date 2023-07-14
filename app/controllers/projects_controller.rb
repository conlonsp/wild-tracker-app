class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :proj_unprocessable
  rescue_from ActiveRecord::RecordNotFound, with: :proj_not_found

  def index
    if params[:organization_id]
      org = Organization.find(params[:organization_id])
      projects = org.projects
    else
      projects = Project.all
    end
    render json: projects, status: :ok
  end

  def show
    proj = Project.find(params[:id])
    render json: proj, status: :ok
  end

  def create
    if params[:organization_id]
      org = Organization.find(params[:organization_id])
      proj = org.projects.create!(proj_params)
    else
      proj = Project.create!(proj_params)
    end
    render json: proj, status: :created
  end

  private

  def proj_params
    params.permit(:name, :description, :start_date, :end_date, :location, :organization_id)
  end

  def proj_unprocessable(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def proj_not_found
    render json: { errors: ["Project not found"] }, status: :not_found
  end

end
