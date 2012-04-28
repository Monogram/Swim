(function() {

  this.swim = {
    onLoad: function() {
      $("#calendar_container").html(new Calendar({
        getDayContent: function(date) {
          return 0;
        }
      }).render().el);

      $("#calorie_date").datepicker({ altField: "#" + $(this).attr( "id" ), showOtherMonths: true });
    }
  };

}).call(this);
