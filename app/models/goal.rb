class Goal < ApplicationRecord
  validates :description, presence: true
  validates :start, presence: true
end
