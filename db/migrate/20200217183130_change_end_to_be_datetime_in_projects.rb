class ChangeEndToBeDatetimeInProjects < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :start, :datetime
  end
end
