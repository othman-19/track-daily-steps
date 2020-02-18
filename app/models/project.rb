class Project < ApplicationRecord
  validates :name, presence: true
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  validates :end, presence: true
  has_many :goals, dependent: :destroy
  has_many :users, through: :goals
  
  def startTime
    self.start.strftime('%I:%M:%S %p')
  end
  def workingTime
    Time.at(Time.now-self.start).utc.strftime("%H:%M:%S")
  end
  def duration
    Time.at(self.end-self.start).utc.strftime("%H:%M:%S")
  end
  def performance
    ((Time.now-self.start)/(self.end-self.start)) * 100
  end
end
