ActiveAdmin.register_page "What do to help" do
  content :title => "What do to help page" do
    columns do
      popup_data = PostBlock.where(block_type: "what_do_to_help").first_or_create
      form action: "/adminhelp/what_do_to_help", enctype: "multipart/form-data", method: :post, remote: true do |f|
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
    end
  end
end
