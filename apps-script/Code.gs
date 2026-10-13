/**
 * Crowd Choice Quiz - Google Apps Script backend
 *
 * Paste this whole file into Extensions > Apps Script of your Google Sheet,
 * then deploy it as a web app (see SETUP.md, step 2).
 *
 *  - POST (from the quiz): saves one student's result as a new row.
 *  - GET  (from the results board): returns all rows as JSON.
 *
 * Students are anonymous: only a random id, class label, team and answers are stored.
 */

const SHEET_NAME = 'Results';
const HEADERS = ['time', 'id', 'class', 'team', 'answers', 'matched', 'other', 'skipped'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  let d;
  try {
    d = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'bad json' });
  }

  // Strict validation: only short, plain values ever reach the sheet.
  const id = String(d.id || '');
  const cls = String(d.cls || '');
  const team = String(d.team || '');
  const answers = String(d.answers || '');
  const num = v => Math.max(0, Math.min(100, parseInt(v, 10) || 0));
  if (!/^[a-z0-9]{6,30}$/.test(id)) return json_({ ok: false, error: 'bad id' });
  if (!/^[\w-]{0,20}$/.test(cls)) return json_({ ok: false, error: 'bad class' });
  if (team !== 'influence' && team !== 'control') return json_({ ok: false, error: 'bad team' });
  if (!/^[A-D-]{1,100}$/.test(answers)) return json_({ ok: false, error: 'bad answers' });

  // Saves happen one at a time (~0.5-1 s each). Wait up to 30 s for our turn; if Google is
  // still busy, say so right away so the quiz retries instead of hanging.
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) return json_({ ok: false, busy: true });
  try {
    const sh = getSheet_();
    const last = sh.getLastRow();
    if (last > 1) {
      const found = sh.getRange(2, 2, last - 1, 1).createTextFinder(id).matchEntireCell(true).findNext();
      if (found) return json_({ ok: true, duplicate: true });
    }
    // Leading apostrophe keeps Sheets from reading values like "8-B" as dates.
    sh.appendRow([new Date(), id, "'" + cls, team, "'" + answers, num(d.matched), num(d.other), num(d.skipped)]);
    SpreadsheetApp.flush();
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

function doGet() {
  const sh = getSheet_();
  const last = sh.getLastRow();
  if (last < 2) return json_({ rows: [] });
  const values = sh.getRange(2, 1, last - 1, HEADERS.length).getValues();
  const rows = values
    .filter(v => v[1]) // skip blank rows (e.g. after you clear data by hand)
    .map(v => ({
      time: v[0] instanceof Date ? v[0].toISOString() : String(v[0]),
      cls: String(v[2]),
      team: String(v[3]),
      answers: String(v[4]),
      matched: Number(v[5]) || 0
    }));
  return json_({ rows: rows });
}
