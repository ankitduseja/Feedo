
/*
 * GET home page.
 */

function truncate( value, arg ) {
    var value_arr = value.split( ' ' );
    if( arg < value_arr.length ) {
        value = value_arr.slice( 0, arg ).join( ' ' );
    }
    return value;
}
 
exports.index = function(db) {
	return function(req, res){
	  //res.render('index', { title: 'Feedo' });
	    var collection = db.get('articles');
		var page=0;
        collection.find({},{limit:10},function(e,docs){
		
            res.render('index', {
				title: 'Feedo',
				pageno: page,
                "articles" : docs
            });
        });
	};
};

exports.loadajax = function(db) {
	return function(req, res){
	var page=req.param("pageId");
	x=page*20;
	  //res.render('index', { title: 'Feedo' });
	    var collection = db.get('articles');
        collection.find({},{skip:x,limit:10},function(e,docs){
		
            res.render('loadajax', {
				title: 'Feedo',
				pageno: page,
                "articles" : docs
            });
        });
	};
};