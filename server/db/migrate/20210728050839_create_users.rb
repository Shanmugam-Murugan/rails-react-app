class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :phone, limit: 8

      t.timestamps
    end
  end
end
