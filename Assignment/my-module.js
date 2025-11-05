/**
 * Merge discontinuous time ranges within a given threshold.
 *
 * Behavior:
 * - Each range is [start, end), meaning start is included and end is excluded.
 * - Ranges that overlap or touch are always merged.
 * - Small gaps (strictly smaller than `threshold` ms) are treated as continuous.
 *
 * Example:
 *   mergeTimeRanges([[0, 10], [12, 15], [17, 20]], 3)
 *   => [ [0, 20] ]
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap).
 * @param {number} threshold - Maximum gap (in milliseconds) allowed between ranges to merge them.
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges.
 */
const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges)) {
    throw new TypeError("Expected 'ranges' to be an array of [start, end] pairs.");
  }

  const gapThreshold = Number.isFinite(threshold) ? Math.max(0, threshold) : 0;
  const validRanges = ranges
    .filter(r => Array.isArray(r) && r.length === 2)
    .map(([start, end]) => [Number(start), Number(end)])
    .filter(([start, end]) => Number.isFinite(start) && Number.isFinite(end) && start < end);

  if (validRanges.length === 0) return [];
  validRanges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const merged = [];
  let [currentStart, currentEnd] = validRanges[0];

  for (let i = 1; i < validRanges.length; i++) {
    const [nextStart, nextEnd] = validRanges[i];

    if (nextStart <= currentEnd) {
      currentEnd = Math.max(currentEnd, nextEnd);

    } else if (nextStart - currentEnd < gapThreshold) {
      currentEnd = Math.max(currentEnd, nextEnd);

    } else {
      merged.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }
  merged.push([currentStart, currentEnd]);

  return merged;
};

module.exports = { mergeTimeRanges };
