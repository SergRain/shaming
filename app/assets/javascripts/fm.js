var getUrlParam;

getUrlParam = function(paramName) {
  var match, reParam;
  reParam = new RegExp("(?:[?&]|&)" + paramName + "=([^&]+)", "i");
  match = window.location.search.match(reParam);
  if (match && match.length > 1) {
    return match[1];
  } else {
    return "";
  }
};

$(function() {
  var funcNum, rails_csrf;
  rails_csrf = {};
  rails_csrf[$("meta[name=csrf-param]").attr("content")] = $("meta[name=csrf-token]").attr("content");
  funcNum = window.location.search.replace(/^.*CKEditorFuncNum=(\d+).*$/, "$1");
  return $("#elfinder").elfinder({
    url: "/elfinder",
	uploadMaxSize: "100M",
    lang: "ru",
    uiOptions: {
      toolbar: [["back", "forward"], ["mkdir", "mkfile", "upload"], ["rm"], ["search"], ["view", "sort"]],
      tree: {
        openRootOnLoad: true,
        syncTree: true
      }
    },
    transport: new elFinderSupportVer1(),
    getFileCallback: function(file) {
//      file = ''+file;
      //console.log(file);
      window.opener.CKEDITOR.tools.callFunction(funcNum, file);
      return window.close();
    }
  });
});
