class Donation < ApplicationRecord
  belongs_to :user_organization

  validates :amount, presence: true
  validates :amount, numericality: { only_integer: true }

  # before_create :create_user_organization

  # private

  # def create_user_organization
  #   self.user_organization ||= UserOrganization.create(user_id: session[:user_id], organization_id: params[:id])
  # end
end