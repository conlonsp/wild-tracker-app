class UserOrganization < ApplicationRecord
  belongs_to :user
  belongs_to :organization
  has_many :donations

  validates :user_id, :organization_id, presence: true
end
