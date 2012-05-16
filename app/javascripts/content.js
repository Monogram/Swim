(function(swim) {
  swim.content = {
    myScroll: null,
    initiate: function() {
      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

      $(document).live("pageshow", _.bind(this.onPageShow, this));
      delete this.initiate;
    },
    onPageShow: function() {
      this.resizeBackground();
      this.initiateIScroll();
    },
    initiateIScroll: function() {
      _.defer(_.bind(function() {
        if (this.myScroll) {
          this.myScroll.destroy(true);
          delete this.myScroll;
        }
        this.myScroll = new iScroll($(".ui-content:visible")[0], {
          vScrollbar: false,
          bounce: false
        });
      }, this));
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
