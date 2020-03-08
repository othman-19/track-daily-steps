class Project < ApplicationRecord
  validates :name, presence: true
  validates :start, presence: true
  validates :description, length: { maximum: 300 }
  validates :end, presence: true
  has_many :goals, dependent: :destroy
  has_many :users, through: :goals

  default_scope -> { order(created_at: :desc) }

  def as_json(options = {})
    options[:methods] = %i[start_time estimation performance]
    super
  end

  def start_time
    start.strftime('%I:%M:%S %p')
  end

  def estimation
    Time.at(self.end - start).strftime('%H:%M:%S')
  end

  def performance
    if goals.count != 0
      (goals.where(achieved: true).count / goals.count) * 100
    else
      0
    end
  end
end
