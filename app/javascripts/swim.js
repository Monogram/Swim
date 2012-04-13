(function() {

  this.swim = {
    onLoad: function() {
      new Charts({
        y: [5, 8, 16, 16, 16.5, 18, 27],
        ylim: [0, 30],
        XTickLabel: ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7"],
        YTick: [5, 10, 15, 20, 25, 30],
        xLabel: "日子",
        yLabel: "累積消耗卡路里",
        title: "成績"
      }).plot($("#cumulative_calories_per_date").get(0));
    }
  };

}).call(this);
