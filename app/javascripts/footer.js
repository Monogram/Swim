(function(swim) {
  swim.footer = {
    page: "",
    initiate: function() {
      $(document).bind( "pageinit", _.bind(function(){
        $(".ui-footer .ui-navbar li a").bind("click", function(event) {
          var obj = $(event.target).closest("a");
          $(".ui-footer .ui-navbar li a").removeClass("ui-btn-active");
          obj.addClass("ui-btn-active");
        });

        if (navigator.userAgent.indexOf("iPad") != -1) {
          $(".ui-footer .ui-navbar li a").addClass("ipad-icon");
        }
      }, this));
      delete this.initiate;
    }
  };
})(swim);
