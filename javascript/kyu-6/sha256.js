// crypto is a core node module, createHash hashes strings using various algos including sha-256
const { createHash } = require('crypto');
// returns a new hash using the sha256 hexadecimal algo
function sha256 (string) {
	return createHash('sha256').update(string).digest('hex');
}