$(document).ready(function() {
    // $(".changer_image").change(function() {
    //     readURL(this, $(this).closest('li').find('.changer_image_result'));
    //     //console.log($(this).parent().find('.changer_image_result'));
    // });
    $('.active_admin').on('change', '.changer_image', function() {
        readURL(this, $(this).closest('li').find('.changer_image_result'));
    })


    rebuild_post_blocks_form()

});


function readURL(input, elem_to_show) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            elem_to_show.attr('src', e.target.result);
        }
        elem_to_show.show();
        reader.readAsDataURL(input.files[0]);
    }
}

function copyStringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}





function rebuild_post_blocks() {

}

function rebuild_post_blocks_form() {
    if ($('.post_blocks').length > 0) {
        do_editors();
        //transform button
        $('a.button.has_many_add[data-placeholder="NEW_post_BLOCK_RECORD"]').each(function() {
            $(this).html('<div class="add_post_block_button">+ Додати блок</div>');
        })

        //edit button on block
        $('.post_blocks .do_edit').on('click', function() {
            $(this).closest('.has_many_fields').find('.hint').hide();
            $(this).closest('.has_many_fields').find('.custom_form').show();
        })

        //form transform depending on sub block type
        $('.post_blocks').on('change', '.block_type_input', function() {
            change_sub_block_fields($(this));
        })

        $('.post_blocks').on('change', '.post_block_type_input', function() {
            change_block_fields($(this));
        })

        $('.post_blocks .block_type_input').each(function() {
            change_sub_block_fields($(this));
        })
        $('.post_blocks .post_block_type_input').each(function() {
            change_block_fields($(this));
        })
        $('.post_blocks').on('click', '.post_table .has_many_delete', function() {
            small_block_delete($(this));
        })

        $('.post_blocks').on('click', '.has_many_add, .add_post_block_button', function() {

            setTimeout(function() {
                $('.post_blocks .post_block_type_input').each(function() {
                    change_block_fields($(this));
                    //do_autocomplete();
                })
            }, 50);
            setTimeout(function() {
                $('.post_blocks .block_type_input').each(function() {
                    //change_block_fields($(this));
                    change_sub_block_fields($(this));
                })

            }, 50);


        });

        function small_block_delete(el) {
            if (confirm("Елемент буде видалено")) {
                el.find('input[type="checkbox"]').attr('checked', 'checked');
                el.closest('fieldset').hide();
            }
        }


        function set_subblocks_labeles(sub_blocks, text_label, add_label, file_label) {
            // try {
            var sub_name_text = sub_blocks.find('.text_input').parent().find('label');
            var sub_name_add_data = sub_blocks.find('.add_text_input').parent().find('label');
            var file = sub_blocks.find('.image_input').parent().find('label').html(file_label);
            //console.log(sub_blocks);
            sub_name_text.first().html(text_label);
            sub_name_add_data.first().html(add_label);

            // } catch {}
        }

        function change_block_fields(el) {
            var block = el.closest('.post_block_custom_form');
            var names = block.find('.block_name_input').parent();
            var text = block.find('.text_textarea').parent();
            var image = block.find('.block_image_input').parent();
            var left_column = block.parent().find('.post_table_left_column');
            var right_column = block.parent().find('.post_table_center_column');
            var select_left = block.parent().find('.post_sub_left_blocks').find('.block_type_input');
            var select_right = block.parent().find('.post_sub_right_blocks').find('.block_type_input');
            var add_block_type = block.parent().find('.post_add_block_type_input').parent();
            var sub_blocks = block.parent().find('.post_table_center_column');
            var h3_blocks = sub_blocks.find('h3');
            var subblock_buttons = sub_blocks.find('.button.has_many_add');



            h3_blocks.html('Add block');
            subblock_buttons.html('Add right block');
            set_subblocks_labeles(sub_blocks, 'Текст', 'Значення');
            [image, names, left_column, text, add_block_type].forEach(el => el.hide());
            //console.log(el.val());
            right_column.show();
            remove_file_left = true;
            if (el.val() == 'text_with_list_right' || el.val() == 'text_with_list_bottom') {
                left_column.show();
                select_left.val('text')
                select_left.parent().hide();
                select_right.val('simple_text')
                select_right.parent().hide();
            } else if (el.val() == 'text_with_two_columns') {
                names.show();
                left_column.show();
                select_left.val('text')
                select_left.parent().hide();
                select_right.val('text')
                select_right.parent().hide();
            } else if (el.val() == 'orange_block') {
                //names.show();
                left_column.show();
                select_left.val('orange')
                select_left.parent().hide();
                select_right.val('orange')
                select_right.parent().hide();
            } else if (el.val() == 'html') {
                select_right.val('text')
                select_right.parent().hide();
            } else if (el.val() == 'template') {
                right_column.hide();
                add_block_type.show();
            } else if (el.val() == 'text_image') {
                names.show();
                left_column.hide();
                select_right.find('option[value="text"]').remove()
                select_right.find('option[value="image"]').remove();
                select_right.find('option[value="simple_text"]').remove();
                select_right.find('option[value="tweet"]').remove();
            } else if (el.val() == 'news') {
                names.show();
                right_column.hide();
                left_column.hide();
            } else if (el.val() == 'people_phraase') {

                right_column.hide();
                left_column.hide();
            } else if (el.val() == 'other_companies') {
                names.show();
                left_column.hide();
                select_right.val('text_image_left');
                select_right.parent().hide();
                sub_blocks.css('grid-column', '1/3');
            } else if (el.val() == 'text') {
                names.show();
                left_column.hide();
                select_right.val('text')
                select_right.parent().hide();
                sub_blocks.css('grid-column', '1/3');
            } else if (el.val() == 'ask_company_address') {
                names.show();
                image.show();
                text.show();
                right_column.hide();
            } else if (el.val() == 'ask_company_twitter') {
                names.show();
                image.show();
                select_right.val('simple_text');
                select_right.parent().hide();
                sub_blocks.css('grid-column', '1/3');
            } else if (el.val() == 'slide_with_image') {
                [image, names, leads].forEach(el => el.show());
                right_column.hide();
            } else if (el.val() == 'slide_with_video') {
                [youtube, names, leads].forEach(el => el.show());

                right_column.hide();
            } else if (el.val() == 'blue_blocks' || el.val() == 'news' || el.val() == 'video' || el.val() == 'describe_block' || el.val() == 'outer_blocks' || el.val() == 'big_cards' || el.val() == 'right_text') {
                [names].forEach(el => el.show());
                if (el.val() == 'news') {
                    select_right.val('news');
                    select_right.parent().hide();
                }
                if (el.val() == 'outer_blocks') {
                    select_right.val('outer_block');
                    select_right.parent().hide();
                    on_blue_bg.show();

                    //leads.show();
                }

            } else if (el.val() == 'image_with_text') {
                right_column.hide();
                [names, image, leads].forEach(el => el.show());
                sub_blocks.css('grid-column', '1/3');


            } else if (el.val() == 'news_category') {
                news_categories.show();
                [names].forEach(el => el.show());
                right_column.hide();
            }
            if (remove_file_left) {
                select_left.find('option[value="file"]').remove();
            }
        }

        function change_sub_block_fields(el) {
            var block = el.closest('.custom_form');
            var text = block.find('.text_input');
            var name = block.find('.name_input').parent();
            var text_textarea = block.find('.text_textarea');

            var image = block.find('.image_input').parent();
            // var files = block.find('.files_input').parent();
            // var files_right = block.find('.files_input_right').parent();
            //var module_type = block.find('.module_type_input').parent();
            // var module_id = block.find('.module_id_input').parent();
            // var add_text = block.find('.add_text_input').parent();
            var add_data = block.find('.add_data_input').parent();
            var add_text = block.find('.add_text_input').parent();
            // var input_for_files = block.find('.input_for_files').parent();
            // var input_for_news = block.find('.input_for_news').parent();
            // var input_for_managment = block.find('.input_for_managment').parent();
            // var input_for_news_id = block.find('.news_item_module_id');

            [image, add_data, add_text, name].forEach(el => el.hide());
            [text, text_textarea].forEach(el => el.parent().hide());
            [text, text_textarea].forEach(el => el.removeAttr('disabled'));
            // input_for_managment.find('select').attr('disabled', 'disabled');
            // input_for_files.find('select').attr('disabled', 'disabled');
            // input_for_news.find('input').attr('disabled', 'disabled');
            // input_for_news_id.attr('disabled', 'disabled');

            if (el.val() == 'image') {
                image.show();
            } else if (el.val() == 'text_image_right' || el.val() == 'text_image_left') {
                image.show();
                name.show();
                text.attr('disabled', 'disabled');
                text_textarea.parent().show();
            } else if (el.val() == 'simple_text') {
                text.parent().show();

                text_textarea.attr('disabled', 'disabled');
            } else if (el.val() == 'text_with_header') {
                text.parent().show();

                text_textarea.attr('disabled', 'disabled');

                //  add_text.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Заголовок', 'Текст');
            } else if (el.val() == 'file') {
                files_right.show();
                files.show();
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
            } else if (el.val() == 'image_with_caption') {
                image.show();
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
            } else if (el.val() == 'outer_block') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                add_text.show();
                image.show();
                add_data.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Назва', 'Опис');
            } else if (el.val() == 'card') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                add_text.show();
                image.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Назва', 'Опис');
            } else if (el.val() == 'header') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
            } else if (el.val() == 'text' || el.val() == 'orange') {
                text.attr('disabled', 'disabled');
                // text_en.attr('disabled', 'disabled');
                text_textarea.parent().show();
                //  text_en_textarea.parent().show();
            } else if (el.val() == 'infobuble') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                add_text.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Верхня строка', 'Нижня строка');
            } else if (el.val() == 'history_header') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                add_text.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Заголовок', 'Опис');

            } else if (el.val() == 'news') {
                input_for_news.show();
                input_for_managment.find('input').removeAttr('disabled');
                input_for_news_id.removeAttr('disabled');
                input_for_news.find('input').data('url', news_autocomplete_path);
                module_type.find('select').val('NewsItem');
            } else if (el.val() == 'link') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                //  add_text.show();
                //module_id.show();
            } else if (el.val() == 'video') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                add_text.show();
                image.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Назва відео', 'Код з youtube (лише код, наприклад YlbS4h6V7y8)');
            } else if (el.val() == 'managment') {
                input_for_managment.show();
                input_for_managment.find('select').removeAttr('disabled');
                module_type.find('select').val('PersonCategory');
            } else if (el.val() == 'report_file') {
                text.parent().show();
                text_en.parent().show();

                files.show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Назва файлу', 'Назва файлу', "Файл");
                //image.show();

            } else if (el.val() == 'image_with_text') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                image.show();
            } else if (el.val() == 'image_with_quote') {
                text.parent().show();
                text_en.parent().show();
                text_textarea.attr('disabled', 'disabled');
                text_en_textarea.attr('disabled', 'disabled');
                add_text.show();
                image.show();
                set_subblocks_labeles(el.closest('.content_post_sub_block'), 'Цитата', 'Підпис картинки');
            }
        }
    }
}

