(function(swim) {
  swim.records.calendar = {
    initiate: function() {
      $("#calendar").live("pageinit", _.bind(function(event){
        this.onSelect($("#calendar .calendar").val());
      }, this));

      $("#calendar .calendar").datepicker({
        showOtherMonths: true,
        beforeShowDay: function(date) {
          return [true, swim.records.getRecords(date).length > 0 ? "has-events" : ""];
        },
        onSelect: _.bind(this.onSelect, this)
      });

      $("#calendar .records li").die("click").live("click", _.bind(function(event) {
        var records = swim.storage.get("records");
        var date = $("#calendar .calendar").val().split(/\//);
        var key = [parseInt(date[1], 10), parseInt(date[0], 10) - 1, date[2]].join("-");

        _.each(records[key], function(record, i) {
          if (record.stroke === $(event.target).closest("li").attr("stroke")) {
            records[key].splice(i, 1);
            return false;
          }
        });

        swim.storage.set("records", records);
        this.onSelect($("#calendar .calendar").val());
      }, this));
    },
    onSelect: function(dateText) {
      $("#calendar .records").empty().append(
        this.renderRecords(this.getRecordsByDateText(dateText))
      ).listview("refresh");
    },
    getRecordsByDateText: function(dateText) {
      return swim.records.getRecords(swim.records.dateTextToDate(dateText));
    },
    renderRecords: function(records) {
      return _.map(records, _.bind(function(record) {
        return this.renderRecord(record).get(0);
      }, this));
    },
    renderRecord: function(record) {
      var stroke = {
        "breaststroke": "蛙式",
        "freestyle": "自由式",
        "backstroke": "背泳",
        "butterfly-stroke": "蝶泳",
        "other": "其他"
      }[record.stroke];
      return $("<li data-icon=\"minus\" stroke=\"" + record.stroke + "\"><a>" + record.meters + "米" + stroke + " (" + record.minutes + "分鐘)</a></li>");
    }
  };
})(swim);
