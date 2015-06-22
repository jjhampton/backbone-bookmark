export default Backbone.View.extend({
  template: JST.bookmarkList,
  className: 'bookmark-list',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
