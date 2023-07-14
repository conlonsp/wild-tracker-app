class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar_url, :bio

  has_many :user_organizations

  # def donations
  #   user_organizations = UserOrganization.all
  # end

  # def find_user_orgs
  #   user_orgs = UserOrganization.all
  #   my_uos = user_orgs.select(|uo| org.user_id == session[:user_id])
  # end
end