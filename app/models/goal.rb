class Goal < ApplicationRecord
  validates :description, presence: true, length: { maximum: 300 }
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  belongs_to :user
  belongs_to :project
  def start_time
    self.start.strftime('%I:%M:%S %p')
  end
  def workingTime
    Time.at(self.start-Time.now).utc.strftime("%H:%M:%S")
  end
end
