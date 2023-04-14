const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }
    encrypt(str, key) {
        if (!str || !key) {throw new Error('Incorrect arguments!')}
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let arrAlphabet = alphabet.split('');
        let arrKey = key
            .toLowerCase()
            .repeat(str.length)
            .slice(0, str.length)
            .split('')
            .map((e) => arrAlphabet.indexOf(e));
        str.split('').forEach((elem, ind) => (elem === ' ' ? arrKey.splice(ind, 0, ' ') : ''));
        str = str.toLowerCase().split('').map((element, index) => {
                if (alphabet.split('').includes(element)) {
                    return (arrAlphabet.indexOf(element) + arrKey[index]) % arrAlphabet.length;
                  }
                else {
                    return element;
                }
            }).map((e) => { return (typeof e === 'number' ? arrAlphabet[e] : e)});
        return this.isDirect ? str.join('').toUpperCase() : str.reverse().join('').toUpperCase();
    }

    decrypt(str, key) {
        if (!str || !key) {throw new Error('Incorrect arguments!');}
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let arrAlphabet = alphabet.split('');
        let arrKey = key.toLowerCase().repeat(str.length).slice(0, str.length).split('').map((e) => arrAlphabet.indexOf(e));
        str.split('').forEach((elem, ind) => (elem === ' ' ? arrKey.splice(ind, 0, ' ') : ''));

        str = str.toLowerCase().split('').map((element, index) => {
                if (alphabet.split('').includes(element)) {
                    let shiftVal = arrAlphabet.indexOf(element) - arrKey[index];
                    return shiftVal < 0 ? shiftVal + arrAlphabet.length : shiftVal;
                } else {
                    return element;
                }
            });

        str = str.map((val) => { return (typeof val === 'number' ? arrAlphabet[val] : val)});
        return this.isDirect ? str.join('').toUpperCase(): str.reverse().join('').toUpperCase();
    }
}

module.exports = {
  VigenereCipheringMachine
};
