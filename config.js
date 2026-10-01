/* =========================================================
   CROWD CHOICE QUIZ - SETTINGS
   This is the only file you need to edit.
   ========================================================= */

window.QUIZ_CONFIG = {

  /* 1. Paste your Google Apps Script web app URL here (see SETUP.md, step 2).
        It looks like: https://script.google.com/macros/s/AKfy.../exec            */
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycby84X2v0OhB2De1d2Dmve4FaBswASbKTgnCn8shMQHk31oPWqWclnSTcLC7Jaza2ZPleg/exec",

  /* 2. Timing and fake peers */
  SECONDS_PER_QUESTION: 10,
  PEERS_START_AT: 5,       // seconds into a question when the peer icons start appearing
  PEERS_ON_CROWD: 6,       // icons that appear on the "crowd" answer
  PEERS_ELSEWHERE: 1,      // icons on one other answer, so it looks realistic (0 = off)
  PEER_INTERVAL_MS: 550,   // gap between icons appearing

  /* 3. Questions
        text:    the question
        options: the four answers, in order A, B, C, D
        crowd:   the answer the fake peers pick: "A", "B", "C" or "D"
                 (set this to the WRONG answer you want students nudged toward)  */
  QUESTIONS: [
    { text: "Question 1",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "A" },
    { text: "Question 2",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "B" },
    { text: "Question 3",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "C" },
    { text: "Question 4",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "D" },
    { text: "Question 5",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "A" },
    { text: "Question 6",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "B" },
    { text: "Question 7",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "C" },
    { text: "Question 8",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "D" },
    { text: "Question 9",  options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "A" },
    { text: "Question 10", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "B" },
    { text: "Question 11", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "C" },
    { text: "Question 12", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "D" },
    { text: "Question 13", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "A" },
    { text: "Question 14", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "B" },
    { text: "Question 15", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "C" },
    { text: "Question 16", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "D" },
    { text: "Question 17", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "A" },
    { text: "Question 18", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "B" },
    { text: "Question 19", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "C" },
    { text: "Question 20", options: ["Answer A", "Answer B", "Answer C", "Answer D"], crowd: "D" }
  ]
};
