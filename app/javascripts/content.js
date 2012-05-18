(function(swim) {
  swim.content = {
    myScroll: null,
    initiate: function() {
      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      $(document).bind("pageshow", _.bind(this.onPageLoad, this));
      delete this.initiate;
    },
    onPageLoad: function() {
      this.bindEvents();
      _.defer(_.bind(function() {
        this.resizeBackground();
        this.initiateIScroll();
      }, this));
    },
    bindEvents: function() {
      $(".to-page").bind("click", function(event) {
        var obj = $(event.target).closest(".to-page");
        $(".page").hide();
        $(".page#" + obj.attr("target")).show();
        swim.content.myScroll.refresh();
      });
      $(".refresh-iscroll, .ui-collapsible").bind("click", function(event) {
        _.defer(function() {
          swim.content.myScroll.refresh();
        });
      });
    },
    initiateIScroll: function() {
      if (this.myScroll) {
        delete this.myScroll;
      }
      this.myScroll = new iScroll($(".ui-content:visible")[0], {
        vScrollbar: false,
        bounce: false
      });
    },
    resizeBackground: function() {
      $(".ui-content:visible").css(
        "height",
        window.innerHeight -
        $(".ui-header:visible").outerHeight(true) -
        $(".ui-footer:visible").outerHeight(true) -
        $(".ui-content:visible").outerHeight(true) +
        $(".ui-content:visible").height()
      );
    }
  };
})(swim);
