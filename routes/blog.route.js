var express = require('express');
var router = express.Router();
var database = require('../database/dbo');
var db = database.connectTo('blog');
var pager = require('../paginater');

// GET route for reading data
router.get('/', function(req, res, next) {
    var page = req.query.p;
    if (!page) {
        page = 1;
    }
    var articles = db.find().reverse();
    res.render('blog', {
        articles: pager.paginate(articles, {
            page: page,
            recordsPerPage: 4,
        }),
    });
});

router.get('/posts/:id', function(req, res) {
    var id = Number(req.params.id);
    var article = db.findId(id);
    res.render('read', article);
});

module.exports = router;
