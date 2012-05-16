(function(swim) {
  swim.footer = {
    page: "",
    initiate: function() {
      $(document).live( "pageinit", _.bind(function(){
        $(".ui-footer .ui-navbar li a").die("touchstart").live("touchstart", _.bind(function(event) {
          _.each(["schedule", "records", "information", "about", "register"], _.bind(function(p) {
            if ($(event.target).closest("a").hasClass("footer-" + p))  {
              this.page = p;
              return true;
            }
          }, this))
        }, this));
      }, this));

      $(document).live("pageshow", _.bind(function(){
        $(".ui-footer .ui-navbar li a.footer-" + this.page + ":visible").addClass("ui-btn-active");
      }, this));
      delete this.initiate;
    }
  };
})(swim);
