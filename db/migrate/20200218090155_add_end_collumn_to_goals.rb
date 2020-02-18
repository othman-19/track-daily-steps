class AddEndCollumnToGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :goals, :end, :datetime
  end
end
