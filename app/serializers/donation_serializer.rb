class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :note, :user_organization_id, :organization_name

  def organization_name
    user_organization = UserOrganization.find(self.object.user_organization_id)
    org_id = user_organization.organization_id
    org = Organization.find(org_id)
    name = org.name
  end
end