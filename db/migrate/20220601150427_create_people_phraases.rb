class CreatePeoplePhraases < ActiveRecord::Migration[7.0]
  def change
    create_table :people_phraases do |t|
      t.string :name
      t.string :text
      t.boolean :active
      t.integer :position

      t.timestamps
    end
  end
end
