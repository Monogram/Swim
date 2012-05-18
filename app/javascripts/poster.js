(function(swim) {
  swim.poster = {
    initiate: function() {
      $(document).bind("pageinit", function(){
        var img_height = 2048;
        var img_width = 1536;
        var height = window.innerHeight - $(".ui-header:visible").outerHeight(true) - $(".ui-footer:visible").outerHeight(true);
        $("#poster .poster").css({
          "background-size":  (img_width / img_height * height) + " " + height,
          "height": height
        });
      });
      delete this.initiate;
    }
  };
})(swim);
