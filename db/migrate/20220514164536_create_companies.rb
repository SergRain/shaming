class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :outer_id
      t.datetime :outer_created_at
      t.string :name
      t.references :company_industry, null: false, foreign_key: true
      t.references :company_status, null: false, foreign_key: true
      t.string :action
      t.datetime :outer_updated_at
      t.boolean :active
      t.integer :position

      t.timestamps
    end
  end
end
