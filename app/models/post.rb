class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged
  belongs_to :site_lang, optional: true

  def slug_candidates
    ["#{self.name}", "#{self.name}_#{self.site_lang ? self.site_lang.name : self.id}"]
  end

  def should_generate_new_friendly_id?
    name_changed? || slug.blank?
  end

  has_one_attached :logo
  has_one_attached :seo_image
  has_many :post_blocks, as: :blockable, dependent: :destroy
  accepts_nested_attributes_for :post_blocks, allow_destroy: true
end
