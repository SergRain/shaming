(function() {
    CKEDITOR.dialog.add('youtube',
        function(editor) {
            return {
                title: 'Youtube', //editor.lang.youtube.title,
                minWidth: CKEDITOR.env.ie && CKEDITOR.env.quirks ? 300 : 300,
                minHeight: 100,
                onShow: function() {
                    this.getContentElement('general', 'content').getInputElement().setValue('')
                },
                onOk: function() {
                    val = this.getContentElement('general', 'content').getInputElement().getValue();
                    width = this.getContentElement('general', 'width').getInputElement().getValue();
                    height = this.getContentElement('general', 'height').getInputElement().getValue();
                    if (width == '') {
                        width = '1200';
                    }
                    if (height == '') {
                        height = '800';
                    }

                    val = val.replace("watch\?v\=", "v\/");
                    var text = '<figure class="figure-video"><div class="youtube_holder"><iframe title="YouTube video player" class="youtube-player" type="text/html" width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/'
                        //+this.getContentElement('general','content').getInputElement().getValue()
                        +
                        val +
                        '?rel=0" frameborder="0"></iframe></div></figure>';
                    this.getParentEditor().insertHtml(text)
                },
                contents: [{
                    label: editor.lang.common.generalTab,
                    id: 'general',
                    elements: [{
                            type: 'html',
                            id: 'pasteMsg',
                            html: '<div style="white-space:normal;">Добавить код ролика на Youtube (http://www.youtube.com/watch?v=<b style="color:blue;">ocIn4GcyMa4</b> то что вставлять выделено синим)</div><br />'
                        },
                        {
                            type: 'html',
                            id: 'content',
                            required: true,
                            style: 'width:300px; height:90px',
                            html: '<input style="' + 'border:1px solid #666666;' + 'background:white; width: 270px; padding: 5px 10px; font-szie: 12px;">',
                            focus: function() {
                                this.getElement().focus()
                            }
                        },
                        {
                            type: 'html',
                            id: 'width',
                            html: '<div style="white-space:normal;">Ширина (рекомендуемая 600)</div>'
                        },
                        {
                            type: 'html',
                            id: 'width',
                            required: true,
                            value: '600',
                            style: 'width:140px; height:90px',
                            html: '<input value="600" style="' + 'border:1px solid #666666;' + 'background:white; width: 130px; padding: 5px 10px; font-szie: 12px;">',
                            focus: function() {
                                this.getElement().focus()
                            }
                        }, {
                            type: 'html',
                            id: 'height',
                            html: '<div style="white-space:normal;">Высота (рекомендуемая 400)</div>'
                        },
                        {
                            type: 'html',
                            id: 'height',
                            required: true,
                            value: '400',
                            style: 'width:140px; height:90px',
                            html: '<input value="400" style="' + 'border:1px solid #666666;' + 'background:white; width: 130px; padding: 5px 10px; font-szie: 12px;">',
                            focus: function() {
                                this.getElement().focus()
                            }
                        }
                    ]
                }]
            }
        })
})();