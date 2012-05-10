(function(swim) {
  swim.footer = {
    initiate: function() {
      $(document).live("pageshow", function(){
        var size = window.innerWidth / 5;
        $(".ui-btn-icon-top .ui-btn-inner").css("padding", size + "px 0 0");
        $(".ui-footer .ui-navbar .ui-btn .ui-icon").css({
          height: size,
          width: size
        });
      });
    }
  };
})(swim);
