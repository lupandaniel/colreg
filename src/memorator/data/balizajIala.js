// Balizaj maritim IALA (Clasa A, B). Sursă: întrebările din questionsNavigatie.js.
const data = {
  title: 'Balizaj IALA',
  subtitle:
    'Marcaje laterale, cardinale, pericol izolat, ape sigure și speciale: culori, semne de vârf și ritmul luminilor.',
  sections: [
    {
      title: '1. Marcaje laterale – regiunea A și regiunea B',
      blocks: [
        {
          type: 'list',
          items: [
            'Singura deosebire dintre regiunea **A** și **B** privește **marcajele laterale**.',
            'Marcajele laterale arată **limitele laterale ale șenalului navigabil**.',
            'Sensul convențional al balizajului: **de la larg spre uscat**.',
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['', 'Babord (port)', 'Tribord (starboard)'],
          rows: [
            [
              'Regiunea A',
              { t: ['dot:R', 'cylR'], x: '**roșu**, semn de vârf **cilindru roșu**; lumină **roșie**' },
              { t: ['dot:G', 'coneUpG'], x: '**verde**, semn de vârf **con verde cu vârful în sus** (sau negru prin excepție); lumină **verde**' },
            ],
            [
              'Regiunea B',
              { t: ['dot:G'], x: 'lumină **verde**' },
              { t: ['dot:R'], x: 'lumină **roșie**' },
            ],
          ],
        },
        {
          type: 'tip',
          text: '**A:** roșu la babord, verde la tribord (intri dinspre larg). **B:** invers – tribord roșu, babord verde. Lumină **roșie sclipitoare = semn de babord**; **verde sclipitoare = semn de tribord** (regiunea A).',
        },
      ],
    },
    {
      title: '2. Marcaje cardinale',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Marcaj', 'Corp (de sus în jos)', 'Semn de vârf', 'Lumină albă'],
          rows: [
            ['**Nord**', { t: ['bands:BY'], x: 'negru–galben' }, { t: ['shapes:coneUp,coneUp'], x: '2 conuri, vârfurile **în sus**' }, '**sclipiri rapide** continue'],
            ['**Est**', { t: ['bands:BYB'], x: 'negru–galben–negru' }, { t: ['shapes:coneUp,coneDn'], x: '2 conuri unite **la bază**' }, '**3** sclipiri rapide'],
            ['**Sud**', { t: ['bands:YB'], x: 'galben–negru' }, { t: ['shapes:coneDn,coneDn'], x: '2 conuri, vârfurile **în jos**' }, '**6** sclipiri rapide + **1 lungă**'],
            ['**Vest**', { t: ['bands:YBY'], x: 'galben–negru–galben' }, { t: ['shapes:coneDn,coneUp'], x: '2 conuri unite **la vârf**' }, '**9** sclipiri rapide'],
          ],
        },
        {
          type: 'tip',
          text: '**Ca pe cadran:** Est = 3, Sud = 6, Vest = 9, Nord = continuu (ora 12).',
        },
        {
          type: 'list',
          title: 'Marcajul de Sud nu apare în întrebările din bancă la corp și semn de vârf',
          items: [
            'Se deduce din restul: **galben–negru** și conuri **în jos** (opusul Nordului). Lumina lui: **6 sclipiri rapide + 1 lungă**.',
          ],
        },
      ],
    },
    {
      title: '3. Alte marcaje',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Marcaj', 'Semn de vârf', 'Lumină', 'Ritm'],
          rows: [
            ['**Pericol izolat**', { t: ['ball'], x: 'sferă **neagră**' }, 'albă', 'în bancă: **izofază**'],
            ['**Ape sigure** (safe water)', { t: ['ballR'], x: 'sferă roșie (dungi roșu–alb)' }, 'albă', '**litera „A” în Morse**'],
            ['**Special**', { x: 'forma „X” galbenă' }, '**galbenă**', '–'],
          ],
        },
        {
          type: 'warn',
          text: [
            'Banca spune că semnul de vârf al pericolului izolat este „**o sferă neagră**” (în realitate sunt 2 sfere) și că ritmul lui este **izofază**; în realitate pericolul izolat are un **grup de 2 sclipiri albe**.',
            'Întrebarea „**un grup de două sclipiri albe**, în prova tribord / babord” are în bancă răspunsuri diferite: **ape sigure**, **semn de est**, **semn special**. Citește opțiunile și răspunde cum cere varianta întrebării.',
            'Pentru „**un grup de nouă sclipiri albe**, în prova” banca acceptă și **vest**, și **sud** în variante diferite. Regula IALA: **9 sclipiri = Vest**, Sud = 6 + 1 lungă.',
          ],
        },
      ],
    },
    {
      title: '4. Faruri și repere',
      blocks: [
        {
          type: 'pairs',
          items: [
            ['**Lumină izofază**', 'Durata luminii este **egală** cu durata întunericului.'],
            ['**Lumină alternativă**', '**Culori diferite** în sectoare strict delimitate.'],
            ['**Repere costiere**', 'Pot fi faruri, balize etc.; cele mai sigure pentru poziție: **farurile** (de aterizare).'],
            ['**Cărți pilot**', 'Se corectează la zi cu **avizele pentru navigatori**.'],
          ],
        },
      ],
    },
  ],
};

export default data;
