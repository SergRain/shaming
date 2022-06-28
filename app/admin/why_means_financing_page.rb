ActiveAdmin.register_page "Why does opertion in russian mean financing the war?" do
  menu parent: "Templates"
  content :title => "Why does opertion in russian mean financing the war? content" do
    columns do
      page = PostBlock.where(block_type: "why_means_financing").first_or_create
      form action: "/adminhelp/why_means_financing", enctype: "multipart/form-data", method: :post, remote: true do |f|
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
            <li class='sfile input optional'><label class='label'>Name</label><input maxlength='255' type='text' class='changer_image' value='#{page.name}' name='name'></li>
            <li class='string input stringish'><label class='label'>Left column</label><textarea class='ckeditor' name='text' value='#{page.text}'>#{page.text}</textarea></li>
            <li class='string input stringish'><label class='label'>Right column</label><textarea class='ckeditor' name='add_data' value='#{page.add_data}'>#{page.add_data}</textarea></li>
            
"
                  str += "<li class='action input_action'><input type='submit' name='commit' value='Update' data-disable-with='Updating...'></li>"
                  str += "</ol></fieldset>"
                  str.html_safe
                end
              end
            end

            SiteLang.all.each do |l|
              div(id: "lang_#{l.id}") do
                popup_data_lang_add_data = page.lang_options.where(site_lang: l).where(name: "add_data").first_or_create
                popup_data_lang_text = page.lang_options.where(site_lang: l).where(name: "text").first_or_create
                popup_data_lang_name = page.lang_options.where(site_lang: l).where(name: "name").first_or_create
                columns id: "tables_#{l.name}" do
                  panel "#{l.name}" do
                    str = "<fieldset class='inputs'>
            <ol>
            <li class='sfile input optional'><label class='label'>Name</label><input maxlength='255' type='text' class='changer_image' value='#{popup_data_lang_name.value}' name='lang[#{l.id}][name]'></li>
            <li class='string input stringish'><label class='label'>Left column</label><textarea class='ckeditor' name='lang[#{l.id}][text]' value='#{popup_data_lang_text.value}'>#{popup_data_lang_text.value}</textarea></li>
            <li class='string input stringish'><label class='label'>Right column</label><textarea class='ckeditor' name='lang[#{l.id}][add_data]' value='#{popup_data_lang_add_data.value}'>#{popup_data_lang_add_data.value}</textarea></li>
            
"
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
