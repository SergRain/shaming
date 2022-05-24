class AddPostableToPostBlock < ActiveRecord::Migration[7.0]
  def change
    add_column :post_blocks, :module_type, :string
    add_column :post_blocks, :module_id, :integer
    add_column :post_blocks, :blockable_type, :string
    add_column :post_blocks, :blockable_id, :integer
  end
end
