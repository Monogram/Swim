(function() {
  this.swim.storage = {
    set: function(key, value) {
      return localStorage.setItem(key, JSON.stringify(value));
    },

    get: function(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  };
}).call(this);
