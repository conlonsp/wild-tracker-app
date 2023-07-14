class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :end_date, :location, :organization_id

  belongs_to :organization
end