class UserOrganizationsController < ApplicationController

  def index
    byebug
    render json: UserOrganization.all, status: :ok
  end

  def show
    uo = UserOrganization.find(params[:id])
    render json: uo, status: :ok
  end
  
  def destroy
    uo = UserOrganization.find(params[:id])
    uo.destroy
    head :no_content
  end
  
end