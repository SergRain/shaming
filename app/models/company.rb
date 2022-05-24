class Company < ApplicationRecord
  acts_as_list

  belongs_to :company_industry
  belongs_to :company_status
  has_one_attached :logo
end
