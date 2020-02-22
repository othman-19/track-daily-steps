class Project < ApplicationRecord
  validates :name, presence: true
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  validates :end, presence: true
  has_many :goals, dependent: :destroy
  has_many :users, through: :goals

  def as_json(options={})
    options[:methods] = [:startTime, :estimation, :performance]
    super
  end
  
  def startTime
    self.start.strftime('%I:%M:%S %p')
  end
  
  def estimation
    Time.at(self.end-self.start).utc.strftime("%H:%M:%S")
  end

  def performance
    if self.goals.count != 0
      (self.goals.where(achieved: true).count / self.goals.count) * 100
    else
      0
    end
  end
end
