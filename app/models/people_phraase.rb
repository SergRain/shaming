class PeoplePhraase < ApplicationRecord
  include ImageConvertModule
  include Langable

  acts_as_list
  has_one_attached :logo
end