function do_editors() {
    // alert(1);
    document.querySelector('.has_many_container').addEventListener('click', function(e) {
        if (e.target.closest('.text_editor') || e.target.closest('.text_editor_en')) {
            //console.log(e.target.parentElement.classList.contains('text_editor_uk'));
            el = e.target
            e.preventDefault();
            if (el.parentElement.classList.contains('text_editor')) {
                p = '.popup';
            } else {
                p = '.popup_en';
            }
            rand = 'popup_' + Math.floor(Math.random() * 10000);
            popup = $(el).closest('li').parent().find(p);
            // console.log(popup);
            $('body').css('overflow', 'hidden');
            popup.show();
            popup.find('label').remove();
            $('.title_bar').hide();
            popup.wrap("<div class='popup_holder " + rand + "'>");
            $('.popup_holder').append("<div class='close'>X</div>");
            // initiateCkeditor('.popup_holder textarea');
            $('.close').click(function() {
                var data = CKEDITOR.instances[$('.popup_holder.' + rand + ' textarea').attr('id')].getData();
                //console.log(data);
                $('.popup_holder.' + rand + ' textarea').html(data);
                CKEDITOR.instances[$('.popup_holder.' + rand + ' textarea').attr('id')].destroy(true);
                $(this).parent().find(p).hide().unwrap();
                $(this).remove();
                $('body').css('overflow', 'auto');
                $('.title_bar').show();
                $('.close').remove();

            })
            CKEDITOR.replace($('.popup_holder.' + rand + ' textarea').attr('id'));
        }


    });
}


