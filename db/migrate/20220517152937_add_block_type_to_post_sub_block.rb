class AddBlockTypeToPostSubBlock < ActiveRecord::Migration[7.0]
  def change
    add_column :post_sub_blocks, :block_type, :string
  end
end
