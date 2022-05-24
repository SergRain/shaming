ActiveAdmin.register_page "HowFunded" do
  content :title => "How funded block content" do
    columns do
      pages = PostBlock.where(block_type: "how_war_funded").order(position: :asc)
      columns do
        "<div style='display: none' id='table_template'>
            <fieldset class='inputs'><input type='hidden' name='block[][id]' value='0'>
            <ol>
            <li class='sfile input optional'><label class='label'>Image</label><input maxlength='255' type='file' class='changer_image' name='block[][image]'><p class='inline-hints'><img width='600' class='changer_image_result' src=''></p></li>
            <li class='string input stringish'><label class='label'>Text</label><textarea name='block[][text]' value=''></textarea></li>
            <li class='action input_action'><input type='button' onclick='$(this).parent().parent().parent().remove();' value='Remove'></li>
            <li class='action input_action'><input type='submit' name='commit' value='Update' data-disable-with='Updating...'></li>
            </ol></fieldset>
            </div>
            <div id='new_content'></div>".html_safe
      end
      form action: "/adminhelp/how_funded", enctype: "multipart/form-data", method: :post, remote: true do |f|
        columns id: "tables" do
          pages.each_with_index do |page, i|
            panel "How funded block content" do
              str = "<fieldset class='inputs'><input type='hidden' name='block[][id]' value='#{page.id}'>
            <ol>
            <li class='sfile input optional'><label class='label'>Image</label><input maxlength='255' type='file' class='changer_image' name='block[][image]'><p class='inline-hints'><img width='600' class='changer_image_result' src='#{url_for(page.image) if page.image.attached?}'></p></li>
<li class='string input stringish'><label class='label'>Text</label><textarea class='ckeditor' name='block[][text]' value='#{page.text}'>#{page.text}</textarea></li>
            
"
              str += "<li class='string input stringish'><label class='label'>Remove</label><input maxlength='255' type='checkbox' value='1' name='block[][destroy]' value='1'></li>"
              str += "<li class='action input_action'><input type='submit' name='commit' value='Update' data-disable-with='Updating...'></li>"
              str += "</ol></fieldset>"
              str.html_safe
            end
          end
        end

        columns do
          "<li class='action input_action'><input type='button' id='add_table' value='Add block' ></li>
            
            <script>$('#add_table').on('click',function(){
             
              $('#new_content').html($('#table_template').html());
              rand = Math.floor(Math.random()*1000);
              rand1 = Math.floor(Math.random()*1000);
              $('#new_content').find('textarea').first().attr('id','text_'+rand);
              //$('#new_content').find('textarea').last().attr('id','text_'+rand1);
              $('#tables').append($('#new_content').html());
              $('#new_content').html('');
              CKEDITOR.replace('text_'+rand);//CKEDITOR.replace('text_'+rand1);
            })</script>".html_safe
        end
      end
    end
  end
end
