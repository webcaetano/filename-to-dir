#!/usr/bin/env node
'use strict';
var meow = require('meow');
var _ = require('lodash');
var self = require('./');

var cli = meow([
	'Usage',
		'$ namedir <glob>',
	'',
	'Options',
		'--split Split string. Default: "_$_"',
	'',
	'Examples',
		'namedir "**/*.png"',
		'namedir "**/*.png" "destFolder/"',
		'namedir "**/*.png" "destFolder/" --split "@"',
], {
	string: ['_']
});


var defaults = {
}

var options = _.extend({},defaults,{
	split: cli.flags.split,
})

options = _.omitBy(options,_.isUndefined);


var glob = _.nth(cli.input,0);
var dest = _.nth(cli.input,1);

// console.log(glob,dest,options,cli.input)
self(glob,dest,options);
