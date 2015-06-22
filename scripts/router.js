import BookmarkListView from './views/bookmarkListView';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login'
  },

  initialize: function() {
    this.bookmarks = new Backbone.Collection([
      {title: 'Google', url: 'https://www.google.com'},
      {title: 'Facebook', url: 'https://www.facebook.com'},
      {title: 'Yahoo', url: 'https://www.yahoo.com'},
    ]);
  },

  /*
  / Route Callbacks
  */

  index: function() {
    var bookmarkListView = new BookmarkListView({
      collection: this.bookmarks
    });
    $('body').prepend(bookmarkListView.el);
  },

  login: function() {

  }


});

var router = new Router();

export default router;
