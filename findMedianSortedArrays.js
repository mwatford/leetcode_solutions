function findMedianSortedArrays(nums1, nums2) {
  let l = nums1.length + nums2.length;
  let steps = l / 2 + 1;
  let s = [];

  while (steps > 0) {
    if (nums1.length && nums2.length) {
      a = nums1.at(-1) > nums2.at(-1) ? nums1.pop() : nums2.pop();
    } else if (!nums2.length) {
      a = nums1.pop();
    } else {
      a = nums2.pop();
    }

    s.push(a);
    if (s.length > 2) s.shift();
    steps--;
  }

  if (l % 2 === 0) return s.reduce((a, b) => a + b) / 2;

  return s[0];
}

module.exports = { findMedianSortedArrays };
