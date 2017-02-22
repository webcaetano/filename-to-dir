var _ = require('lodash');
var glob = require('glob');
var path = require('path');
var fs = require('fs');
var test = require('ava');
var mkdirp = require('mkdirp');
var tempfile = require('tempfile');
var creaturesData = require('data-creatures');

var self = require('./');

test.cb('should change filenames to folders',function(t){
	// t.plan(3);

	var tmpFolder = tempfile();

	var creatures = creaturesData({size:3,plural:true});

	_.each(creatures,function(creature){
		_.each([
			'atk',
			'run',
			'die',
		],function(action){
			// mkdirp.sync(path.join(tmpFolder,creature,action))
			mkdirp.sync(path.join(tmpFolder))

			_.times(_.random(1,5),function(i){
				var fileName = [creature,action,_.padStart(i,3,'0')+'.png'].join('_$_');

				fs.writeFileSync(path.join(tmpFolder,fileName),'Yup, that tasted purple');
			});
		})
	})


	self(path.join(tmpFolder,'/**/*'), tmpFolder,function(err,data){
		// console.log(glob.sync(path.join(tmpFolder,'/**/*'),{nodir:true}));

		t.falsy(err);
		t.truthy(glob.sync(path.join(tmpFolder,'/*'),{nodir:true}).length);
		t.pass();
		t.end();
	})
});

test.cb('should change filenames to folders with options',function(t){
	// t.plan(3);
	var split = "_@_";

	var tmpFolder = tempfile();

	var creatures = creaturesData({size:3,plural:true});

	_.each(creatures,function(creature){
		_.each([
			'atk',
			'run',
			'die',
		],function(action){
			// mkdirp.sync(path.join(tmpFolder,creature,action))
			mkdirp.sync(path.join(tmpFolder))

			_.times(_.random(1,5),function(i){
				var fileName = [creature,action,_.padStart(i,3,'0')+'.png'].join(split);

				fs.writeFileSync(path.join(tmpFolder,fileName),'Yup, that tasted purple');
			});
		})
	})


	self(path.join(tmpFolder,'/**/*'), tmpFolder, {split},function(err,data){
		// console.log(glob.sync(path.join(tmpFolder,'/**/*'),{nodir:true}));

		t.falsy(err);
		t.truthy(glob.sync(path.join(tmpFolder,'/*'),{nodir:true}).length);
		t.pass();
		t.end();
	})
});
