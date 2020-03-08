class ChangeEndToDatetimeInProjects < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :end, :datetime
  end
end
