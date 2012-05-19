(function(swim) {
  swim.information.pools = {
    initiate: function() {
      $(document).bind( "pageinit", function(){
        $(".to-pool").unbind("click").bind("click", function(event) {
          swim.information.pool.render(swim.data.pools[$(event.target).closest(".to-pool").attr("pool-id")])
          $(".page").hide();
          $(".page#pool").show();
          swim.content.myScroll.refresh();
        });
      });
    }
  };
})(swim);
