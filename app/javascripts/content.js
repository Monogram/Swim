(function(swim) {
  swim.content = {
    initiate: function() {
      $(document).live("pageshow", this.resizeBackground);
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
