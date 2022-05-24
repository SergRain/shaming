class AddFieldsToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :header, :string
    add_column :posts, :logo_url, :string
    add_column :posts, :company_twitter, :string
  end
end
