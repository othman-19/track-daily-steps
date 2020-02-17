class Goal < ApplicationRecord
  validates :description, presence: true
  validates :start, presence: true
  belongs_to :user
  belongs_to :project
end
