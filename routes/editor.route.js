var express = require('express');
var router = express.Router();
var database = require('../database/dbo');
var db = database.connectTo('blog');
var mkd = require('markdown');

// GET route for reading data
router.get('/', function(req, res, next) {
    res.render('editor', { title: 'Editor' });
});

router.post('/render', function(req, res, next) {
    var content = req.body.markdown;
    res.setHeader('Content-Type', 'text/html');
    var rendered = 'working';
    try {
        rendered = mkd.markdown.toHTML(content);
    } catch (error) {}
    res.send(rendered);
});

router.post('/save', function(req, res, next) {
    var title = req.body.title;
    var content = req.body.mkd;
    var rendered = 'working';
    try {
        rendered = mkd.markdown.toHTML(content);
    } catch (error) {}

    var article = {
        title: title,
        body: rendered,
    };
    db.create(article);
    res.redirect('/editor');
});

module.exports = router;
