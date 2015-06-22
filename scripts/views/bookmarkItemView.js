export default Backbone.View.extend({
  template: JST.bookmarkItem,
  tagName: 'li',
  className: 'bookmark-list-item',

  events: {
    'click .bookmark-button-edit': 'editBookmark'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function() {
    console.log("edit clicked");
  }
});
