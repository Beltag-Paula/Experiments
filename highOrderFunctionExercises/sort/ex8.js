// 8. Date Sort (Expert)
// Goal: Sort by date string (oldest first).
// Input: [{"d": "2023-01-01"}, {"d": "2022-01-01"}]
// Output: [{"d": "2022-01-01"}, {"d": "2023-01-01"}]

const input = [
  { d: "2026-01-01" },
  { d: "2027-01-01" },
  { d: "2023-01-01" },
  { d: "2022-01-01" },
  { d: "2024-01-01" },
  { d: "2020-01-01" },
];

const output = input.sort((a, b) => a.d.localeCompare(b.d));

console.log(output);
