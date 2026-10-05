/* =========================================================
   GREITOJI VIKTORINA - SETTINGS
   This is the only file you need to edit.
   ========================================================= */

window.QUIZ_CONFIG = {

  /* 1. Google Apps Script web app URL (see SETUP.md, step 2) */
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycby84X2v0OhB2De1d2Dmve4FaBswASbKTgnCn8shMQHk31oPWqWclnSTcLC7Jaza2ZPleg/exec",

  /* 2. Timing and fake peers */
  SECONDS_PER_QUESTION: 10,
  // Each question gets a different random number of fake classmates, arriving at random moments.
  PEERS_MIN: 5,            // fewest fake classmates on a question
  PEERS_MAX: 9,            // most fake classmates on a question
  PEERS_FIRST_MIN: 1.5,    // the first one appears somewhere between these two times (seconds)
  PEERS_FIRST_MAX: 5,
  PEERS_LAST_BY: 9,        // all of them have answered by this time (seconds)
  PEERS_UNANIMOUS: 0.6,    // on questions where they pick the right answer: chance that ALL pick it
  PEERS_MAJORITY_MIN: 0.5, // on trap questions: the share picking the wrong "crowd" answer
  PEERS_MAJORITY_MAX: 0.85,//   is random between these (always more than half)

  /* 3. Start-screen instructions (one string per paragraph).
        CONTROL   = Team Normal (no peer icons)
        INFLUENCE = Team Influence (sees the fake peers)                        */
  INTRO_TITLE: "Greitoji viktorina",
  INTRO_CONTROL: [
    "Tavęs laukia 20 klausimų iš biologijos, istorijos, chemijos, fizikos ir kitų dalykų. Kiekvienas klausimas turi 4 atsakymus – pasirink tą, kuris, tavo manymu, yra teisingas.",
    "Kiekvienam klausimui turi 10 sekundžių. Kol laikas nesibaigė, atsakymą gali pakeisti. Jei nežinai atsakymo, gali klausimą praleisti.",
    "Klausimai pamažu sunkėja, todėl nesijaudink, jei į kai kuriuos neatsakysi. Atsakinėk savarankiškai ir nesitark su kitais."
  ],
  INTRO_INFLUENCE: [
    "Tavęs laukia 20 klausimų iš biologijos, istorijos, chemijos, fizikos ir kitų dalykų. Kiekvienas klausimas turi 4 atsakymus – pasirink tą, kuris, tavo manymu, yra teisingas.",
    "Kiekvienam klausimui turi 10 sekundžių. Kol laikas nesibaigė, atsakymą gali pakeisti. Jei nežinai atsakymo, gali klausimą praleisti. Šalia atsakymų matysi ir kitų mokinių pasirinkimus.",
    "Klausimai pamažu sunkėja, todėl nesijaudink, jei į kai kuriuos neatsakysi. Atsakinėk savarankiškai ir nesitark su kitais."
  ],

  /* 4. Questions, from easiest to hardest
        text:    the question
        options: the four answers, in order A, B, C, D
        correct: the right answer: "A", "B", "C" or "D"
        crowd:   the answer the fake peers pick: "A", "B", "C" or "D"
                 Same as "correct" = the peers look trustworthy (not counted as peer pressure).
                 Different from "correct" = a trap question.                     */
  QUESTIONS: [
    // Easy (peers pick the RIGHT answer on 1, 2, 3 and 5 to build trust)
    { text: "Kiek kojų turi voras?",
      options: ["6", "8", "10", "4"], correct: "B", crowd: "B" },
    { text: "Kuri planeta yra arčiausiai Saulės?",
      options: ["Venera", "Žemė", "Merkurijus", "Marsas"], correct: "C", crowd: "C" },
    { text: "Kuris organas pumpuoja kraują po visą kūną?",
      options: ["Plaučiai", "Kepenys", "Inkstai", "Širdis"], correct: "D", crowd: "D" },
    { text: "Kiek bus 7 × 8?",
      options: ["54", "56", "64", "48"], correct: "B", crowd: "A" },
    { text: "Kokia yra vandens cheminė formulė?",
      options: ["H₂O", "CO₂", "O₂", "H₂O₂"], correct: "A", crowd: "A" },

    // Medium (peers right again on 6 and 9)
    { text: "Kuriais metais buvo atkurta Lietuvos nepriklausomybė (Kovo 11-oji)?",
      options: ["1918", "1990", "1991", "1989"], correct: "B", crowd: "B" },
    { text: "Kuris žemynas yra didžiausias pagal plotą?",
      options: ["Afrika", "Šiaurės Amerika", "Azija", "Europa"], correct: "C", crowd: "A" },
    { text: "Kokias dujas augalai išskiria fotosintezės metu?",
      options: ["Anglies dioksidą", "Deguonį", "Azotą", "Vandenilį"], correct: "B", crowd: "A" },
    { text: "Kuris Lietuvos valdovas buvo vienintelis karūnuotas karalius?",
      options: ["Gediminas", "Vytautas", "Mindaugas", "Kęstutis"], correct: "C", crowd: "C" },
    { text: "Kuri ląstelės dalis vadinama ląstelės „energijos jėgaine“?",
      options: ["Branduolys", "Ribosoma", "Mitochondrija", "Vakuolė"], correct: "C", crowd: "A" },
    { text: "Koks yra greičio matavimo vienetas SI sistemoje?",
      options: ["km/h", "m/s", "m/s²", "N"], correct: "B", crowd: "A" },
    { text: "Kuriais metais įvyko Žalgirio mūšis?",
      options: ["1412", "1410", "1569", "1236"], correct: "B", crowd: "A" },

    // Hard (peers right once more on 13)
    { text: "Kurį cheminį elementą žymi simbolis Fe?",
      options: ["Fluorą", "Fosforą", "Geležį", "Šviną"], correct: "C", crowd: "C" },
    { text: "Kas parašė Lietuvos himną „Tautiška giesmė“?",
      options: ["Vincas Kudirka", "Antanas Baranauskas", "Maironis", "Jonas Basanavičius"], correct: "A", crowd: "C" },
    { text: "Kas buvo pirmasis Lietuvos Respublikos prezidentas?",
      options: ["Antanas Smetona", "Aleksandras Stulginskis", "Jonas Basanavičius", "Kazys Grinius"], correct: "A", crowd: "C" },
    { text: "Kokia yra taisyklingojo šešiakampio vidaus kampų suma?",
      options: ["540°", "720°", "360°", "900°"], correct: "B", crowd: "A" },

    // Very hard (almost nobody should know these)
    { text: "Kiek protonų turi anglies atomas?",
      options: ["6", "12", "8", "4"], correct: "A", crowd: "B" },
    { text: "Kiek chromosomų yra žmogaus kūno (ne lytinėje) ląstelėje?",
      options: ["23", "46", "44", "48"], correct: "B", crowd: "A" },
    { text: "Kuriais metais buvo išleista pirmoji lietuviška knyga?",
      options: ["1547", "1579", "1529", "1653"], correct: "A", crowd: "B" },
    { text: "Kuri upė yra ilgiausia iš tekančių tik Lietuvos teritorijoje?",
      options: ["Nevėžis", "Dubysa", "Šventoji", "Neris"], correct: "C", crowd: "A" }
  ]
};
