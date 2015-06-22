export default Backbone.View.extend({
  template: JST.bookmarkItem,
  tagName: 'li',
  className: 'bookmark-list-item',

  events: {
    'click .bookmark-button-edit': 'editBookmark',
    'submit .bookmark-form-edit':
    'saveBookmark'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function() {
    console.log("edit clicked");
  },

  saveBookmark: function(event) {
    event.preventDefault();
    console.log("save button working", this.model.toJSON());
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    console.log(title, url);

  }
});
