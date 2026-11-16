// COLREG – priorități între nave (Clasa A, B). Sursă: întrebările din questions.js (Generalitati, Reguli de guvernare)
// + ordinea la ecluzare din questionsManevra.js.
const data = {
  title: 'COLREG · Priorități',
  subtitle:
    'Cine are prioritate și cine se ferește: ierarhia navelor cu semnalele lor, prioritățile în fiecare situație de întâlnire, cine nu stânjenește pe cine și ordinea la ecluzare.',
  sections: [
    {
      title: '1. Ierarhia navelor (de sus în jos)',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['#', 'Nava', 'Cedează / se ferește de', 'Noaptea', 'Ziua'],
          rows: [
            ['1', 'NUC – nu e sub comandă', '**Nimeni** – are prioritate maximă', ['stack:RR'], ['shapes:ball,ball']],
            ['2', 'RAM – manevrabilitate restrânsă', 'Doar **NUC**', ['stack:RWR'], ['shapes:ball,dia,ball']],
            ['3', 'CBD – limitată de pescaj', '**NUC**, **RAM**. Ceilalți **nu o stânjenesc**', ['stack:RRR'], ['cyl']],
            ['4', 'Navă la pescuit (underway)', '**NUC**, **RAM** – „pe cât posibil”. Nu stânjenește CBD', ['stack:GW', '+', 'stack:RW'], ['shapes:coneUp,coneDn']],
            ['5', 'Velier', '**NUC**, **RAM**, **pescuit**. Nu stânjenește CBD', ['B', 'S'], '–'],
            ['6', 'Navă cu motor', '**NUC**, **RAM**, **pescuit**, **velier**. Nu stânjenește CBD', ['M', 'B', 'S'], '–'],
          ],
        },
        {
          type: 'tip',
          text: '**Regula de aur:** fiecare cedează tuturor celor de **deasupra** lui în tabel. **Nava cu motor** e cea care se ferește de toate. Dintr-o listă de nave, cea care „se ferește de toate celelalte” este cea **cea mai jos** în tabel.',
        },
        {
          type: 'warn',
          text: [
            'În bancă, întrebarea „care dintre navele din listă trebuie să se ferească de toate celelalte” are ca răspuns **nava de pe cea mai joasă treaptă din listă**: ex. o navă care **împinge o barjă** (motor), **traulerul** (la pescuit) sau **nava pilot în serviciu** (motor), după lista dată.',
            'La CBD, banca dă ambele variante: „**velierul**” și „**navele cu motor underway**” trebuie să evite să-i stânjenească trecerea – **ambele sunt corecte**.',
          ],
        },
      ],
    },
    {
      title: '2. Priorități în situațiile de întâlnire',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Situația', 'Are prioritate (stand-on)', 'Se ferește (give-way)'],
          rows: [
            ['**Depășire** (> 22,5° înapoia traversului; noaptea vezi doar sternlight)', 'Nava **depășită**', '**Nava care depășește**. Dacă ai dubii că depășești: **consideri că depășești**'],
            ['**Cap la cap** (drumuri opuse)', '**Nimeni** – manevră egală', '**Ambele** virează la **tribord**, trecere **babord la babord**'],
            ['**Încrucișare**, 2 nave cu motor', 'Nava care e **la tribordul** celeilalte', 'Nava care o are pe cealaltă **la tribord**; dacă se poate, **nu trece prin fața** ei'],
            ['**2 veliere**, vânt pe borduri diferite', 'Cea cu **vântul din tribord**', 'Cea cu **vântul din babord**'],
            ['**2 veliere**, vânt pe același bord', 'Cea de **sub vânt** (leeward)', 'Cea de **deasupra vântului** (windward)'],
            ['**Motor** față de **velier**', '**Velierul**', 'Nava cu **motor**'],
            ['**Pescuit** față de **velier / motor**', '**Pescuitul**', 'Velierul și motorul'],
            ['Orice navă față de **NUC / RAM**', '**NUC / RAM**', 'Orice altă navă (pescuitul „pe cât posibil”)'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Rolul', 'Ce face'],
          rows: [
            ['**Give-way** (cedează)', 'Acționează **din timp** și **substanțial**, ca să treacă bine la distanță; se ferește **fără să mai aștepte**.'],
            ['**Stand-on** (prioritar)', '**Își menține drumul și viteza.**'],
            ['Stand-on – când poate manevra', 'Imediat ce devine clar că give-way **nu acționează corect**.'],
            ['Stand-on – când e obligat', 'Când se află atât de aproape încât coliziunea nu mai poate fi evitată **doar** de give-way: face **ce ajută cel mai mult**.'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Semnal sonor (în vedere)', 'Înseamnă'],
          rows: [
            ['**1 scurt**', 'Schimb drumul la **tribord**'],
            ['**2 scurte**', 'Schimb drumul la **babord**'],
            ['**3 scurte**', 'Dau **înapoi**'],
            ['**Stand-on** care menține drumul', '**Nu dă** semnal sonor'],
            ['Depășire pe larg, fără schimbare de drum', '**Nu dă** semnal sonor'],
          ],
        },
        {
          type: 'tip',
          text: 'Trecere **tribord la tribord** fără pericol, dacă nu schimbi drumul: **menții drumul** și **nu dai semnal sonor**.',
        },
      ],
    },
    {
      title: '3. Cine nu stânjenește pe cine',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Loc', 'Regula'],
          rows: [
            ['**Canal îngust / fairway**', 'O navă **sub 20 m** și un **velier** **nu stânjenesc** o navă care poate naviga în siguranță **doar** în canal.'],
            ['**Canal îngust**', 'O navă la **pescuit** nu stânjenește nicio altă navă din canal.'],
            ['**Canal îngust** – încrucișare', 'Dacă încrucișezi canalul, **nu stânjeni** o navă din canal care poate naviga doar acolo (ex. cu **cilindru negru** = CBD).'],
            ['**Canal îngust** – depășire', 'Cea care depășește dă semnalul (**2 lungi + 1 scurt** = pe tribord; **2 lungi + 2 scurte** = pe babord); cea depășită răspunde **lung–scurt–lung–scurt** (acord).'],
            ['**TSS** (culoar)', 'O navă la **pescuit** nu stânjenește nicio navă din culoar.'],
            ['**TSS** – zone de coastă', 'Nu pentru tranzit; **exceptate** navele **sub 20 m** și velierele.'],
            ['**Hidroavion** pe apă', 'Se ține **departe de toate navele** și nu le stânjenește.'],
            ['**CBD în canal îngust**', 'Dacă ai dubii asupra intențiilor unei nave care încrucișează canalul, poți da **semnalul de pericol (5 scurte și rapide)**.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Regulile speciale locale (rade, porturi, râuri, canale) **pot exista**, dar trebuie să semene cât mai mult cu COLREG.',
            'Un convoi sau o flotă pot arăta lumini suplimentare, dar **fără să se confunde** cu cele din COLREG.',
          ],
        },
      ],
    },
    {
      title: '4. Prioritatea la ecluzare',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Ordinea', 'Nave'],
          rows: [
            ['**1**', 'Navele **administrației**'],
            ['**2**', 'Navele plecate pentru **misiuni excepționale**'],
            ['**3**', 'Navele **grav avariate** – au prioritate **fără să stea la rând**'],
            ['**4**', 'Navele de **pompieri și salvare**, în drum spre locul accidentului'],
            ['**5**', '**Celelalte** nave'],
          ],
        },
        {
          type: 'list',
          items: [
            '**Depășirea** în zona de ecluzare e **interzisă**; poți trece pe lângă nave care așteaptă doar dacă tu trebuie ecluzat înainte sau pentru a ocupa locuri libere.',
            'Ordinele personalului ecluzei pot completa regulile sau deroga de la ele – **trebuie urmate**.',
          ],
        },
      ],
    },
  ],
};

export default data;
