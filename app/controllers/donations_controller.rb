class DonationsController < ApplicationController

  def index
    user_orgs = UserOrganization.where(user_id: session[:user_id])
    donations = user_orgs.flat_map(&:donations)
    render json: donations, status: :ok
  end

  def create
    user = User.find_by(id: session[:user_id])
    organization = Organization.find_by(id: params[:organization_id])
    user_organization = UserOrganization.find_or_create_by(user_id: user.id, organization_id: organization.id)
    donation = user_organization.donations.build(donation_params)

    if donation.save
      render json: donation, status: :created
    else
      render json: { errors: ['Donation cannot be made.  Please try again.']}
    end
  end

  def destroy
    donation = Donation.find(params[:id])
    donation.destroy
    head :no_content
  end

  private

  def donation_params
    params.permit(:amount, :note)
  end


end