class NewsItem < ApplicationRecord
  include ImageConvertModule

  has_one_attached :image
  has_one_attached :logo
end
