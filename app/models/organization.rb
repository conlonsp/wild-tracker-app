class Organization < ApplicationRecord
  has_many :user_organizations, dependent: :destroy
  has_many :users, through: :user_organizations
  has_many :projects, dependent: :destroy

  validates :name, :mission, presence: true
  validates :mission, length: { in: 50..250 }

  # self.per_page = 8
end
