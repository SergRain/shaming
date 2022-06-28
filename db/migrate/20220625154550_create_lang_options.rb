class CreateLangOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :lang_options do |t|
      t.references :site_lang, null: false, foreign_key: true
      t.string :name
      t.text :value
      t.references :langable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
