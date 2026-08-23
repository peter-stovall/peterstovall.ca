/*
 * Clew of Bookworms — attendance data.
 *
 * Hand-edit this file after each Gathering and `git push`. This is the
 * "database" for clew-attendance.html — a plain JS object (not JSON) so it
 * can be loaded with a <script src> tag and works when the site is opened
 * straight off disk, not just when served over http(s).
 *
 * Dates are "YYYY-MM-DD" strings, always the Gathering's calendar date
 * (Vancouver local), pulled from the "So Solid Clew" recurring calendar
 * event unless noted otherwise.
 *
 * Only record what's actually confirmed. If you don't know something
 * (e.g. who else was at a Gathering), leave attendees as null rather than
 * guessing — the display page shows "not on file" for those.
 */
const CLEW_ATTENDANCE_DATA = {
  members: ["Peter", "Ed", "Louis", "Dom", "Sam", "George", "Oli", "Angus"],

  // The current Good-Standing cycle: per the charter amendment, a member
  // needs 5+ of 8 Gatherings "within a cycle of eight (8)" — a fresh
  // non-overlapping block, not a rolling window. This cycle began in
  // August 2026.
  currentCycle: {
    label: "Cycle starting August 2026",
    gatherings: [
      {
        date: "2026-08-06",
        attendees: ["Louis", "Dom", "Sam", "George", "Oli"],
        absentees: ["Peter", "Ed", "Angus"],
        source:
          "WhatsApp: Ed [08-05, 1:38am] (\"this Thursday\"), Angus [08-07, 12:40am] (\"bail last minute\"), George [08-07, 1:17am] (\"pete angus ed who are oot\")",
      },
      {
        date: "2026-09-03",
        scheduled: true,
        attendees: null,
        absentees: null,
        note:
          "Not yet occurred (first Thursday of September). Ed has a declared Good Cause absence on file for this date — see goodCauseDeclarations below. Nobody else's attendance is known yet.",
      },
    ],
  },

  // Gatherings before the current cycle. Kept ONLY for the consecutive-
  // absence rule (Article II, Section I(ii)), which the Clew confirmed is
  // NOT reset by cycle boundaries — they do not count toward the 5-of-8
  // cycle tally above.
  priorGatherings: [
    {
      date: "2026-07-16",
      attendees: null,
      absentees: ["Ed"],
      note:
        "Only Ed's absence is confirmed from what's been pasted in. Full roster not on file — nobody else's July attendance should be assumed.",
    },
  ],

  // Good Cause declarations (Article II, Section II). "Good Cause" itself
  // is always a Clew judgment call, recorded manually here — this tool
  // only checks the objective, mechanical facts: was something declared,
  // and was it >=4 weeks before the missed Gathering.
  goodCauseDeclarations: [
    {
      member: "Ed",
      missedGathering: "2026-07-16",
      declaredDate: null,
      reason: "Not specified",
      source:
        "Not in the pasted WhatsApp export — Peter's own summary states this was declared 4+ weeks in advance, but the declaration message itself hasn't been confirmed against the record.",
      confirmed: false,
    },
    {
      member: "Peter",
      missedGathering: "2026-08-06",
      declaredDate: null,
      reason: "Not specified",
      source:
        "Not in the pasted WhatsApp export — Peter's own summary states this was declared 4+ weeks in advance, but the declaration message itself hasn't been confirmed against the record.",
      confirmed: false,
    },
    {
      member: "Ed",
      missedGathering: "2026-09-03",
      declaredDate: "2026-08-05",
      reason: "Mother in town the first Thursday of September",
      source: "WhatsApp Ed [08-05, 1:38am]",
      confirmed: true,
    },
  ],
};
