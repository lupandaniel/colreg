// Manevra navei: legături, acostare, plecare, ancorare (Clasa A, B). Sursă: questionsManevra.js.
const data = {
  title: 'Manevra · Acostare, legături și ancorare',
  subtitle:
    'Legăturile ambarcațiunii și efectul lor, acostare și plecare de la chei, legare la geamandură, ancorare și ambosare.',
  sections: [
    {
      title: '1. Legăturile ambarcațiunii',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Legătura', 'Sensul', 'Efect'],
          rows: [
            ['**Parâma prova** (etravă)', 'înainte', 'Deplasează ambarcațiunea în ax **spre prova**, apropie **prova** de chei, depărtează pupa.'],
            ['**Traversa prova**', '–', 'Apropie **prova** de chei, depărtează pupa.'],
            ['**Springul prova**', 'înapoi', 'Deplasează **spre înapoi**, apropie prova de chei, depărtează pupa.'],
            ['**Parâma pupa** (etambou)', 'înapoi', 'Deplasează în ax **spre pupa**, apropie **pupa** de chei, depărtează prova.'],
            ['**Traversa pupa**', '–', 'Apropie **pupa** de chei, depărtează prova.'],
            ['**Springul pupa**', 'înainte', 'Deplasează **spre înainte**, apropie pupa de chei, depărtează prova.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Parâma de etravă / etambou deplasează ambarcațiunea **înainte / înapoi** de-a lungul cheului.',
            '**Parâma prova + spring pupa** → apropiere de chei **cu deplasare spre înainte**.',
            '**Parâma prova + spring prova** → apropiere de chei **fără deplasare înainte / înapoi**.',
            'Legăturile ambarcațiunii sunt **parâma prova și pupa** (plus traverse și springuri).',
          ],
        },
        {
          type: 'warn',
          text: [
            'Combinațiile „parâmă + spring” apar în bancă cu **răspunsuri care se contrazic** (acostare cu bordul / plecare cu pupa înainte sau prova înainte). Învață bine efectul fiecărei legături separat și citește opțiunile.',
          ],
        },
      ],
    },
    {
      title: '2. Acostare',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Manevra', 'Regula'],
          rows: [
            ['**Acostarea**', 'Apropierea de: chei, debarcader, mal, geamandură, loc neamenajat, altă ambarcațiune.'],
            ['Cu **babordul** la chei, fără ancoră', 'Apropiere sub unghi cât mai mic, **20 – 30°**, pentru elice **pas dreapta**.'],
            ['Cu **tribordul** la chei, fără ancoră', 'Apropiere sub unghi cât mai mic, **10 – 20°**, pentru elice pas dreapta.'],
            ['**Acostarea cu bordul**', 'Te apropii de chei sub **unghi ascuțit**, ca să atenuezi impactul provei.'],
            ['Cu **pupa**, cu ancoră', 'Dai **ancora**, **stop mașina**, dai **parâma de etambou**, foarte **încet înainte**, stop.'],
            ['La o **navă**', 'Nava reduce viteza și păstrează direcția; ambarcațiunea acostează în **bordul de sub vânt**, cât mai spre **centrul** navei.'],
            ['La mal **neamenajat**', 'Cu **vigilență sporită**; protejezi **elicea și cârma**.'],
            ['Legare la **geamandură**', 'Pregătire, prezentare la geamandură, legare, plecare.'],
            ['Apropierea de geamandură / altă navă', 'Mai ușoară cu **vântul / curentul din prova**.'],
            ['**Manevra pe parâme** (shifting)', 'Se execută pe **distanțe mici**.'],
          ],
        },
        {
          type: 'list',
          items: [
            'La acostare ții cont de **vânt și curent**: forța lor să **ajute** manevra, nu să se opună.',
            'Acostarea și plecarea au grad sporit de dificultate; cer cunoașterea calităților manevriere și deprinderi marinărești.',
            'Se folosesc **baloane de protecție** (fenders) din PVC umplute cu aer.',
            'La **întâlniri**: reduci viteza înaintea valurilor navei din sens opus. **Depășirile**: la distanță mare, fără valuri pentru nava depășită, atenție la valurile din siajul ei.',
          ],
        },
      ],
    },
    {
      title: '3. Plecarea de la chei',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Acostat cu…', 'Elice', 'Plecarea'],
          rows: [
            ['**Babordul**', 'o elice, pas dreapta', '**mola pupa**, cârma **stânga**, mașina **înainte**'],
            ['**Tribordul**', 'o elice, pas dreapta', '**mola pupa**, cârma **dreapta**, mașina **înainte**'],
            ['**Babordul**', 'două elice, timp bun', '**mola pupa**, mașina **babord înapoi**, mașina **tribord înainte**'],
            ['**Tribordul**', 'două elice, timp bun', '**mola pupa**, mașina **babord înainte**, mașina **tribord înapoi**'],
          ],
        },
        {
          type: 'list',
          items: [
            'Plecarea e **mai rapidă** dacă ambarcațiunea e acostată **cu prova la chei**.',
            'Înainte de plecare: verifici mecanismele de prindere a motorului, sistemul de guvernare și butonul de oprire de urgență.',
          ],
        },
      ],
    },
    {
      title: '4. Ancorarea',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Subiect', 'Regula'],
          rows: [
            ['**Locul de ancorare**', 'Permite **ancorare și plecare ușoare**, fără să deranjeze alte ambarcațiuni; ferit de **curenți, valuri și vânt**; permite **plecarea rapidă** în orice condiții, ziua sau noaptea.'],
            ['**Lungimea parâmei / lanțului**', '**3 – 5 × adâncimea** apei măsurate.'],
            ['**Calculul locului**', 'adâncimea apei, lungimea ambarcațiunii, posibilitatea **graparii** ancorei, eroarea în punct.'],
            ['**Procedee**', 'cu **o ancoră**, cu **două ancore**.'],
            ['Marș înainte, calm, fără curent', 'Cârma în bordul ancorării, parcurgi spațiul **L / 2**, apoi dai **funda** ancora.'],
            ['**În barbă** (două ancore)', 'Unghiul dintre lanțuri **maximum 60°**; mai sigură decât o singură ancoră.'],
            ['**Afurcare**', 'Se face la marș **înainte** și la marș **înapoi**; se folosesc **o ancoră și un spring**.'],
            ['**Ambosare**', 'Menținerea ambarcațiunii într-o poziție voită, indiferent de vânt, valuri, curenți.'],
            ['Ambosare **cu spring**', 'De regulă când ambarcațiunea mai are **inerție spre înapoi**; gașa springului se aduce **de la pupa, prin exteriorul bordajului**.'],
            ['Ambosare cu **două ancore**', 'Cu o ambarcațiune ancorată sau în mișcare.'],
            ['Ambosare la **geamandură**', 'Te apropii **la travers** de geamandură, trecând pe lângă ea **prin vântul ei**.'],
            ['Poziția lanțului', 'Se raportează **la fiecare cheie de lanț**.'],
            ['Staționarea la ancoră', 'Respecți regulile **COLREG 72**.'],
            ['Veghea la ancoră', 'Graparea se identifică măsurând periodic **relevmente la două repere fixe**.'],
          ],
        },
        {
          type: 'tip',
          text: 'Lumini și semne la ancoră: vezi memoratorul **Lumini și distanțe** (1 lumină albă sub 50 m, 2 peste 50 m, o minge ziua).',
        },
      ],
    },
  ],
};

export default data;
