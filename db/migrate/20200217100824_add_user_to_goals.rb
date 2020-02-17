class AddUserToGoals < ActiveRecord::Migration[5.2]
  def change
    add_reference :goals, :user, foreign_key: true
  end
end
