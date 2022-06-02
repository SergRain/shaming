ActiveAdmin.register_page "Why does opertion in russian mean financing the war? (orange blocks)" do
  menu parent: "Templates"
  content :title => "Why does opertion in russian mean financing the war? (orange blocks) content" do
    columns do
      page = PostBlock.where(block_type: "why_means_financing_orange").first_or_create
      page1 = PostBlock.where(block_type: "why_means_financing_orange1").first_or_create
      form action: "/adminhelp/why_means_financing_orange", enctype: "multipart/form-data", method: :post, remote: true do |f|
        columns id: "tables" do
          panel "How funded block content" do
            str = "<fieldset class='inputs'>
            <ol>
            <li class='sfile input optional'><label class='label'>Name</label><input maxlength='255' type='text' class='changer_image' value='#{page.name}' name='name'></li>
            <li class='string input stringish'><label class='label'>Left column</label><textarea class='ckeditor' name='text' value='#{page.text}'>#{page.text}</textarea></li>
            <li class='string input stringish'><label class='label'>Right column</label><textarea class='ckeditor' name='add_data' value='#{page.add_data}'>#{page.add_data}</textarea></li>
   <li class='string input stringish'><label class='label'>Left column (orange block)</label><textarea class='' name='text1' value='#{page1.text}'>#{page1.text}</textarea></li>
            <li class='string input stringish'><label class='label'>Right column (orange block)</label><textarea class='' name='add_data1' value='#{page1.add_data}'>#{page1.add_data}</textarea></li>         
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
