(function(swim) {
  swim.content = {
    initiate: function() {
      $(document).live("pageshow", _.bind(this.onPageShow, this));
      delete this.initiate;
    },
    onPageShow: function() {
      this.resizeBackground();
      this.initiateIScroll();
    },
    initiateIScroll: function() {
      _.defer(function() {
        new iScroll($(".ui-content:visible")[0], {
          vScrollbar: false,
          bounce: false
        });
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
