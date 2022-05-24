class CreateSiteConfigs < ActiveRecord::Migration[7.0]
  def change
    create_table :site_configs do |t|
      t.string :name
      t.string :value

      t.timestamps
    end
  end
end
