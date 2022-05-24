class CreatePostSubBlocks < ActiveRecord::Migration[7.0]
  def change
    create_table :post_sub_blocks do |t|
      t.references :post_block, null: false, foreign_key: true
      t.string :name
      t.text :text
      t.integer :position
      t.string :post_sub_block_type
      t.text :add_data

      t.timestamps
    end
  end
end
