class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :text
      t.integer :number
      t.timestamps
    end
  end
end
