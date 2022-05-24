(function(){
	var youtubeCmd = {
		exec: function(editor){
			editor.openDialog('youtube');
			return
		}
	};
	CKEDITOR.plugins.add('youtube', {
		lang: ['en','uk', 'ru'],
		requires: ['dialog'],
		init: function(editor){
			var commandName = 'youtube';
			CKEDITOR.dialog.add(commandName, CKEDITOR.getUrl(this.path+'dialogs/youtube.js'));
			editor.addCommand(commandName, youtubeCmd);
			editor.ui.addButton('Youtube',{
				label: 'Youtube', //editor.lang.youtube.button,
				command: commandName,
				icon: this.path+"images/youtube.png"
			});
			CKEDITOR.dialog.add(commandName, CKEDITOR.getUrl(this.path+'dialogs/youtube.js'))
		}
	})
})();
