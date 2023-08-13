
/**
 * @param {string} input
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (input, goal) {
    if (input.length !== goal.length) {
        return false;
    }
    this.ALPHABET_SIZE = 26;

    return equalInitialStrings_canRemainEqualByTwoSwaps(input, goal)
            || notEqualInitialStrings_canBeMadeEqualByTwoSwaps(input, goal);
};

/**
 * @param {string} input
 * @param {string} goal
 */
function SwapPair(first, second) {
    this.first = first;
    this.second = second;
}

/**
 * @param {string} input
 * @param {string} goal
 * @return {boolean}
 */
function equalInitialStrings_canRemainEqualByTwoSwaps(input, goal) {
    if (input === goal) {
        const frequency = new Array(this.ALPHABET_SIZE).fill(0);
        for (let i = 0; i < goal.length; ++i) {
            if (++frequency[goal.codePointAt(i) - 'a'.codePointAt(0)] === 2) {
                return true;
            }
        }
    }

    return false;
}

/**
 * @param {string} input
 * @param {string} goal
 * @return {boolean}
 */
function notEqualInitialStrings_canBeMadeEqualByTwoSwaps(input, goal) {
    const swapPairs = new Array();//SwapPair[]
    for (let i = 0; i < goal.length && swapPairs.length <= 3; ++i) {
        if (input.charAt(i) !== goal.charAt(i)) {
            swapPairs.push(new SwapPair(input.charAt(i), goal.charAt(i)));
        }
    }

    return swapPairs.length === 2
            && swapPairs[0].first === swapPairs[1].second
            && swapPairs[0].second === swapPairs[1].first;
}
