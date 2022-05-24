class AddRawDataToCompany < ActiveRecord::Migration[7.0]
  def change
    add_column :companies, :raw_data, :text
  end
end
