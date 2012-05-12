(function(swim) {
  swim.footer = {
    page: "",
    initiate: function() {
      $(document).live( "pageinit", _.bind(function(){
        $(".ui-footer .ui-navbar li a").die("click").live("click", _.bind(function(event) {
          _.each(["schedule", "records", "information", "about", "register"], _.bind(function(p) {
            if ($(event.target).closest("a").hasClass("footer-" + p))  {
              this.page = p;
              return true;
            }
          }, this))
        }, this));
      }, this));

      $(document).live("pageshow", _.bind(function(){
        var size = window.innerWidth / 5;
        $(".ui-btn-icon-top .ui-btn-inner").css("padding", size + "px 0 0");
        $(".ui-footer .ui-navbar .ui-btn .ui-icon").css({
          height: size,
          width: size
        });
        $(".ui-footer .ui-navbar li a.footer-" + this.page + ":visible").addClass("ui-btn-active");
      }, this));
    }
  };
})(swim);
