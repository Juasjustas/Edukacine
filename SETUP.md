# Crowd Choice Quiz: setup guide

Students open a link, take the quiz, and their answers go straight into a Google Sheet.
You open the results board on the projector, and it updates every 5 seconds.

**What's in this folder**

| File | What it is |
|---|---|
| `index.html` | The quiz students take |
| `results.html` | The live results board for you / the projector |
| `config.js` | **The only file you edit**: the Google link, timings and the 20 questions |
| `style.css` | The look of both pages |
| `apps-script/Code.gs` | The small Google script that saves results to a Sheet |

Setup takes about 15 minutes. Do the steps in order.

---

## Step 1: Create the Google Sheet

1. Go to [sheets.new](https://sheets.new) (signed in to your Google account). A new empty sheet opens.
2. Name it, for example **Crowd Quiz Results** (click "Untitled spreadsheet" at the top left).

## Step 2: Add the script and get your web app link

1. In the sheet, click **Extensions → Apps Script**. A code editor opens in a new tab.
2. Delete everything in the editor, then paste the entire contents of `apps-script/Code.gs`.
3. Click the **💾 Save** icon.
4. Click **Deploy → New deployment**.
5. Click the gear icon next to "Select type" and choose **Web app**.
6. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
7. Click **Deploy**.
8. Google asks you to authorize access. Click **Authorize access** and choose your account.
   - You'll see "Google hasn't verified this app". That's normal for your own script.
     Click **Advanced → Go to (project name) (unsafe) → Allow**.
9. Copy the **Web app URL** (it ends in `/exec`).
10. Open `config.js` and paste it between the quotes:
    ```js
    SCRIPT_URL: "https://script.google.com/macros/s/AKfy.../exec",
    ```

> If you ever change `Code.gs`, use **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**
> so the same link keeps working. "New deployment" would give you a different link.

## Step 3: Put the site on GitHub Pages

1. Sign in at [github.com](https://github.com) and click **+ → New repository** (top right).
2. Name it, for example `crowd-quiz`. Set it to **Public**. Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Drag in **all files from this folder** (including the `apps-script` folder, it's harmless).
   Make sure `config.js` is the version with your link pasted in. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Branch", choose **main** and **/ (root)**, then **Save**.
6. Wait a minute and refresh. GitHub shows your address, like
   `https://YOUR-NAME.github.io/crowd-quiz/`

Your two links:

- **Quiz for students:** `https://YOUR-NAME.github.io/crowd-quiz/`
- **Results board:** `https://YOUR-NAME.github.io/crowd-quiz/results.html`

## Step 4: Test it

1. Open the results board with `?demo` at the end to see what it looks like with fake data:
   `.../results.html?demo`
2. Take the quiz once yourself (you can skip through quickly). The end screen should say
   **"Your answers were sent."**
3. Open the results board (without `?demo`). Your test appears within 5 seconds,
   and a new row appears in the Google Sheet.
4. Delete your test row in the Google Sheet before the real seminar (right-click the row → Delete row).

---

## Useful extras

**Several classes.** Add `?class=` to the student link, e.g.
`https://YOUR-NAME.github.io/crowd-quiz/?class=7A`
Results are labelled with the class, and the results board has a class dropdown.
You can also open `results.html?class=7A` to go straight to one class.

**Force a group when testing.** `?group=influence` or `?group=control`
(combine with class like this: `?class=test&group=influence`).

**Editing questions.** Change `config.js` on GitHub (open the file → ✏️ pencil icon → edit → Commit changes).
The site updates within a minute or two. For each question set `correct` to the right answer and `crowd` to the (wrong) answer the fake peers pick. If `crowd` is the same as `correct`, the fake peers pick the right answer on that question
(this makes them seem trustworthy); those questions don't count towards "going with the flow".
The start-screen instructions for each group are also in `config.js` (`INTRO_CONTROL`, `INTRO_INFLUENCE`).

**Starting fresh.** Delete the result rows in the Google Sheet (keep the header row).

**If a student's answers can't be sent** (e.g. Wi-Fi drops), their screen shows a code like **B-12-05**:
B = Team Influence (blue), R = Team Normal (red), then the number of correct answers, then how often
they went with the crowd on trap questions.
They can also tap "Try sending again". Resending never creates duplicates.

**Privacy.** No names or accounts are collected: only a random id, the class label, the team and the
letters they picked. The results link is public, so anyone with it could see these anonymous numbers.
Anyone who reads the page code could also send fake results; that's fine for a classroom demo.
