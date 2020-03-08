class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.text :description
      t.date :start
      t.boolean :achieved

      t.timestamps
    end
  end
end
