module ApplicationHelper
  def company_name(text, name)
    text.gsub("{{company_name}}", name)
  end
end
