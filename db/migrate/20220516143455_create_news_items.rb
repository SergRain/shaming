class CreateNewsItems < ActiveRecord::Migration[7.0]
  def change
    create_table :news_items do |t|
      t.string :name
      t.string :link
      t.boolean :active
      t.integer :position

      t.timestamps
    end
  end
end
