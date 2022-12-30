const { createHash } = require('crypto');

function sha256 (string) {
	return createHash('sha256').update(string).digest('hex');
}