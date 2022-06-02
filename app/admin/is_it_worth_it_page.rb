ActiveAdmin.register_page "Is it worth it?" do
  menu parent: "Templates"
  content :title => "Is it worth it? content" do
    columns do
      page = PostBlock.where(block_type: "is_it_worth_it").first_or_create
      form action: "/adminhelp/is_it_worth_it", enctype: "multipart/form-data", method: :post, remote: true do |f|
        columns id: "tables" do
          panel "How funded block content" do
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
    end
  end
end
