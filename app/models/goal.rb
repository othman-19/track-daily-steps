class Goal < ApplicationRecord
  validates :description, presence: true, length: { maximum: 300 }
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  belongs_to :user
  belongs_to :project

  def as_json(options={})
    options[:methods] = [:startTime, :workingTime]
    super
  end

  def startTime
    self.start.strftime('%I:%M:%S %p')
  end
  
  def workingTime
    Time.at(self.start-Time.now).utc.strftime("%H:%M:%S")
  end
  def duration
    if self.end
      Time.at(self.start-self.end).utc.strftime("%H:%M:%S")
    else
      'End time not selected'
    end
  end
  def performance
    if self.end
      (self.start-Time.now)/(self.start-self.end) * 100
    else 
      nil
    end
  end
end
