(function() {

  this.swim = {
    onLoad: function() {
      $("#calendar_container").html(new Calendar({
        getDayContent: function(date) {
          return 0;
        }
      }).render().el);
    }
  };

}).call(this);