function do_autocomplete() {
    return $('.autocomplete').each(function(index, input) {
        var $hiddenInput, $input;
        $input = $(input);
        $hiddenInput = $(input).parent().parent().find('.hidden_input_module_id');
        return $input.autocomplete({
            minLength: 3,
            delay: 600,
            source: function(request, response) {
                return $.ajax({
                    url: $input.data('url'),
                    dataType: 'json',
                    data: {
                        term: request.term
                    },
                    success: function(data) {
                        return response(data);
                    }
                });
            },
            select: function(event, ui) {
                $input.val(ui.item.name_uk);
                $hiddenInput.val(ui.item.id);
                return false;
            }
        }).data('ui-autocomplete')._renderItem = function(ul, item) {
            return $('<li></li>').data('item.autocomplete', item).append('<a>(' + item.formated_date + ') ' + item.name_uk + '</a>').appendTo(ul);
        };
    });
};

$(document).ready(function() {

    $('.ui-tabs-nav a').on('click', function() {
        if ($(this).attr('href') == '#seo') {
            get_seo_admin();
        }
    });
})

function get_seo_admin() {
    //console.log('get');
    let elem = $('form').attr('class').split(' ').filter(item => !['formtastic'].includes(item));
    let id_tmp = $('form').attr('id');
    if (id_tmp.match('new')) {
        var id = 0;
    } else {
        var id = $('form').attr('action').split('/')[$('form').attr('action').split('/').length - 1];
    }
    if (elem.length > 0) {
        model = elem[0];
        if ((model == 'document_category' || model == 'page' || model == 'contact_category' || model == 'structure' || model == 'person_category') && id != 0) {
            $.get('/get_seo_help', { model: model, id: id }, function(result) {
                data = result;
                $("#" + model + "_seo_title_uk").attr('placeholder', data['seo_uk']);
                $("#" + model + "_seo_title_en").attr('placeholder', data['seo_en']);
                $("#" + model + "_seo_description_uk").attr('placeholder', data['description_uk']);
                $("#" + model + "_seo_description_en").attr('placeholder', data['description_en']);
            })
        } else {
            // console.log(model);
            $("#" + model + "_seo_title_uk").attr('placeholder', $("#" + model + "_name_uk").val());
            $("#" + model + "_seo_title_en").attr('placeholder', $("#" + model + "_name_en").val());
            if ($("#" + model + "_lead_uk").length > 0) {
                if ($("#" + model + "_lead_uk").val() != '') {
                    $("#" + model + "_seo_description_uk").attr('placeholder', $("#" + model + "_lead_uk").val());
                }
                if ($("#" + model + "_lead_en").val() != '') {
                    $("#" + model + "_seo_description_en").attr('placeholder', $("#" + model + "_lead_en").val());
                }
            }
            if (model == 'media_gallery' && $("#" + model + "_description_uk").length > 0) {
                if ($("#" + model + "_description_uk").val() != '') {
                    $("#" + model + "_seo_description_uk").attr('placeholder', $("#" + model + "_description_uk").val());
                }
                if ($("#" + model + "_description_en").val() != '') {
                    $("#" + model + "_seo_description_en").attr('placeholder', $("#" + model + "_description_en").val());
                }
            }
        }
    }
}