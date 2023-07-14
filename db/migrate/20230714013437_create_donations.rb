class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.string :note
      t.integer :user_organization_id

      t.timestamps
    end
  end
end
