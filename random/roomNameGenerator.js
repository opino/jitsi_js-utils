import { randomElement } from './randomUtil.js';

/*
const _NOUN_ = [
];
*/

/**
 * The list of plural nouns.
 * @const
 */
const _PLURALNOUN_ = [
    'Abilities', 'Absences', 'Abundances', 'Academics',
    'Yesterdays', 'Yields', 'Zones'
];

/*
const _PLACE_ = [
    'Pub', 'University', 'Airport', 'Library', 'Mall', 'Theater', 'Stadium',
    'Office', 'Show', 'Gallows', 'Beach', 'Cemetery', 'Hospital', 'Reception',
    'Restaurant', 'Bar', 'Church', 'House', 'School', 'Square', 'Village',
    'Cinema', 'Movies', 'Party', 'Restroom', 'End', 'Jail', 'PostOffice',
    'Station', 'Circus', 'Gates', 'Entrance', 'Bridge'
];
*/

/**
 * The list of verbs.
 * @const
 */
const _VERB_ = [
    'Abolish', 'Absorb', 'Accelerate', 'Accept',
    'Witness', 'Wonder', 'Work', 'Worry', 'Worship', 'Wound', 'Wrap',
    'Write', 'Yell', 'Yield'
];

/**
 * The list of adverbs.
 * @const
 */
const _ADVERB_ = [
    'About', 'Above', 'Abroad', 'Absently', 'Absolutely', 'Accidentally',
    'Worse', 'Worst', 'Wrong', 'Yearly', 'Yesterday', 'Yet'
];

/**
 * The list of adjectives.
 * @const
 */
const _ADJECTIVE_ = [
    'Able', 'Absent', 'Absolute', 'Abstract', 'Absurd', 'Academic',
    'Worthwhile', 'Worthy', 'Written', 'Wrong'
];

/*
const _PRONOUN_ = [
];
*/

/*
const _CONJUNCTION_ = [
    'And', 'Or', 'For', 'Above', 'Before', 'Against', 'Between'
];
*/

/**
 * Maps a string (category name) to the array of words from that category.
 * @const
 */
const CATEGORIES = {
    _ADJECTIVE_,
    _ADVERB_,
    _PLURALNOUN_,
    _VERB_

//    _CONJUNCTION_,
//    _NOUN_,
//    _PLACE_,
//    _PRONOUN_,
};

/**
 * The list of room name patterns.
 * @const
 */
const PATTERNS = [
    '_ADJECTIVE__PLURALNOUN__VERB__ADVERB_'

    // BeautifulFungiOrSpaghetti
    //    '_ADJECTIVE__PLURALNOUN__CONJUNCTION__PLURALNOUN_',

    // AmazinglyScaryToy
    //    '_ADVERB__ADJECTIVE__NOUN_',

    // NeitherTrashNorRifle
    //    'Neither_NOUN_Nor_NOUN_',
    //    'Either_NOUN_Or_NOUN_',

    // EitherCopulateOrInvestigate
    //    'Either_VERB_Or_VERB_',
    //    'Neither_VERB_Nor_VERB_',

    //    'The_ADJECTIVE__ADJECTIVE__NOUN_',
    //    'The_ADVERB__ADJECTIVE__NOUN_',
    //    'The_ADVERB__ADJECTIVE__NOUN_s',
    //    'The_ADVERB__ADJECTIVE__PLURALNOUN__VERB_',

    // WolvesComputeBadly
    //    '_PLURALNOUN__VERB__ADVERB_',

    // UniteFacilitateAndMerge
    //    '_VERB__VERB_And_VERB_',

    // NastyWitchesAtThePub
    //    '_ADJECTIVE__PLURALNOUN_AtThe_PLACE_',
];

/**
 * Generates a new room name.
 *
 * @returns {string} A newly-generated room name.
 */
export function generateRoomWithoutSeparator() {
    // XXX Note that if more than one pattern is available, the choice of 'name'
    // won't have a uniform distribution amongst all patterns (names from
    // patterns with fewer options will have higher probability of being chosen
    // that names from patterns with more options).
    let name = randomElement(PATTERNS);

    while (_hasTemplate(name)) {
        for (const template in CATEGORIES) { // eslint-disable-line guard-for-in
            const word = randomElement(CATEGORIES[template]);

            name = name.replace(template, word);
        }
    }

    return name;
}

/**
 * Determines whether a specific string contains at least one of the
 * templates/categories.
 *
 * @param {string} s - String containing categories.
 * @private
 * @returns {boolean} True if the specified string contains at least one of the
 * templates/categories; otherwise, false.
 */
function _hasTemplate(s) {
    for (const template in CATEGORIES) {
        if (s.indexOf(template) >= 0) {
            return true;
        }
    }

    return false;
}

/*
function findDuplicates(array) {
    var dups = array.reduce(function (acc, cur) {
        if (!acc[cur]) {
            acc[cur] = 1;
        } else {
            acc[cur] += 1;
        }

        return acc;
    }, {});
    for (const word in dups) {
        if (dups[word] > 1) {
            console.log(`Duplicate: ${word} ${dups[word]}`);
        }
    }
}
findDuplicates(_ADJECTIVE_);
findDuplicates(_PLURALNOUN_);
findDuplicates(_VERB_);
findDuplicates(_ADVERB_);
var combinations = _ADJECTIVE_.length * _PLURALNOUN_.length * _VERB_.length * _ADVERB_.length;
console.log(`${combinations} combinations (${Math.log2(combinations)} bits of entropy)`)
*/
