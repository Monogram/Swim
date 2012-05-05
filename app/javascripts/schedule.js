(function(swim) {
  swim.schedule = {
    initiate: function() {
      $("#schedule").live("pageshow", _.bind(this.render, this));

      $("#schedule input[type=checkbox]").die("change").live("change", function(event) {
        var checkbox = $(event.target).closest("input[type=checkbox]");
        var schedule = swim.storage.get("schedule") || {};
        schedule[checkbox.attr("id").replace(/schedule-/, "")] = checkbox.is(":checked");
        swim.storage.set("schedule", schedule);
      });
    },
    render: function() {
      var schedule = swim.storage.get("schedule") || {};
      _.each(schedule, function(checked, id) {
        $("#schedule-" + id).attr("checked", checked).checkboxradio("refresh");
      });
    }
  };
})(swim);
