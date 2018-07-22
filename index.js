new Vue({
    el: "main",
    data: {
      data: [],
      currentValue: ""
    },
    methods: {
      onValueChange: function({ target }) {
        this.currentValue = target.value;
      },
      send: function() {
        this.data.push(this.currentValue);
        this.currentValue = "";
      },
      deleteItem: function(e) {
        const index = e.target.value;
        if (index < 0) return;
        this.data.splice(index, 1);
      }
    }
  });
  