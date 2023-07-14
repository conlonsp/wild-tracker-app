class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :start_date
      t.string :end_date
      t.string :location
      t.integer :organization_id

      t.timestamps
    end
  end
end
