function findMedianSortedArrays(nums1, nums2) {
  let l = nums1.length + nums2.length;
  let steps = l / 2 + 1;
  let s = [];

  for (let i = 0; i < steps; i++) {
    if (nums1.length && nums2.length) {
      nums1.at(-1) > nums2.at(-1) ? s.push(nums1.pop()) : s.push(nums2.pop());
    } else if (!nums2.length) {
      s.push(nums1.pop());
    } else {
      s.push(nums2.pop());
    }

    if (s.length > 2) s.shift();
  }

  if (l % 2 === 0) return s.reduce((a, b) => a + b) / 2;

  return s[0];
}

module.exports = { findMedianSortedArrays };
