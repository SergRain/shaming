class LangOption < ApplicationRecord
  belongs_to :site_lang
  belongs_to :langable, polymorphic: true
end
