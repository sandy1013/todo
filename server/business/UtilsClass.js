const crypto = require('crypto');

class UtilsClass {
    GenerateSalt(length) {
        return crypto.randomBytes(length/2).toString('hex').slice(0, length);
    }

    EncryptDecryptAlgo(word, salt) {
        const hmac = crypto.createHmac('sha512', salt).update(word).digest('hex');
        return {
            hash: hmac,
            salt: salt
        }
    }

    SaltHash(word) {
        const salt = this.GenerateSalt(64);
        const hashed = this.EncryptDecryptAlgo(word, salt);
        return {
            hash: hashed.hash,
            salt: hashed.salt
        }
    }
}

module.exports = new UtilsClass();