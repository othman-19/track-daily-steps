class Project < ApplicationRecord
  validates :name, presence: true
  validates :start, presence: true
  validates :end, presence: true
  has_many :goals
  has_many :users, through: :goals
end
