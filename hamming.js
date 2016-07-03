var Hamming = function() {};

Hamming.prototype.compute = function( strandOne, strandTwo ) {
	var length = 0,
		result = 0;

	if ( (typeof strandOne) !== 'string' || 
		(typeof strandTwo !== 'string') ) {
		throw new Error('hamming.compute takes two strings.'); 
	}

	if ( strandOne.length === 0 || strandTwo.length === 0 ) {
		throw new Error('hamming.compute takes non-zero length strings.');
	}

	if ( strandOne.length !== strandTwo.length ) {
		throw new Error('DNA strands must be of equal length.');
	}

	length = strandOne.length;
	for ( i = 0 ; i < length ; i++ ) {
		if (strandOne[i] !== strandTwo[i]) {
			result += 1;
		}
	}

	return result;
};

module.exports = Hamming;