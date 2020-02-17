class Project < ApplicationRecord
  validates :name, presence: true
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  validates :end, presence: true
  has_many :goals, dependent: :destroy
  has_many :users, through: :goals
end
