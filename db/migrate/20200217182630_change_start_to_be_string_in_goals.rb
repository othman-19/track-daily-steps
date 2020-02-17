class ChangeStartToBeStringInGoals < ActiveRecord::Migration[5.2]
  def change
    change_column :goals, :start, :datetime
  end
end
