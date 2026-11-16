// COLREG – semnale sonore, luminoase și de pericol (Clasa A, B). Sursă: questions.js.
const data = {
  title: 'COLREG · Semnale sonore și de pericol',
  subtitle:
    'Semnale de manevră, în canale înguste, pe vizibilitate redusă, semnale luminoase și de pericol (distress).',
  sections: [
    {
      title: '1. Echipament și termeni',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Lungimea', 'Echipament sonor'],
          rows: [
            ['< 12 m', 'Nu e obligată să aibă aparatele prescrise, dar trebuie să aibă **alt mijloc** de semnal sonor eficient.'],
            ['12 – 100 m', '**Fluier (whistle) + clopot (bell)**.'],
            ['≥ 100 m', '**Fluier + clopot + gong** (gongul **în pupa**).'],
          ],
        },
        {
          type: 'list',
          items: [
            '**Prolonged blast** = sunet de **4 – 6 secunde**. **Short blast** = sunet scurt (≈ 1 s).',
            'Clopotul sau gongul (sau ambele) pot fi înlocuite cu alt echipament cu aceleași caracteristici, dacă **se poate suna oricând manual**.',
            'Dacă sunt două fluiere la **> 100 m** unul de altul, pentru semnale de manevră și avertizare se folosește **unul singur**.',
            'Semnalele de manevră se dau când navele **se văd între ele** (in sight).',
          ],
        },
      ],
    },
    {
      title: '2. Semnale de manevră (nave care se văd)',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Sunet', 'Lumină (opțional)', 'Înseamnă'],
          rows: [
            ['**1 scurt**', '1 sclipire', 'Virez la **tribord**'],
            ['**2 scurte**', '2 sclipiri', 'Virez la **babord**'],
            ['**3 scurte**', '3 sclipiri', 'Mașina merge **înapoi** (astern propulsion)'],
            ['**5 scurte și rapide**', '≥ 5 sclipiri scurte și rapide', 'Nu înțeleg intenția celuilalt / îndoială că face destul pentru a evita coliziunea (danger signal)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Lumina de semnalizare: **albă, tot orizontul**; o sclipire durează **≈ 1 secundă**; între semnale succesive **cel puțin 10 secunde**.',
            'Semnalele cu fluierul pot fi **completate** cu semnale luminoase.',
            '**Nu se dă semnal** când treci **tribord la tribord** fără să schimbi drumul, la depășire pe apă liberă fără schimbare de drum, sau la plecarea de la chei.',
            'La depășire pe apă liberă cu virare la tribord: **1 scurt**.',
            'Cu vizibilitate redusă, la plecarea cu spatele dintr-un loc de acostare: **1 prelung**. Dacă vezi nave apropiindu-se: **3 scurte** la ieșirea din dană.',
          ],
        },
        {
          type: 'warn',
          text: [
            'Banca are întrebări cu „EXCEPT” despre **4 scurte** (nu se dă între nave care se văd; folosit doar ca semnal de identificare al pilotului). Reține: **4 scurte = pilot**, nu manevră.',
          ],
        },
      ],
    },
    {
      title: '3. Canale înguste',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Situația', 'Semnal'],
          rows: [
            ['Vreau să depășesc pe **tribord**', '**2 prelungi + 1 scurt**'],
            ['Vreau să depășesc pe **babord**', '**2 prelungi + 2 scurte**'],
            ['Sunt de acord să fiu depășit', '**prelung – scurt – prelung – scurt** (litera „C” din Codul Internațional)'],
            ['Mă apropii de o curbă / zonă unde alte nave pot fi ascunse', '**1 prelung**'],
            ['Îndoială la o navă care încrucișează', '**5 scurte și rapide**'],
          ],
        },
        {
          type: 'tip',
          text: 'Semnalul de intenție care **trebuie răspuns** de cealaltă navă îl dă **nava care depășește** într-un canal îngust.',
        },
      ],
    },
    {
      title: '4. Vizibilitate redusă – semnale sonore',
      blocks: [
        {
          type: 'list',
          items: [
            'Se dau **în sau lângă o zonă cu vizibilitate redusă**, **ziua și noaptea**.',
            'Dacă o navă **< 12 m** nu poate da semnalele prescrise, dă **alt semnal sonor eficient** la intervale de **maximum 2 minute**.',
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Nava', 'Semnal', 'Interval'],
          rows: [
            { group: 'În mers (underway)' },
            ['Motor, **cu mers** prin apă', '**1 prelung**', '≤ 2 min'],
            ['Motor, **oprit**, fără mers', '**2 prelungi** (≈ 2 s între ele)', '≤ 2 min'],
            ['NUC · RAM · CBD · velier · pescuit · remorcher / împingător', '**1 prelung + 2 scurte**', '≤ 2 min'],
            ['Navă remorcată (dacă are echipaj)', '**1 prelung + 3 scurte**', '≤ 2 min'],
            ['Împingător + împins, **unitate compusă**', '**1 prelung** (oprit: **2 prelungi**)', '≤ 2 min'],
            ['Pilot în serviciu', '**1 prelung** + identificare **4 scurte**', '≤ 2 min'],
            { group: 'La ancoră / eșuată' },
            ['La ancoră, **< 100 m**', 'Clopot: **sunet rapid ≈ 5 s**', '≤ 1 min'],
            ['La ancoră, **≥ 100 m**', 'Clopot în prova **≈ 5 s**, imediat **gong în pupa ≈ 5 s**', '≤ 1 min'],
            ['La ancoră – suplimentar (avertizare)', 'Fluier: **1 scurt + 1 prelung + 1 scurt**', '–'],
            ['RAM la lucru, la ancoră · pescar la ancoră', '**1 prelung + 2 scurte**', '≤ 2 min'],
            ['Eșuată', 'Semnalele navei la ancoră + **3 lovituri separate** de clopot **înainte și după** sunetul rapid (+ eventual fluier)', '–'],
            ['Pilot la ancoră', 'Semnalele de ancoră + **4 scurte**', '–'],
          ],
        },
        {
          type: 'tip',
          text: '**Memo:** 1 prelung + 2 scurte = „toți cei care **nu pot sau nu vor** să manevreze liber” (NUC, RAM, CBD, velier, pescar, remorcher). Doar **motorul liber** dă 1 prelung / 2 prelungi.',
        },
      ],
    },
    {
      title: '5. Semnale de pericol (distress) și atenționare',
      blocks: [
        {
          type: 'list',
          title: 'Se folosesc împreună sau separat, la intervale de ≈ 1 minut',
          items: [
            '**Tun** sau alt semnal exploziv, la **≈ 1 minut**.',
            '**Sunet continuu** cu orice aparat de ceață.',
            '**Rachete / proiectile cu stele roșii**, trase la intervale scurte; **semnale de mână roșii** (hand flares).',
            '**Fum portocaliu**.',
            '**Flăcări** pe navă (butoi cu gudron sau petrol).',
            'Pavilion **pătrat** cu o **minge** deasupra sau dedesubt.',
            '**Brațele** întinse lateral, ridicate și coborâte lent și repetat.',
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Mijloc', 'Semnal de pericol'],
          rows: [
            ['Radiotelegrafie', '**SOS** în Morse: 3 puncte, 3 linii, 3 puncte'],
            ['Radiotelefonie', 'Cuvântul **MAYDAY** repetat'],
            ['Codul Internațional de Semnale', 'Pavilioanele **„N.C.”**'],
          ],
        },
        {
          type: 'list',
          title: 'Atragerea atenției',
          items: [
            'Orice semnal luminos sau sonor care **nu poate fi confundat** cu alt semnal COLREG, sau raza **proiectorului** îndreptată spre pericol.',
          ],
        },
        {
          type: 'warn',
          text: [
            'Alarma în radiotelegrafie, așa cum apare în bancă: „**12 long dashes for 14 seconds**, separated by an interval of one second”. Reține formularea din întrebare.',
          ],
        },
      ],
    },
  ],
};

export default data;
