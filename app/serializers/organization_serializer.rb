class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :mission, :location

  has_many :projects
end