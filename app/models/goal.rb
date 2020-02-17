class Goal < ApplicationRecord
  validates :description, presence: true, length: { maximum: 300 }
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  belongs_to :user
  belongs_to :project
end
