var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    seen: false,
    todos: [
      { text: "wash hair" },
      { text: "go to bed early" },
      { text: "brush teeth" }
    ]
  },
  methods: {
    removeListItem: function(x) {
      this.todos = this.todos.filter((todo) => todo !== this.todos[x]);
      console.log(this.todos);
    },
    reverseText: function() {
      this.message
        .split("")
        .reverse()
        .join("");
    },
    showText: function() {
      this.seen = !this.seen;
    }
  }
});
