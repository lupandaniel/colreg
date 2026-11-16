// Navigație: coordonate, drumuri, relevmente, compas (Clasa A, B). Sursă: questionsNavigatie.js.
const data = {
  title: 'Navigație · Busolă, drumuri și coordonate',
  subtitle:
    'Latitudine și longitudine, drumuri și relevmente, corecția compasului, părțile compasului magnetic, vânt și instrumente.',
  sections: [
    {
      title: '1. Coordonate geografice',
      blocks: [
        {
          type: 'pairs',
          items: [
            ['**Latitudinea**', 'Arcul de **meridian** măsurat de la **ecuator** până la paralelul locului.'],
            ['**Longitudinea**', 'Arcul de **ecuator** măsurat de la **meridianul Greenwich** până la meridianul locului.'],
            ['**Diferența de latitudine**', 'Arcul de meridian de la paralelul punctului de plecare la cel de sosire.'],
            ['**Diferența de longitudine**', 'Arcul de ecuator de la meridianul de plecare la cel de sosire.'],
            ['**Deplasarea est-vest**', 'Arcul de **paralel** de la meridianul de plecare la cel de sosire.'],
            ['**Polii geografici**', 'Cele două puncte în care **axa de rotație** a Pământului intersectează suprafața.'],
            ['**Scara numerică a hărții**', 'Raportul dintre lungimea unitară de pe Pământ și corespondentul ei pe hartă.'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Emisfera', 'Mergi spre', 'Se schimbă'],
          rows: [
            { group: 'Latitudine' },
            ['Nordică', 'Nord', 'latitudinea **crește** (sosire > plecare)'],
            ['Nordică', 'Sud', 'latitudinea **scade** (sosire < plecare)'],
            ['Sudică', 'Nord', 'latitudinea **scade** (sosire < plecare)'],
            ['Sudică', 'Sud', 'latitudinea **crește** (sosire > plecare)'],
            { group: 'Longitudine' },
            ['Estică', 'Est', 'longitudinea **crește** (sosire > plecare)'],
            ['Estică', 'Vest', 'longitudinea **scade** (sosire < plecare)'],
            ['Vestică', 'Vest', 'longitudinea **crește** (sosire > plecare)'],
            ['Vestică', 'Est', 'longitudinea **scade** (sosire < plecare)'],
          ],
        },
        {
          type: 'tip',
          text: '**Regula:** latitudinea crește când te **îndepărtezi de ecuator**; longitudinea crește când te **îndepărtezi de Greenwich**.',
        },
      ],
    },
    {
      title: '2. Drumuri și relevmente',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Mărimea', 'Unghi măsurat din planul orizontului adevărat…'],
          rows: [
            ['**Drum adevărat** (Da)', 'de la **Nord adevărat** până la axul prova al navei'],
            ['**Drum magnetic** (Dm)', 'de la **Nord magnetic** până la axul prova'],
            ['**Drum compas** (Dc)', 'de la **Nord compas** până la axul prova'],
            ['**Drum giro** (Dg)', 'de la **Nord giro** până la axul prova'],
            ['**Relevment adevărat / magnetic / compas** (Ra, Rm, Rc)', 'de la nordul respectiv până la **linia de vizare** la reper'],
            ['**Relevment prova** (Rp)', 'de la **axul prova** al navei până la direcția de vizare la reper'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Formula', 'Inversă / explicație'],
          rows: [
            ['**Da = Dc + Δc**', 'Dc = Da − Δc'],
            ['**Ra = Rc + Δc**', 'Rc = Ra − Δc'],
            ['**Δc = d + δ**', 'corecția totală = **declinația** (d) + **deviația** (δ)'],
            ['**Dc = Da − d − δ**', 'Da = Dc + d + δ'],
            ['**Da = Dg + Δg**', 'cu giro: drum giro + corecția giro'],
            ['**Rp = R − D**', 'relevment prova = relevment − drum (mod 360°)'],
          ],
        },
        {
          type: 'warn',
          text: [
            'La exercițiile cu **Δc negativ**, banca dă răspunsuri calculate ca **Dc − Δc** (ex.: Dc 202,0° și Δc −2,5° → **Da 204,5°**; Dc 078,0° și Δc −1,5° → **Da 079,5°**), deși formula este Da = Dc + Δc. Pentru Δc pozitiv (giro +3,5°: 147,0° → 150,5°) se adună. Verifică opțiunile oferite.',
            'La „precizia de măsurare a drumului giro” banca are două variante contradictorii: **0°,1** și **0°,5**.',
            '„Ambarcațiunea în Dg 080° și Rg 030° → prova tribord” apare în bancă; după formula Rp = R − D ar fi prova **babord**. Alege răspunsul din bancă dacă întrebarea e identică.',
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Drum', 'Direcție / cadran'],
          rows: [
            ['000°', 'Nord'],
            ['090°', 'Est'],
            ['180°', 'Sud'],
            ['270°', 'Vest'],
            ['000° – 090°', 'cadranul **NE** (ex. 034°)'],
            ['090° – 180°', 'cadranul **SE** (ex. 112°)'],
            ['180° – 270°', 'cadranul **SW** (ex. 234°)'],
            ['270° – 360°', 'cadranul **NW** (ex. 328°)'],
          ],
        },
      ],
    },
    {
      title: '3. Relevmentul prova – unde vezi reperul',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Relevment prova', 'Reperul se vede…'],
          rows: [
            ['000°', 'în **prova**'],
            ['060° · 070°', '**tribord**, înaintea traversului'],
            ['090°', '**travers tribord**'],
            ['125° · 165°', '**tribord**, înapoia traversului'],
            ['180°', 'în **pupa**'],
            ['230°', '**babord**, înapoia traversului'],
            ['270°', '**travers babord**'],
            ['320°', '**babord**, înaintea traversului'],
            ['RpBd 30°', '**babord**, înaintea traversului'],
            ['RpBd 130°', '**babord**, înapoia traversului'],
          ],
        },
        {
          type: 'tip',
          text: '**Circular:** 0–180° = **tribord**, 180–360° = **babord**; **RpBd = 360° − RpTd**. Înaintea traversului: sub 90°; înapoia traversului: peste 90° (față de bordul respectiv).',
        },
      ],
    },
    {
      title: '4. Cartul (rosa vânturilor)',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Tip de cart', 'Exemplu'],
          rows: [
            ['**Cardinal**', 'N, E, S, W'],
            ['**Intercardinal**', 'NE, SE, **SW**, NW'],
            ['**Inter-intercardinal**', 'NNE, ENE, **SSE** …'],
            ['**Intermediar** (sferturi)', '**E la N**, N la E …'],
          ],
        },
        {
          type: 'facts',
          items: [{ value: '11°15′', text: '**Un cart** = 360° : 32 = **11°,25** (în bancă: „11 grade, 25”) = 11°15′.' }],
        },
      ],
    },
    {
      title: '5. Compasul magnetic',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Piesa', 'Rol'],
          rows: [
            ['**Acul magnetic**', 'Se orientează pe direcția **Nord compas**. Sistemul: ace **paralele, în număr par**.'],
            ['**Linia de credință**', 'Materializează **axul longitudinal** al navei.'],
            ['**Roza**', 'Se sprijină pe **pivot**.'],
            ['**Cășița (chapel)**', 'Micșorează **frecarea** dintre pivot și roză.'],
            ['**Lichidul**', '**Alcool + apă distilată + glicerină**; asigură plutirea rozei cu flotabilitate **ușor negativă**.'],
            ['**Bule de aer**', 'Conducătorul **completează cu apă distilată**.'],
            ['**Sistemul cardanic**', 'Menține cutia compasului **orizontală**.'],
            ['**Magneți compensatori**', 'Creează un câmp magnetic **opus** câmpului magnetic al ambarcațiunii.'],
            ['Magneți permanenți (longitudinali, transversali, vertical / corector de bandă)', 'Montați **în interiorul postamentului**.'],
            ['Magneți de **fier moale**', 'Pe **postament, lângă cutia compasului**.'],
          ],
        },
        {
          type: 'list',
          items: [
            'În cart conducătorul **compară permanent** indicațiile compasului magnetic și ale giro.',
            'Graparea ancorei se observă măsurând periodic **relevmente la două repere fixe** (costiere).',
          ],
        },
      ],
    },
    {
      title: '6. Vânt, instrumente și hartă',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Vântul bate…', 'Efect'],
          rows: [
            ['dinaintea traversului', 'micșorează viteza + **derivă de vânt**'],
            ['din travers', '**derivă de vânt**'],
            ['din prova tribord', 'micșorează viteza + derivă spre **babord**'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Se măsoară', 'Cu'],
          rows: [
            ['**Viteza**', '**lochul**'],
            ['**Adâncimea**', '**sonda**'],
            ['**Temperatura apei**', 'în **grade Celsius**'],
            ['**Poziția navei**', 'prin **relevmente** la repere'],
          ],
        },
        {
          type: 'list',
          items: [
            'Harta marină = reprezentarea la o anumită **scară** a unei zone maritime.',
            'La proiecția hărților de navigație banca dă răspunsul **„conică”**.',
          ],
        },
      ],
    },
  ],
};

export default data;
