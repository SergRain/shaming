class PeoplePhraase < ApplicationRecord
  include ImageConvertModule
  acts_as_list
  has_one_attached :logo
end
