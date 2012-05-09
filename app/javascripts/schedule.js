(function(swim) {
  swim.schedule = {
    initiate: function() {
      $("#schedule").live( "pageinit", function(){
        $("#schedule input[type=checkbox]").die("change").live("change", function(event) {
          var checkbox = $(event.target).closest("input[type=checkbox]");
          var schedule = swim.storage.get("schedule") || {};
          schedule[checkbox.attr("id").replace(/schedule-/, "")] = checkbox.is(":checked");
          swim.storage.set("schedule", schedule);
        });

        $("#schedule .schedule").die("click").live("click", function(event) {
          var li = $(event.target).closest(".schedule");
          li.find(".ui-icon").toggleClass("ui-icon-arrow-d").toggleClass("ui-icon-arrow-u");
          li.next().toggle();
        });
      });
      $("#schedule").live("pageshow", _.bind(this.render, this));
    },
    render: function() {
      var schedule = swim.storage.get("schedule") || {};
      _.each(schedule, function(checked, id) {
        $("#schedule-" + id).attr("checked", checked).checkboxradio("refresh");
      });
      $(".schedule").next().hide();
    }
  };
})(swim);
