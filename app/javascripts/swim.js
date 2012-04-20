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
