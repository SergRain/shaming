module Langable
  extend ActiveSupport::Concern

  included do
    has_many :lang_options, :as => :langable
    accepts_nested_attributes_for :lang_options, allow_destroy: true
  end
end
