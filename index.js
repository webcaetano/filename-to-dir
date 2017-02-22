var path = require('path');
var fs = require('fs');
var glob = require('glob');
var cpFile = require('cp-file');
var async = require('async');
var _ = require('lodash');
var escapeRegexp = require('escape-string-regexp');

// insert defaults here
var defaults = {
	split:'_$_'
}

var self = function(src, dest, options, done){
	if(typeof options==='function') {
		var tmpVar = options;
		options = done ? done : {};
		done = tmpVar;
	}
	options = _.extend({},defaults,options);

	async.auto({
		files:function(callback){
			glob(src,{nodir:true},callback);
		},
		copy:['files',function(results,callback){
			var run = [];

			_.each(results.files,function(file){
				var data = path.parse(file);

				var newName = path.format({
					// dir:dest,
					name:data.name.replace(new RegExp(escapeRegexp(options.split),'g'),'/'),
					ext:data.ext,
				});

				run.push(function(callback){
					cpFile(file,path.join(dest,newName)).then(callback);
				});
			});

			async.parallel(run,callback);
		}]
	},function(err,results){
		if(done) done(err,results);
	})
}

module.exports = self;
