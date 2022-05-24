class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :slug
      t.boolean :active
      t.string :seo_title
      t.text :seo_description

      t.timestamps
    end
  end
end
