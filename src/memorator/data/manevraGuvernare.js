// Manevra navei: cârmă, elice, motor, viteză (Clasa A, B). Sursă: questionsManevra.js.
const data = {
  title: 'Manevra · Cârmă, elice și motor',
  subtitle:
    'Efectul cârmei și al elicei (pas dreapta), guvernare, reguli de siguranță pentru motor și viteză, motociclete nautice.',
  sections: [
    {
      title: '1. Efectul cârmei',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Mers', 'Cârma', 'Prova', 'Pupa'],
          rows: [
            { group: 'Doar efectul cârmei' },
            ['Înainte', 'în ax', 'drum rectiliniu', '–'],
            ['Înainte', '**dreapta**', 'giră la **dreapta**', 'abate la **stânga**'],
            ['Înainte', '**stânga**', 'giră la **stânga**', 'abate la **dreapta**'],
            ['Înapoi', 'în ax', 'drum rectiliniu înapoi', '–'],
            ['Înapoi', '**dreapta**', 'giră la **stânga**', 'abate la **dreapta**'],
            ['Înapoi', '**stânga**', 'giră la **dreapta**', 'abate la **stânga**'],
            { group: 'Cârmă + elice pas dreapta' },
            ['Înainte', 'zero', 'giră la **stânga**', 'abate la **dreapta**'],
            ['Înainte', 'dreapta', 'giră la **dreapta**', 'abate la **stânga**'],
            ['Înainte', 'stânga', 'giră la **stânga**', 'abate la **dreapta**'],
            ['Înapoi', 'zero', 'giră la **dreapta**', 'abate la **stânga**'],
            ['Înapoi', 'dreapta', 'giră la **stânga**', 'abate la **dreapta**'],
            ['Înapoi', 'stânga', 'giră la **dreapta**', 'abate la **stânga**'],
          ],
        },
        {
          type: 'tip',
          text: '**Mers înainte:** prova merge în bordul în care ai pus cârma, pupa în bordul opus. **Elice pas dreapta:** înainte pupa e împinsă spre **dreapta** (prova la stânga); **înapoi** pupa spre **stânga** (prova la dreapta).',
        },
        {
          type: 'list',
          items: [
            'La **marș înainte** pupa e abătută **în bordul pasului elicei**, prova în bordul opus.',
            'La **marș înapoi** pupa e abătută **în bordul opus pasului**, prova în bordul pasului.',
            'Cu cât **viteza e mai mare**, presiunea apei pe pana cârmei e mai mare și schimbarea de direcție mai rapidă.',
            'Forța pe timonă depinde de: puterea motorului, cât din elice e în apă, tipul și pasul elicei. Guvernarea poate fi îmbunătățită prin **mărimea penei** cârmei.',
            'Schimbarea direcției se face prin punerea cârmei într-un bord sau altul sau prin orientarea propulsorului (propulsie „Z”).',
          ],
        },
      ],
    },
    {
      title: '2. Elicea',
      blocks: [
        {
          type: 'pairs',
          items: [
            ['**Pas dreapta**', 'La mersul înainte elicea se învârte la **dreapta**.'],
            ['**Pas stânga**', 'La mersul înainte elicea se învârte la **stânga**.'],
            ['**Pasul elicei**', 'Spațiul parcurs de **marginea exterioară** a elicei, în translație pe axă, într-o **rotație completă**.'],
            ['**RPM**', 'Numărul de rotații pe minut.'],
            ['**RPM × pas**', 'Spațiul parcurs de ambarcațiune **într-un minut**.'],
            ['**Efect**', 'Rotația elicei dă **propulsie și guvernare**.'],
            ['**Mărimea și forma**', 'Depind de puterea motorului, mărimea corpului și scop: **tracțiune sau viteză**.'],
          ],
        },
        {
          type: 'list',
          title: 'La alegerea elicei și a înălțimii motorului verifici',
          items: [
            'turația maximă a motorului, viteza bărcii, ventilația elicei, abilitatea de glisare, presiunea de răcire;',
            'viteza probabilă a bărcii, modul de folosire, testarea pasului elicei.',
          ],
        },
      ],
    },
    {
      title: '3. Calități și factori care influențează manevra',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Noțiune', 'Conținut'],
          rows: [
            ['**Calități nautice**', 'nescufundabilitate, flotabilitate, stabilitate'],
            ['**Calități manevriere**', 'manevrabilitate, comportarea față de vânt, oscilații, viteză, inerție, giratie'],
            ['**Factori naturali**', 'vânt, valuri, curenți, adâncimea apei, limitarea mediului înconjurător, gheață'],
            ['**Factori tehnici**', 'cârma, elicea, viteza, dimensiunile ambarcațiunii'],
            ['**Manevrabilitate**', 'Capacitatea de a-și menține direcția sau de a o schimba cu **cârma și elicea**.'],
            ['**Ruliu**', 'Mișcarea transversală a navei în jurul unei **axe longitudinale**.'],
            ['**Instalația de guvernare**', 'timona (manipulatorul electric); servomotor la nave mari; transmisia timonă–servomotor–cârmă; cârma propriu-zisă'],
            ['**Ajutor la guvernare**', 'propulsoare de **prova și pupa** (bow / stern thruster)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Viteza e cu atât mai mare cu cât **suprafața udată** la viteza maximă e mai **mică**.',
            'Trecerea din apă dulce în apă sărată: pescajul **se micșorează**.',
            'Pe valuri de urmărire stabilitatea scade când ambarcațiunea are **secțiunea maestră pe creasta valului**.',
            'Fenomene care influențează manevra: **vânt, valuri, curent, adâncimi mici**.',
            'Echipată cu motoare mai puternice decât cele proiectate (**overpower**) = greu de controlat.',
            'Eșuarea **involuntară**: de ex. bancuri noi de corali. Eșuarea **voluntară**: pentru a salva ambarcațiunea și echipajul când e avariată.',
          ],
        },
      ],
    },
    {
      title: '4. Motor, viteză și siguranță',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Situația', 'Consecința / ce faci'],
          rows: [
            ['Motor înclinat în **sus**, la viteză mare', 'Forțele turbionare acționează brusc și poți **pierde controlul**; frânare mai slabă, spațiu mai mare pentru oprire.'],
            ['Motor înclinat în **jos** la capătul cursei', 'Pupa intră mai adânc în apă, la bărci mici apare **apuparea**.'],
            ['Pupa intră adânc din cauza înclinării', 'Barca poate începe să se **rotească rapid** și pasagerii pot fi aruncați peste bord.'],
            ['Nu da drumul **timonei**', 'La nicio viteză: forțele turbionare pot roti barca și o pot face instabilă.'],
            ['Barca devine **instabilă**', 'Reduci viteza **gradual**, nu accelerezi, oprești testul, verifici barca; la nevoie contactezi dealerul / un expert.'],
            ['Oprire', 'Reduci viteza **gradual** – o reducere bruscă poate face ca valul de pupa să **lovească oglinda** și să se reverse în barcă.'],
            ['Motor ataşabil (outboard)', 'Se montează cu **placa anticavitație la nivelul chilei**.'],
            ['**Indicatorul înclinării**', 'Orientează motorul la un unghi predeterminat pentru performanță mai bună.'],
            ['Viteză mare constantă', 'Verifici **mai des** ridicarea motorului, guvernarea, comanda de accelerație și elicea / elicele.'],
            ['Fără **placă de capacitate**', 'Contactezi dealerul sau producătorul pentru informații garantate.'],
            ['Persoană **nepregătită** pentru barca rapidă', 'Nu conduce fără instruire și practică cu un conducător experimentat.'],
          ],
        },
        {
          type: 'list',
          title: 'Înainte de a părăsi locul de acostare',
          items: [
            'Îndepărtezi materialul în plus sau îl depozitezi în siguranță.',
            'Verifici **butonul de oprire de urgență** și **saula** legată de haine sau de vesta de salvare.',
            'Ai parcurs **lista de verificări**; mecanismele de prindere a motorului și sistemul de guvernare sunt strânse.',
          ],
        },
      ],
    },
    {
      title: '5. Motociclete nautice (skijet) și schi nautic',
      blocks: [
        {
          type: 'list',
          items: [
            'Permise **numai ziua**.',
            'Conducătorul și însoțitorul poartă **veste de salvare**.',
            'Motorul trebuie să **se oprească automat** la căderea conducătorului sau să fie cuplat pe cea mai mică viteză; vehiculul trebuie să se oprească sau să descrie un **cerc**.',
            'Pe skijet trebuie aplicat **numărul de înmatriculare vizibil** acordat de căpitănie.',
            'Pe căile navigabile interioare: **numai în porțiunile stabilite și marcate**.',
            '**Schiul nautic**: numai în zonele stabilite și marcate, valabil și pentru persoane trase de o ambarcațiune fără schiuri sau pe alte obiecte.',
            'Pe barcă cu sistem de cablu **împinge–trage** mecanic: toate componentele respectă standardul.',
          ],
        },
      ],
    },
  ],
};

export default data;
