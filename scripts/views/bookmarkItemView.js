export default Backbone.View.extend({
  template: JST.bookmarkItem,
  tagName: 'li',
  className: 'bookmark-list-item',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
