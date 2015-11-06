import {
  PRIME_NUMBERS,
  COMPOSITE_NUMBERS,
  POSITIVE_INTEGERS
} from './_numbercache';

// ValueGenerator always generates a series of correct and incorrect values
// The total is based on the required quantity and the correct values
// vary between 50% + 5..15%

const ARRAY_LIMITS = 30;

export default class ValueGenerator {

  _buildValues(quantity, correctValues, wrongValues) {
    // How many correct values will there be?
    let correctCount = this._getCorrectCount(quantity);
    // Build values array, randomly choosing from the correct and wrong values
    let unshuffledValues = this._buildOptionsFromValues(correctValues, wrongValues, correctCount, quantity);
    // Shuffle array and return
    return {
      options: this._shuffle(unshuffledValues),
      correctCount: correctCount
    };
  }
  _randomInteger(min = 1, max = 10) {
    // FLOOR: [0, 1) * (max - min) + min + 1
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  _getCorrectCount(quantity) {
    return Math.round(quantity * (0.5 + this._randomInteger(5,15) * 0.01));
  }
  _buildOptionsFromValues(correctValues, wrongValues, correctQuantity, totalQuantity) {
    let options = [], correctCounter = 0;
    // Build array
    for (let i = 0; i < totalQuantity; i++) {
      if (correctCounter < correctQuantity) {
        let randomIndex = this._randomInteger(0, correctValues.length - 1);
        options.push({
          text: correctValues[randomIndex],
          correct: true
        });
        correctCounter++;
      }
      else {
        let randomIndex = this._randomInteger(0, wrongValues.length - 1);
        options.push({
          text: wrongValues[randomIndex],
          correct: false
        });
      }
    }
    return options;
  }
  _shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // Value generators
  primeNumbers(quantity) {
    // TODO: using only first ARRAY_LIMITS prime numbers
    // TODO: not accounting for difficulty
    let primes = PRIME_NUMBERS.slice(0, ARRAY_LIMITS);
    let composites = COMPOSITE_NUMBERS.slice(0, ARRAY_LIMITS);
    // Return
    return Object.assign(
      { title: 'Prime Numbers' },
      this._buildValues(quantity, primes, composites)
    );
  }

  multiples(quantity) {
    // TODO: not accounting for difficulty
    const MULTIPLE_BASE = this._randomInteger(2, 15);
    let multiples = POSITIVE_INTEGERS.slice(0, ARRAY_LIMITS).map(num => num * MULTIPLE_BASE);
    let nonMultiples = [];
    while (nonMultiples.length < ARRAY_LIMITS) {
      let index = this._randomInteger(0, multiples.length - 1);
      let num;
      do {
        let offset = this._randomInteger(1, 10);
        num = num = multiples[index] + offset;
      } while (num % MULTIPLE_BASE === 0);
      nonMultiples.push(num);
    }

    let randomMultiples = [], randomNonMultiples = [];
    multiples.forEach(mult => {
      let index = this._randomInteger(0, multiples.length - 1);
      randomMultiples.push(multiples[index]);
      index = this._randomInteger(0, nonMultiples.length - 1);
      randomNonMultiples.push(nonMultiples[index]);
    });

    // Return
    return Object.assign(
      { title: `Multiples of ${MULTIPLE_BASE}` },
      this._buildValues(quantity, randomMultiples, randomNonMultiples)
    );
  }

  equalToSum(quantity) {
    // TODO: not accounting for difficulty
    const EXPRESSION_RESULT = this._randomInteger(10, 30);

    // TODO: not accounting for difficulty
    let candidates = POSITIVE_INTEGERS.slice(0, ARRAY_LIMITS);

    let correctExpressions = [], wrongExpressions = [];
    for (var i = 0; i < candidates.length; i++) {
      let index = this._randomInteger(0, candidates.length - 1);
      let testNumber = candidates[index];

      // Correct
      // TODO: not accounting for difficulty
      let ex, exW;
      let wrongNumber = testNumber + this._randomInteger(1, 8);
      if (testNumber > EXPRESSION_RESULT) {
        ex = `${testNumber} - ${testNumber - EXPRESSION_RESULT}`;
        exW = `${wrongNumber} - ${testNumber - EXPRESSION_RESULT}`;
      } else {
        ex = `${testNumber} + ${EXPRESSION_RESULT - testNumber}`;
        exW = `${wrongNumber} + ${EXPRESSION_RESULT - testNumber}`;
      }
      correctExpressions.push(ex);
      wrongExpressions.push(exW);
    }

    // Return
    return Object.assign(
      { title: `Equals ${EXPRESSION_RESULT}` },
      this._buildValues(quantity, correctExpressions, wrongExpressions)
    );
  }

}
