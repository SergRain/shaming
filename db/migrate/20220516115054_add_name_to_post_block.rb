class AddNameToPostBlock < ActiveRecord::Migration[7.0]
  def change
    add_column :post_blocks, :name, :string
  end
end
