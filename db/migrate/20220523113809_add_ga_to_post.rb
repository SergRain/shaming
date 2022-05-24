class AddGaToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :ga, :string
  end
end
