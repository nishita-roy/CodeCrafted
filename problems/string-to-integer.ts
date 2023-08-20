/**
 Question: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

  The algorithm for myAtoi(string s) is as follows:

  1. Read in and ignore any leading whitespace.
  2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
  3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
  4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
  5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
  6. Return the integer as the final result.

  Example: Input: s = "   -42"
          Output: -42
 */

function myAtoi(s: string): number {
  const stringLength = s.length;
  let sign = 1;
  let reverse = 0;

  for (let i = 0; i < stringLength; i++) {
      // Ignore white spaces
      if (s[i] === ' ') continue;

      if (s[i] === '-' || s[i] === '+') {
          sign =  s[i] === '-'? -1 : 1;
          if (!/[0-9]/.test(s[i+1])) return 0;
          continue;
      }

      if (!/[0-9]/.test(s[i])) break;

      reverse = reverse * 10 + +s[i];
      if (!/[0-9]/.test(s[i+1])) break;
  }

  return sign === -1 ? Math.max(-(Math.pow(2, 31)), -reverse) : Math.min(Math.pow(2, 31) - 1, reverse);
};
