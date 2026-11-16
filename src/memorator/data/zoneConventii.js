// Legislație: zone maritime, drept internațional, MARPOL (Clasa A, B). Sursă: questionsLegislatie.js.
const data = {
  title: 'Legislație · Zone maritime și convenții',
  subtitle:
    'Marea teritorială, zona contiguă, zona economică exclusivă, marea liberă, trecerea inofensivă, urmărirea, pirateria, MARPOL, OPRC și salvarea.',
  sections: [
    {
      title: '1. Zonele maritime',
      blocks: [
        {
          type: 'facts',
          items: [
            { value: '12 NM', text: '**Marea teritorială** – maximum, de la liniile de bază.' },
            { value: '24 NM', text: '**Zona contiguă** – maximum, de la liniile de bază.' },
            { value: '200 NM', text: '**Zona economică exclusivă (ZEE)** – de la liniile de bază. Platoul continental: până la 200 NM.' },
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Zona', 'Regimul'],
          rows: [
            ['**Apele interioare**', 'Apele dintre **linia de bază** și țărm; fac parte din teritoriul statului.'],
            ['**Marea teritorială**', 'Până la **12 NM** de la liniile de bază. Statul riveran are **suveranitate**. Delimitarea între state vecine: **acord bilateral**.'],
            ['**Zona contiguă**', 'Fâșia adiacentă mării teritoriale, până la **24 NM**. Statul **previne și reprimă** încălcarea legilor **vamale, fiscale, sanitare și de trecere a frontierei** (imigrare).'],
            ['**Zona economică exclusivă**', 'Până la **200 NM**. **Nu face parte din teritoriul** statului riveran. Statul are **drepturi suverane economice** (resurse piscicole etc.); rămân libertățile de **navigație, survol, cabluri și conducte submarine**.'],
            ['**Marea liberă**', 'Partea mării care **nu aparține** mării teritoriale sau apelor interioare ale unui stat; **deschisă tuturor** și **niciun stat** nu poate pretinde suveranitate. Fundul ei: **„Zona internațională”**.'],
            ['**Libertățile mării libere**', '**navigația**, **pescuitul**, **survolul**, **cabluri, conducte** petroliere și submarine.'],
            ['**Dreptul de navigație**', 'Recunoscut **oricărui stat**, riveran sau **fără litoral**.'],
            ['**Dreptul de urmărire**', 'Se aplică și pentru încălcarea legilor privind **ZEE**. Începe în apele interioare, arhipelagice sau marea teritorială; în zona contiguă doar dacă s-au încălcat drepturile protejate de zonă. **Încetează** când nava urmărită intră în marea teritorială a **propriului stat sau a unui stat terț**.'],
            ['Oprire / sechestru nejustificat în marea liberă', 'Ambarcațiunea trebuie **despăgubită** pentru orice pierdere sau pagubă.'],
            ['**Pirateria**', 'Act ilegal de violență, deținere sau jaf, în **scopuri personale**, de echipaj sau pasageri ai unei ambarcațiuni private, împotriva altei ambarcațiuni, în **marea liberă**. Cooperarea pentru reprimare = **obligație** pentru fiecare stat; reținerea unei nave pirat: în marea liberă sau în afara jurisdicției oricărui stat. Nava devenită pirat își poate **pierde naționalitatea**.'],
            ['**Obligații de cooperare**', 'Reprimarea pirateriei, a traficului de **stupefiante** și a **emisiunilor neautorizate** de radio și TV = **obligație** a fiecărui stat.'],
            ['**Statul arhipelag**', 'Stat format în întregime din unul sau mai multe arhipelaguri (și insule). Poate **suspenda** trecerea inofensivă în apele arhipelagice dacă e **indispensabil securității**.'],
          ],
        },
      ],
    },
    {
      title: '2. Trecerea inofensivă și jurisdicția',
      blocks: [
        {
          type: 'list',
          items: [
            '**Trecere** = a naviga în marea teritorială pentru a **o traversa** fără a intra în apele interioare, sau pentru a **intra / ieși** din apele interioare ori a face **escală** într-o radă.',
            'Este **inofensivă** dacă **nu aduce atingere păcii, ordinii sau securității** statului riveran.',
            'Trecerea inofensivă prin **strâmtori** (care leagă marea teritorială cu marea liberă sau ZEE) **nu poate fi suspendată**.',
            '**Jurisdicția civilă** a statului riveran nu poate opri sau schimba ruta navei în trecere; pentru obligații asumate în apele lui, statul poate lua **măsuri de executare sau conservatorii**.',
            '**Jurisdicția penală** la bord (arestări, cercetări) se exercită dacă infracțiunea tulbură **pacea sau ordinea**, **consecințele se extind** asupra statului riveran, **asistența a fost cerută** de comandant sau de un agent diplomatic / consular, ori pentru **reprimarea traficului de stupefiante**.',
            '**Statul pavilionului** are jurisdicție exclusivă; pavilionul se schimbă doar la **transfer real de proprietate** sau schimbarea înmatriculării.',
            '**Ambarcațiunile străine** în apele naționale trebuie să respecte regulile privind **navigația, intrarea, staționarea, operarea și ieșirea** din porturile românești.',
          ],
        },
        {
          type: 'warn',
          text: [
            'Banca are întrebări cu **formulări greșite sau contradictorii** (ex. „marea liberă aparține mării teritoriale sau apelor interioare” – de fapt **nu aparține**; „regimul de mare liberă se aplică și în ZEE”). Citește opțiunile și alege varianta corectă din punct de vedere juridic.',
          ],
        },
      ],
    },
    {
      title: '3. Linii de bază',
      blocks: [
        {
          type: 'list',
          items: [
            'Liniile de bază pot fi **linia celui mai mare reflux** de-a lungul țărmului sau **linii drepte** care unesc punctele cele mai avansate ale țărmului, insulelor sau instalațiilor permanente.',
            'Ridicăturile care rămân descoperite la reflux pot fi folosite ca puncte de bază dacă au **faruri sau instalații permanente** deasupra nivelului mării.',
            'Fluviu care se varsă **fără estuar**: linie dreaptă peste gura fluviului, între punctele limită ale refluxului.',
            '**Golf**: intrând în uscat, cu suprafață **cel puțin egală cu cea a unui semicerc** având ca diametru linia peste intrare.',
            'Instalațiile portuare permanente care înaintează spre larg fac parte din **țărm**; instalațiile **din larg** și insulele artificiale **nu** sunt considerate portuare permanente.',
            '**Radele** parțial dincolo de limita mării teritoriale fac parte din **marea teritorială**.',
            'O insulă intră în calcul dacă **nu depășește lățimea mării teritoriale**.',
          ],
        },
      ],
    },
    {
      title: '4. MARPOL și poluarea',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Anexa MARPOL', 'Reglementează'],
          rows: [
            ['**I**', 'Prevenirea poluării cu **hidrocarburi**'],
            ['**II**', 'Prevenirea poluării cu **substanțe nocive** (transportate în vrac)'],
            ['**III**', 'Substanțe dăunătoare transportate pe mare în formă **ambalată**'],
            ['**IV**', 'Prevenirea poluării cu **ape uzate**'],
            ['**V**', 'Prevenirea poluării cu **gunoi**'],
            ['**VI**', 'Prevenirea poluării **atmosferei**'],
          ],
        },
        {
          type: 'list',
          items: [
            '**Zonă specială** (MARPOL 73/78): zonă a mării unde, din motive tehnice (situație oceanografică și ecologică, trafic), sunt necesare **metode obligatorii speciale** de prevenire a poluării; golfuri, strâmtori, mări închise sau semiînchise cu regim special.',
            'Descărcarea hidrocarburilor este **interzisă** (sub regimul excepțiilor) în **zona Antarctica**.',
            'Regulile nu se aplică la descărcări făcute pentru **siguranța ambarcațiunii** sau **salvarea vieții omenești**.',
            '**Descărcare** (MARPOL): orice deversare de la navă, indiferent de cauză: scăpare, evacuare, scurgere, pompare, golire.',
            '**Uscatul cel mai apropiat**: de la linia de bază care servește la determinarea mării teritoriale.',
            'La încălcare în jurisdicția unei părți: **acțiune** conform legislației proprii **sau** comunicarea informațiilor și probelor administrației statului de pavilion; la incident cu deversare: informarea **IMO**.',
            '**OPRC 1990**: **hidrocarbura** = petrol în orice formă (țiței, combustibil lichid, nămol, reziduuri, produse rafinate). **Incident de poluare** = eveniment (sau serie) cu aceeași origine care duce sau poate duce la o scurgere ce amenință **mediul marin / litoral** și cere acțiune imediată.',
            '**Protecția apelor navigabile** împotriva poluării de către ambarcațiuni: **ANR**; **cheltuielile de depoluare**: poluatorul.',
            '**Nava** (după convenție): COLREG – orice construcție folosită ca mijloc de transport pe apă (inclusiv fără pescaj și hidroavioane); MARPOL – orice tip de navă în mediul marin (inclusiv cu aripi portante, pernă de aer, submersibile, platforme); SALVAGE – orice navă, ambarcațiune sau structură capabilă să navigheze.',
          ],
        },
      ],
    },
    {
      title: '5. Salvare și răspundere',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Subiect', 'Regula'],
          rows: [
            ['**Asistența** în pericol pe mare', '**Obligația** oricărui comandant, în măsura în care e posibil **fără pericol serios** pentru ambarcațiune, echipaj și pasageri: asistență oricărei persoane în pericol și **mers cu toată viteza** spre cei în primejdie.'],
            ['După un **abordaj**', 'Acorzi asistență celeilalte nave, echipajului și pasagerilor și îi comunici **numele ambarcațiunii tale, portul de înmatriculare și cel mai apropiat port** de destinație.'],
            ['**Remunerație** pentru salvarea unei persoane', '**Nu** se cuvine (salvarea vieții nu se plătește).'],
            ['**Răspunderea proprietarului**', 'Pentru neglijența conducătorului, echipajului sau pilotului: **în limita valorii ambarcațiunii, navlului și accesoriilor**.'],
            ['**Conducătorul și echipajul**', '**Nu își pot limita** răspunderea față de terți.'],
          ],
        },
      ],
    },
  ],
};

export default data;
