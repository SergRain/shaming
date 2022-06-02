ActiveAdmin.register_page "Shake hands" do
  menu parent: "Templates"
  content :title => "Shake hands page" do
    columns do
      popup_data = PostBlock.where(block_type: "shake_hands").first_or_create
      form action: "/adminhelp/shake_hands", enctype: "multipart/form-data", method: :post, remote: true do |f|
        columns id: "tables" do
          panel "" do
            str = "<fieldset class='inputs'>
            <ol>
            <li class='string input stringish'><label class='label'>Text left</label><textarea name='add_data'  value='#{popup_data.add_data}'>#{popup_data.add_data}</textarea></li>
            <li class='string input stringish'><label class='label'>Text right (use {{company_name}} to insert company name in text) (use <span>some orange text</span> to make orange text)</label><textarea name='text'  value='#{popup_data.text}'>#{popup_data.text}</textarea></li>"
            str += "<li class='action input_action'><input type='submit' name='commit' value='Update' data-disable-with='Updating...'></li>"
            str += "</ol></fieldset>"
            str.html_safe
          end
        end
      end
    end
  end
end
