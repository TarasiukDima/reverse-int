module.exports = function reverse (n) {
    const textNumber = ('' + n).split('');

    return textNumber[0] === "-"
        ? textNumber.slice(1).reverse().join('')
        : textNumber.reverse().join('');
}
