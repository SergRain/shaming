$(document).ready(function() {
    $("body").on('change', '.changer_image', function() {
        readURL(this, $(this).parent().find('.changer_image_result'));
    });


    

    do_editors();
    page_block_type();
    
})

function change_article_type() {
    if ($('#article_category').val() == 0) {
        $('#article_outer_link_input').show();
        $('#article_pdf_input').hide();
    } else {
        $('#article_outer_link_input').hide();
        $('#article_pdf_input').show();
    }
}

function do_editors() {
    $('.has_many_container').on('click', '.ck_editor a', function(el) {
        el.preventDefault();
        elem_id = parseInt($(this).parent().attr('class').split('_')[2]);
        p = ".popup_" + elem_id;

        popup = $(this).closest('li').parent().find(p);
        $('body').css('overflow', 'hidden');
        popup.show();
        popup.find('label').remove();
        $('.title_bar').hide();
        popup.wrap("<div class='popup_holder'>");
        $('.popup_holder').append("<div class='close'>X</div>");

        // initiateCkeditor('.popup_holder textarea');
        $('.close').click(function() {
            var data = CKEDITOR.instances[$('.popup_holder textarea').attr('id')].getData();
            //console.log(data);
            $('.popup_holder textarea').html(data);
            CKEDITOR.instances[$('.popup_holder textarea').attr('id')].destroy(true);
            $(this).parent().find(p).hide().unwrap();
            $(this).remove();
            $('body').css('overflow', 'auto');
            $('.title_bar').show();
            $('.close').remove();

        })
        CKEDITOR.replace($('.popup_holder textarea').attr('id'));
    });
}


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

function page_block_type() {
    $('.page_block_type').each(function() {
        set_page_block_type($(this));
    });
    $('.has_many_container.page_blocks').on('change', '.page_block_type', function() {
        set_page_block_type($(this));
    });
    $('.has_many_container.page_blocks').on('click', '.has_many_add', function() {
        setTimeout(function() {
            id_counter = $('.page_blocks fieldset.has_many_fields').length - 1;
            console.log(id_counter);
            set_page_block_type($('#page_page_blocks_attributes_' + id_counter + '_block_type'));
        }, 200);

    })

}



function set_page_block_type(elem) {
    var parent = elem.closest('fieldset');
    var names = parent.find('.block_name').closest('li');
    var texts = parent.find('.block_text').closest('li');
    var add_datas = parent.find('.block_add_data').closest('li');
    var image = parent.find('.changer_image').closest('li');
    var gallery = parent.find('.galleries').closest('li');
    var add_texts = parent.find('.block_add_text').closest('li');
    var sub_menu = parent.find('.sub_menu').closest('li');
    names.hide();
    texts.hide();
    add_datas.hide();
    image.hide();
    gallery.hide();
    add_texts.hide();
    sub_menu.hide();
    console.log(elem.val());
    if (elem.val() == 'block1') {
        texts.show();
        image.show();
        add_datas.show();
    } else if (elem.val() == 'block2') {
        names.show();
        texts.show();
        image.show();
    } else if (elem.val() == 'block3') {
        // names.show();
        texts.show();
        add_datas.show();
    } else if (elem.val() == 'video') {
        names.show();
    } else if (elem.val() == 'gallery') {
        gallery.show();
    } else if (elem.val() == 'header') {
        names.show();
        sub_menu.show();
    } else if (elem.val() == 'accordeon') {
        names.show();
        texts.show();
        add_datas.show();
        image.show();
    } else if (elem.val() == 'block4') {
        texts.show();
        image.show();
        add_datas.show();
        add_texts.show();
    } else if (elem.val() == 'block5') {
        texts.show();
    } else if (elem.val() == 'maps') {
        names.show();
        sub_menu.show();
    }
}