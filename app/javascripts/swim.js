(function() {

  this.swim = {
    onLoad: function() {
      new Charts({
        y: [5, 8, 16, 16, 16.5, 18, 27],
        ylim: [0, 30],
        XTickLabel: ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7"],
        YTick: [5, 10, 15, 20, 25, 30],
        xLabel: "?���?�",
        yLabel: "累�?�消?��?��路?��",
        title: "結?��"
      }).plot($("#cumulative_calories_per_date").get(0));
    }
  };

  // Store an object in localStorage:
  // localStorage.setObject("key", object)
  Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
  };

  // Get an object in localStorage:
  // localStorage.getObject("key")
  Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
  };

}).call(this);