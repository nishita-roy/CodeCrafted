/**
 * 
  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
  The overall run time complexity should be O(log (m+n)).

  Example 1:
  Input: nums1 = [1,3], nums2 = [2]
  Output: 2.00000
  Explanation: merged array = [1,2,3] and median is 2.

  Example 2:
  Input: nums1 = [1,2], nums2 = [3,4]
  Output: 2.50000
  Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */


function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums1Length = nums1.length;
  const nums2Length = nums2.length;
  let i = 0;
  let j = 0;
  let k = 0;
  const mergedArray: number[] = [];
  let medianSum = 0;

  while (i < nums1Length + nums2Length) {
      if (j < nums1Length && nums1[j] < nums2[k] || k >= nums2Length) {
          mergedArray.push(nums1[j]);
          j++
      } else if (k < nums2Length) {
          mergedArray.push(nums2[k]);
          k++;
      }
      i++;
  }

  console.log(mergedArray)
  if (mergedArray.length % 2 === 0) {
      medianSum = (mergedArray[Math.floor((mergedArray.length)/2)] + mergedArray[Math.floor((mergedArray.length)/2) - 1])/2
  } else {
      medianSum = mergedArray[Math.floor(mergedArray.length/2)]
  }

  return medianSum;
};
