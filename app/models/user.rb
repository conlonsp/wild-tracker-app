class User < ApplicationRecord
  has_many :user_organizations, dependent: :destroy
  has_many :organizations, through: :user_organizations

  has_secure_password

  validates :username, :bio, presence: true
  validates :username, uniqueness: true
  validates :bio, length: { in: 50..250 }
end