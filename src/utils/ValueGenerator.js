
// Pre generate random numbers (for pure action/creators)
let rand = [];
const RANDOM_MIN_VALUE = 2;
const RANDOM_MAX_VALUE = 35;
for (let i = 0; i < 100; i++) { // Using 100 as upper limit since this seems like a reasonable amount
  rand.push(Math.ceil(Math.random() * (RANDOM_MAX_VALUE - RANDOM_MIN_VALUE) + RANDOM_MIN_VALUE));
}

export const RANDOM_NUMBERS = rand;
