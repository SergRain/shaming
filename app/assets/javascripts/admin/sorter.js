$( document ).ready(function() {
//$('.sidebar_section.panel .panel_contents').hide();

$('.sortable_rows').first().parent().parent().parent().parent().find("tbody").sortable({
  update: function(event, ui){
    var sort_model = document.location.href.split('?')[0];
    $.ajax({
      url: sort_model+"/sort?"+document.location.href.split('?')[1],
      type: 'post',
      headers: {
            'X-Transaction': 'sort shows',
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
          },
     // data: request,
      data: serializeArtworks(),
      complete: function(){
       // $(".paginated_collection").effect("highlight");
        repaintTable();
      }
    });
  }
});
});
function serializeArtworks(){
  var artworkIds = $.makeArray(
    $("span.sortable_rows").map(function(){
      return $(this).data("id");
    })
  );
  return {ids: artworkIds};
};

function repaintTable()
{
  $('.sortable_rows').parent().parent().parent().find("tr").removeClass('even odd');
  $('.sortable_rows').parent().parent().parent().find("tr").filter(":odd").addClass('odd');
  $('.sortable_rows').parent().parent().parent().find("tr").filter(":even").addClass('even');
}

