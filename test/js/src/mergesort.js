var util, array, random, operator;

util = require( "util" );
array = require( "aureooms-js-array" );
random = require( "aureooms-js-random" );
operator = require( "aureooms-js-operator" );

var check = function(ctor, n, diff) {
	var name = util.format("mergesort (new %s(%d), %s)", ctor.name, n, diff);
	console.log(name);
	test(name, function (assert) {

		// SETUP RANDOM
		var randint = random.randint;
		var sample = random.__sample__(randint);
		var shuffle = random.__shuffle__(sample);
		var iota = array.iota;
		var copy = array.copy;

		// SETUP SORT
		var tapemerge = sort.tapemerge;
		var mergesort = sort.__mergesort__( tapemerge, copy);

		// SETUP ARRAY, DEST
		var a = new ctor(n);
		var d = new ctor(n);
		iota(a, 0, n, 0);

		// SORT ARRAY
		shuffle(a, 0, n);
		mergesort( diff, a, 0, n, d, 0, n);

		// TEST PREDICATE
		var i = d.length;
		var sorted = true;
		if(i > 1){
			while (--i) {
				if ( diff( d[i-1], d[i] ) > 0 ) {
					sorted = false;
					break;
				}
			}
		}

		ok(sorted, 'check sorted');
		deepEqual(a.length, n, 'check length a');
		deepEqual(d.length, n, 'check length d');
	});
};

var DIFF = [
	sort.increasing,
	sort.decreasing
];

var N = [0, 1, 2, 10, 63, 64, 65];

var CTOR = [
	Array,
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
];

for (var k = 0; k < CTOR.length; k++) {
	for (var j = 0; j < N.length; j++) {
		if(CTOR[k].BYTES_PER_ELEMENT &&
			N[j] > Math.pow(2, CTOR[k].BYTES_PER_ELEMENT * 8)){
				continue;
		}
		for (var i = 0; i < DIFF.length; ++i) {
			check(CTOR[k], N[j], DIFF[i]);
		}
	}
}
