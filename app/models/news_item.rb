class NewsItem < ApplicationRecord
  include ImageConvertModule
  include Langable

  has_one_attached :image
  has_one_attached :logo
end
