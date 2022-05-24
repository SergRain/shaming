class AddAddDataToPostBlock < ActiveRecord::Migration[7.0]
  def change
    add_column :post_blocks, :add_data, :text
  end
end
