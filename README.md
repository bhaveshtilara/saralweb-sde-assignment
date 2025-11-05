# 🧠 Merge Discontinuous Time Ranges

A simple Node.js module that merges overlapping or close time ranges into clean, non-overlapping intervals.  
Built as part of the **SDE Assignment – Saralweb (Nov 2025)**.

---

## 🧩 About

Each time range is represented as `[start, end)` — meaning it includes `start` but not `end`.  
Ranges can overlap, touch, or have small gaps.  
If the gap between two ranges is **smaller than a given threshold (in ms)**, they are merged.

Example:  
`[0, 5)` and `[5, 10)` → merged into `[0, 10)`  
`[1000, 2000)` and `[2500, 4000)` with threshold 600 → merged into `[1000, 4000)`

---

## ⚙️ Function

```js
/**
 * Merges discontinuous time ranges within a given threshold.
 * @param {Array<[number, number]>} ranges - List of [start, end) ranges
 * @param {number} threshold - Max gap (in ms) to still merge ranges
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */
const mergeTimeRanges = (ranges, threshold) => { ... }

module.exports = { mergeTimeRanges };
