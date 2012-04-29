(function(swim) {
  swim.records = {
    initiate: function() {
      this.calendar.initiate();
      this.create.initiate();
    },
    getRecords: function(date) {
      return (swim.storage.get("records") || {})[[date.getDate(), date.getMonth(), date.getFullYear()].join("-")] || [];
    },
    dateTextToDate: function(dateText) {
      var d = dateText.split(/\//);
      return new Date(d[2], parseInt(d[0], 10) - 1, d[1])
    }
  };
})(swim);
