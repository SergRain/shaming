class AddNoPaddingBottomToPostBlock < ActiveRecord::Migration[7.0]
  def change
    add_column :post_blocks, :no_padding_bottom, :boolean, default: 0
  end
end
