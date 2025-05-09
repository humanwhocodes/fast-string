/**
 * @fileoverview A utility for fast string comparisons by character codes.
 */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Validates that a value is a string.
 * @param {any} value The value to check.
 * @throws {TypeError} If the value is not a string.
 */
function validateString(value) {
    if (typeof value !== "string") {
        throw new TypeError(`Expected string but received ${typeof value}.`);
    }
}

//-----------------------------------------------------------------------------
// Main Functionality
//-----------------------------------------------------------------------------

/**
 * Compares two strings by character codes.
 * @param {string} str1 The first string to compare.
 * @param {string} str2 The second string to compare.
 * @returns {number} 0 if strings are equal, negative if str1 < str2, positive if str1 > str2.
 * @throws {TypeError} If either argument is not a string.
 */
export function compare(str1, str2) {
    validateString(str1);
    validateString(str2);

    const len1 = str1.length;
    const len2 = str2.length;
    const minLength = Math.min(len1, len2);
    
    // Compare character by character
    for (let i = 0; i < minLength; i++) {
        const charCode1 = str1.charCodeAt(i);
        const charCode2 = str2.charCodeAt(i);
        
        if (charCode1 !== charCode2) {
            return charCode1 - charCode2;
        }
    }
    
    // If we've reached here, the common parts are equal
    // So the shorter string comes first, or they're equal if same length
    return len1 - len2;
}

/**
 * Checks if two strings are equal by character codes.
 * @param {any} str1 The first string to compare.
 * @param {any} str2 The second string to compare.
 * @returns {boolean} True if both strings are equal, false otherwise.
 */
export function equals(str1, str2) {
    // Type checking
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        return false;
    }
    
    // If lengths differ, strings can't be equal
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Use the compare method for actual character comparison
    return compare(str1, str2) === 0;
}
