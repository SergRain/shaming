module ApplicationHelper
  def company_name(text, name)
    begin
      text.gsub("{{company_name}}", name)
    rescue
      text
    end
  end

  def lang_helper(item, field)
    if @lang
      begin
        item.lang_options.where(site_lang: @lang, name: field).first.value
      rescue
        item.send(field)
      end
    else
      item.send(field)
    end
  end
end
