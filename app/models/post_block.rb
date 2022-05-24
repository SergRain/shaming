class PostBlock < ApplicationRecord
  #belongs_to :post
  has_one_attached :image
  has_many_attached :gallery

  belongs_to :blockable, polymorphic: true, optional: true

  acts_as_list scope: :blockable_id, top_of_list: 0

  has_many :post_sub_left_blocks, dependent: :destroy
  accepts_nested_attributes_for :post_sub_left_blocks, allow_destroy: true

  has_many :post_sub_blocks, dependent: :destroy
  accepts_nested_attributes_for :post_sub_blocks, allow_destroy: true

  has_many :post_sub_right_blocks, dependent: :destroy
  accepts_nested_attributes_for :post_sub_right_blocks, allow_destroy: true
end
