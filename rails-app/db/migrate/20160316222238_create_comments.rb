class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	t.integer :post_id
    	t.integer :comment_id
    	t.string :user
    	t.text :text
    end
  end
end
