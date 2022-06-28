ActiveAdmin.register_page "What do to help" do
  menu parent: "Templates"
  content :title => "What do to help page" do
    columns do
      popup_data = PostBlock.where(block_type: "what_do_to_help").first_or_create
      form action: "/adminhelp/what_do_to_help", enctype: "multipart/form-data", method: :post, remote: true do |f|
        div(class: "tabs") do
          ul(class: "nav nav-tabs", role: "tablist") do
            li { link_to "Main language", "#main_info" }
            SiteLang.all.each do |l|
              li { link_to "#{l.name}", "#lang_#{l.id}" }
            end
          end
          div(class: "tab-content") do
            div(id: "main_info") do
              columns id: "tables" do
                panel "" do
                  str = "<fieldset class='inputs'>
            <ol>
            <li class='string input stringish'><label class='label'>Name</label><input maxlength='255' type='text' name='name' value='#{popup_data.name}'></li>
            <li class='string input stringish'><label class='label'>Text (use {{company_name}} to insert company name in text)</label><textarea name='text' class='ckeditor' value='#{popup_data.text}'>#{popup_data.text}</textarea></li>"
                  str += "<li class='action input_action'><input type='submit' name='commit' value='Update' data-disable-with='Updating...'></li>"
                  str += "</ol></fieldset>"
                  str.html_safe
                end
              end
            end

            SiteLang.all.each do |l|
              div(id: "lang_#{l.id}") do
                popup_data_lang_name = popup_data.lang_options.where(site_lang: l).where(name: "name").first_or_create
                popup_data_lang_text = popup_data.lang_options.where(site_lang: l).where(name: "text").first_or_create
                columns id: "tables_#{l.name}" do
                  panel "#{l.name}" do
                    str = "<fieldset class='inputs'>
                <ol>
                <li class='string input stringish'><label class='label'>Name</label><textarea name='lang[#{l.id}][name]' value='#{popup_data_lang_name.value}'>#{popup_data_lang_name.value}</textarea></li>
                <li class='string input stringish'><label class='label'>Text (use {{company_name}} to insert company name in text)</label><textarea name='lang[#{l.id}][text]' class='ckeditor'  value='#{popup_data_lang_text.value}'>#{popup_data_lang_text.value}</textarea></li>"
                    str += "<li class='action input_action'><input type='submit' name='commit' value='Update' data-disable-with='Updating...'></li>"
                    str += "</ol></fieldset>"
                    str.html_safe
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end
