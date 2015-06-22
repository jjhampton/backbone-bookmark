import BookmarkItemView from './bookmarkItemView';

export default Backbone.View.extend({
  template: JST.bookmarkList,
  tagName: 'ul',
  className: 'bookmark-list',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    this.renderChildren();
  },

  renderChildren: function() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new BookmarkItemView({
        model: child,
      });
      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;
  }
});
