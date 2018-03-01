module.exports = function getZerosCount(number, base) {
  var zeroes = number;
  var b = base;
  for (var i = 2; i <= base; i++) {
    if (b % i === 0) {
      var k = 0;
      while (b % i === 0) {
         b = b / i;     
         k++;
      }
      var c = 0;
      var z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      zeroes = Math.min(zeroes, Math.floor(c / k))
    }
  }
  return zeroes;
}