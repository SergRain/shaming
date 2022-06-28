class AddSsiteLangToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :site_lang_id, :integer
  end
end
