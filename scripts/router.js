import BookmarkListView from './views/bookmarkListView';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login'
  },

  initialize: function() {

  },

  /*
  / Route Callbacks
  */

  index: function() {
    var bookmarkListView = new BookmarkListView();
    $('body').prepend(bookmarkListView.el);
  },

  login: function() {

  }


});

var router = new Router();

export default router;
