(function(swim) {
  swim.poster = {
    initiate: function() {
      $("#poster").live("pageshow", function(){
        var img_height = 2048;
        var img_width = 1536;
        $("#poster .poster").css({
          "background-size": Math.min(img_width, window.innerWidth) + " " + (img_height / img_width * Math.min(img_width, window.innerWidth)),
          "height": img_height / img_width * Math.min(img_width, window.innerWidth)
        });
      });
    }
  };
})(swim);
