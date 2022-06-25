const { findMedianSortedArrays } = require("../findMedianSortedArrays");

describe("findMedianSortedArrays", () => {
  test("should return value if there is only one element", () => {
    expect(findMedianSortedArrays([3], [])).toEqual(3);
    expect(findMedianSortedArrays([], [1])).toEqual(1);
  });

  test("should return 0 for arrays with 0's", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0);
  });

  test("should work if first array is empty", () => {
    expect(findMedianSortedArrays([], [1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  test("should work if second array is empty", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4, 5], [])).toEqual(3);
  });

  test("should work with one element arrays", () => {
    expect(findMedianSortedArrays([2], [1])).toEqual(1.5);
    expect(findMedianSortedArrays([1], [3])).toEqual(2);
  });

  test("should work with disproportionate arrays", () => {
    expect(findMedianSortedArrays([1, 3, 4, 6], [2])).toEqual(3);
    expect(findMedianSortedArrays([2], [1, 3, 4, 6])).toEqual(3);
  });

  test("should workd with even number of elements", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4, 5, 8], [3, 4, 5, 6])).toEqual(4);
  });

  test("should workd with odd number of elements", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4, 5, ], [3, 4, 5, 6])).toEqual(4);
  });
});
