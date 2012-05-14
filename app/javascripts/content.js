(function(swim) {
  swim.content = {
    initiate: function() {
      $(document).live("pageshow", _.bind(this.onPageShow, this));
    },
    onPageShow: function() {
      this.initiateIScroll();
      this.resizeBackground();
    },
    initiateIScroll: function() {console.log("a")
      new iScroll($(".ui-content:visible")[0], {
        vScrollbar : false,
        bounce     : false,
        momentum   : true
      });
    },
    resizeBackground: function() {
      _.defer(function() {
        $(".ui-content:visible").css(
          "height",
          window.innerHeight -
          $(".ui-header:visible").outerHeight(true) -
          $(".ui-footer:visible").outerHeight(true) -
          $(".ui-content:visible").outerHeight(true) +
          $(".ui-content:visible").height()
        );
      });
    }
  };
})(swim);
