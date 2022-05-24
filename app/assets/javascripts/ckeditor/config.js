/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function(config) {
    // Define changes to default configuration here. For example:
    config.extraPlugins = 'youtube';
    config.language = 'en';
    //config.uiColor = '#000000';
    config.toolbar = "mini";
    config.allowedContent = true;
    config.enterMode = CKEDITOR.ENTER_P;
    config.shiftEnterMode = CKEDITOR.ENTER_BR;
    config.autoParagraph = true;
    config.forcePasteAsPlainText = true;

    /* Filebrowser routes */
    // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
    // config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
    config.filebrowserBrowseUrl = "/fm/index";


    config.format_tags = 'h2;h3;h4;h5;div;p';
    config.allowedContent = true;
    config.templates_files = ['/assets/ckeditor/mytemplates.js'];
    config.width = '100%';
    config.height = '500';
    config.templates_replaceContent = true;
    config.div_wrapTable = true;

    config.toolbar_mini = [
        ['Source'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],
        ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
        //['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['Youtube', 'Templates'],
        ['Link', 'Unlink', 'Anchor'],
        //['Templates'],['Link','Unlink', 'Anchor'],
        ['Image', 'Table', 'Blockquote', 'HorizontalRule', 'PageBreak', 'Iframe'],
        ['Styles', 'Format'],
        ['Maximize', 'ShowBlocks']
    ];
    // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
    //config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";
    config.filebrowserFlashBrowseUrl = "/fm/index";

    // The location of a script that handles file uploads in the Flash dialog.
    //config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";
    config.filebrowserFlashUploadUrl = "/fm/index";

    // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
    //config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
    config.filebrowserImageBrowseLinkUrl = "/fm/index";

    // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
    //config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
    config.filebrowserImageBrowseUrl = "/fm/index";

    // The location of a script that handles file uploads in the Image dialog.
    ///config.filebrowserImageUploadUrl = "/ckeditor/pictures";
    config.filebrowserImageUploadUrl = "/fm/index";

    // The location of a script that handles file uploads.
    //config.filebrowserUploadUrl = "/ckeditor/attachment_files";
    config.filebrowserUploadUrl = "/fm/index";

    // Rails CSRF token
    config.filebrowserParams = function() {
        var csrf_token, csrf_param, meta,
            metas = document.getElementsByTagName('meta'),
            params = new Object();

        for (var i = 0; i < metas.length; i++) {
            meta = metas[i];

            switch (meta.name) {
                case "csrf-token":
                    csrf_token = meta.content;
                    break;
                case "csrf-param":
                    csrf_param = meta.content;
                    break;
                default:
                    continue;
            }
        }

        if (csrf_param !== undefined && csrf_token !== undefined) {
            params[csrf_param] = csrf_token;
        }

        return params;
    };

    config.addQueryString = function(url, params) {
        var queryString = [];

        if (!params) {
            return url;
        } else {
            for (var i in params)
                queryString.push(i + "=" + encodeURIComponent(params[i]));
        }

        return url + ((url.indexOf("?") != -1) ? "&" : "?") + queryString.join("&");
    };

    // Integrate Rails CSRF token into file upload dialogs (link, image, attachment and flash)
    CKEDITOR.on('dialogDefinition', function(ev) {
        // Take the dialog name and its definition from the event data.
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        if (dialogName == 'table') {
            var info = dialogDefinition.getContents('info');

            info.get('txtWidth')['default'] = '100%'; // Set default width to 100%
            info.get('txtBorder')['default'] = '0'; // Set default border to 0
        }

        var content, upload;

        if (CKEDITOR.tools.indexOf(['link', 'image', 'attachment', 'flash'], dialogName) > -1) {
            content = (dialogDefinition.getContents('Upload') || dialogDefinition.getContents('upload'));
            upload = (content == null ? null : content.get('upload'));

            if (upload && upload.filebrowser && upload.filebrowser['params'] === undefined) {
                upload.filebrowser['params'] = config.filebrowserParams();
                upload.action = config.addQueryString(upload.action, upload.filebrowser['params']);
            }
        }




    });

};

CKEDITOR.stylesSet.add('added_style', [
    //  { name: 'Заголовок таблицы', element: 'div', attributes: { 'class': 'table-title medium' } },
    //  { name: 'Текст на плашке', element: 'div', attributes: { 'class': 'billet' } },
    //  { name: 'Подсвеченная ячейка в таблице', element: 'tr', attributes: { 'class': 'highlight' } },
    // { name: 'Аккордеон', element: 'div', attributes: { 'class': 'accordion' } },
    //  { name: 'Заголовок аккордеона', element: 'div', attributes: { 'class': 'item-title' } },
    //  { name: 'Содержание аккордеона', element: 'div', attributes: { 'class': 'item-body' } },
    // {
    //     name: 'Іконка мінус',
    //     element: 'div',
    //     attributes: {
    //         'class': 'ico-minus'
    //     }
    // },
    {
        name: 'Кнопка у рамці',
        element: 'a',
        attributes: {
            'class': 'btn btn_white'
        }
    },
    {
        name: 'Великий текст',
        element: 'div',
        attributes: {
            'class': 'text-big'
        }
    },

    //  { name: 'Иконка4', element: 'p', attributes: {'class': 'ico_pdf1'}},
    //  { name: 'Иконка5', element: 'p', attributes: {'class': 'ico_xls1'}},
    //  { name: 'Иконка6', element: 'p', attributes: {'class': 'ico_rar1'}},
    //  { name: 'Иконка7', element: 'p', attributes: {'class': 'ico_down1'}},
    //   { name: 'Синяя рамка справа', element: 'div', attributes: {'class':'quote quote_left quote_small quote_blue'}},
    //  { name: 'Синяя рамка слева', element: 'div', attributes: {'class':'quote quote_right quote_small quote_blue'}},
    //  { name: 'Красная рамка справа', element: 'div', attributes: {'class':'quote quote_left quote_small'}},
    // { name: 'Красная рамка слева', element: 'div', attributes: {'class':'quote quote_right quote_small'}},
    // { name: 'Синяя раммка снизу', element: 'div', attributes: {'class': 'quote quote_up quote_small quote_blue'}},
    //  { name: 'Синяя раммка сверху', element: 'div', attributes: {'class': 'quote quote_small quote_blue'}},
    //  { name: 'Красная раммка снизу', element: 'div', attributes: {'class': 'quote quote_up quote_small'}},
    //  { name: 'Красная раммка сверху', element: 'div', attributes: {'class': 'quote quote_small'}}



]);

//CKEDITOR.config.stylesSet = 'added_style';