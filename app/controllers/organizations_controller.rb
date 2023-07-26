class OrganizationsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :org_unprocessable
  rescue_from ActiveRecord::RecordNotFound, with: :org_not_found

  before_action :authorize
  skip_before_action :authorize, only: [:index]

  def index
    @organizations = Organization.paginate(:page => params[:page], :per_page => 5)
    render json: {
      organizations: @organizations,
      page: @organizations.current_page,
      pages: @organizations.total_pages
    }, status: :ok
  end

  def show
    org = Organization.find(params[:id])
    render json: org, status: :ok
  end

  def create
    org = Organization.create!(org_params)
    render json: org, status: :created
  end

  def update
    org = Organization.find(params[:id])
    org.update!(org_params)
    render json: org, status: :accepted
  end

  def destroy
    org = Organization.find(params[:id])
    org.destroy
    head :no_content
  end

  private

  def org_params
    params.permit(:name, :mission, :location)
  end

  def org_unprocessable(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def org_not_found
    render json: { errors: ["Organization not found"] }, status: :not_found
  end

  def authorize
    return render json: { errors: ["Please log in to enable features"]}, status: :unauthorized unless session.include? :user_id
  end
end