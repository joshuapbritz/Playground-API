var home = require('./routes/home.route');
var about = require('./routes/about.route');
var contact = require('./routes/contact.route');
var api = require('./routes/api.route');
var users = require('./routes/user.route');
var auth = require('./routes/auth.route');
var editor = require('./routes/editor.route');
var blog = require('./routes/blog.route');

module.exports = {
    home: home,
    about: about,
    contact: contact,
    api: api,
    users: users,
    auth: auth,
    editor: editor,
    blog: blog,
};
