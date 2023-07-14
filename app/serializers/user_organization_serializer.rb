class UserOrganizationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :organization_id, :donations

  has_many :donations
  belongs_to :user
end