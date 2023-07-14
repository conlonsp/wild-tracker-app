class Organization < ApplicationRecord
  has_many :user_organizations
  has_many :users, through: :user_organizations
  has_many :projects

  validates :name, :mission, presence: true
  validates :mission, length: { in: 50..250 }
end
