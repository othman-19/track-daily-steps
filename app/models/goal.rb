class Goal < ApplicationRecord
  validates :description, presence: true, length: { maximum: 300 }
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  belongs_to :user
  belongs_to :project

  default_scope -> { order(created_at: :desc) }

  def as_json(options = {})
    options[:methods] = %i[start_time estimation]
    super
  end

  def start_time
    start.strftime('%I:%M:%S %p')
  end

  def estimation
    if self.end
      Time.at(start - self.end).utc.strftime('%H:%M:%S')
    else
      'End time not selected'
    end
  end
end
