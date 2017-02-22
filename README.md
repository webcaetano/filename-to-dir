# filename-to-dir

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
<!-- [![Test coverage][coveralls-image]][coveralls-url] -->

> Use filenames to create folders schema.

## Installation

```
npm install filename-to-dir --save
```

## Usage

```
namedir(glob,dest,options,callback)
```

## Example 

```javascript
var namedir = require('filename-to-dir');


namedir('**/*.png','./destFolder',function(){

});

// this
// heroes_$_lulu_$_hit_$_001.png
// heroes_$_lulu_$_hit_$_002.png
// heroes_$_janna_$_walk_$_001.png

// return
// destFolder/heroes/lulu/hit/001.png
// destFolder/heroes/lulu/hit/002.png
// destFolder/heroes/janna/walk/001.png

// or
namedir(['**/*.png'],'./destFolder',{split:'@'},function(){

});

// with all options
namedir(['**/*.png'],'./destFolder',{split:'@'},function(err,data){

});
```

## Options


<table>
<tr>
<td><strong>Option</strong></td>
<td width="300"><strong>Description</strong></td>
<td><strong>Default</strong></td>
</tr>
<tr>
<td><code>split</code></td>
<td>Split string.</td>
<td><code>_$_</code></td>
</tr>
</table>


## CLI

```
npm install filename-to-dir -g
```

```
Usage
	$ namedir <glob> <dest>

Options
	--split Split string. Default: "_$_"

Examples
	namedir "**/*.png"
	namedir "**/*.png" destFolder/
	namedir "**/*.png" "destFolder/" --split "@"
```


## License

MIT

[npm-image]: https://img.shields.io/npm/v/filename-to-dir.svg?style=flat-square
[npm-url]: https://npmjs.org/package/filename-to-dir
[travis-image]: https://img.shields.io/travis/webcaetano/filename-to-dir.svg?style=flat-square
[travis-url]: https://travis-ci.org/webcaetano/filename-to-dir
<!-- [coveralls-image]: https://img.shields.io/coveralls/blakeembrey/filename-to-dir.svg?style=flat 
[coveralls-url]: https://coveralls.io/r/blakeembrey/filename-to-dir?branch=master
-->
