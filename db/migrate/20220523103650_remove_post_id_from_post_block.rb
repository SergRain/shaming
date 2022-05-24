class RemovePostIdFromPostBlock < ActiveRecord::Migration[7.0]
  def change
	remove_column :post_blocks, :post_id
  end
end
