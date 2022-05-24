class PostSubBlock < ApplicationRecord
  belongs_to :post_block
  has_one_attached :image

  acts_as_list scope: [:post_block_id, :post_sub_block_type], top_of_list: 0
  self.inheritance_column = :post_sub_block_type
end
