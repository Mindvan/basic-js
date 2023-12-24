const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.transformMessage(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.transformMessage(encryptedMessage, key, false);
  }

  checkArguments(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string' || !message || !key)
      throw new Error('Incorrect arguments!')
  }

  transformMessage(message, key, encrypt) {
    this.checkArguments(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();

    const result = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (/^[A-Z]$/.test(char)) {
        const shift = (encrypt ? 1 : -1) * (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0));
        const transformedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift + 26) % 26) + 'A'.charCodeAt(0));
        result.push(transformedChar);
        j++;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
