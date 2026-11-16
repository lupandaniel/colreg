import { useEffect } from 'react';
import { Token, Tokens, rich } from './Symbols';

/**
 * COLREG cheatsheet for Clasa A/B: navigation lights, day shapes and the distances
 * (visibility ranges, thresholds) asked in the exam questions.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

// Visibility ranges in nautical miles; `span` merges length columns.
const RANGE_ROWS = [
  { light: 'Masthead', ro: 'lumina de catarg (albă)', cells: [{ v: 2 }, { v: 3 }, { v: 5 }, { v: 6 }] },
  {
    light: 'Sidelights',
    ro: 'lumini de bord (roșu/verde)',
    cells: [{ v: 1, hl: true }, { v: 2, span: 2 }, { v: 3 }],
  },
  { light: 'Sternlight', ro: 'lumina de pupa (albă)', cells: [{ v: 2, span: 3 }, { v: 3 }] },
  { light: 'Towing light', ro: 'lumina de remorcaj (galbenă)', cells: [{ v: 2, span: 3 }, { v: 3 }] },
  { light: 'All-round', ro: 'alb / roșu / verde / galben', cells: [{ v: 2, span: 3 }, { v: 3 }] },
];

const ARCS = [
  { tokens: ['M'], name: 'Masthead', color: 'albă', arc: '225°', detail: 'de la prova până la 22,5° înapoia traversului, pe fiecare bord' },
  { tokens: ['B'], name: 'Sidelights', color: 'verde tribord · roșu babord', arc: '112,5°', detail: 'fiecare: de la prova până la 22,5° înapoia traversului' },
  { tokens: ['S'], name: 'Sternlight', color: 'albă', arc: '135°', detail: '67,5° de fiecare parte a pupei' },
  { tokens: ['T'], name: 'Towing light', color: 'galbenă', arc: '135°', detail: 'ca sternlight, deasupra lui' },
  { tokens: ['dot:W'], name: 'All-round', color: 'alb / roșu / verde / galben', arc: '360°', detail: '' },
];

const WHEN_SHOWN = [
  '**Lumini:** de la **apus la răsărit** (sunset → sunrise), pe vizibilitate redusă și când e necesar.',
  '**Semne (shapes):** **ziua** (by day).',
  'Se respectă **în orice condiții meteo** (in all weathers).',
  '**Roșu = babord (port)**, **verde = tribord (starboard)**.',
  '**Flashing light** = intermitentă, **≥ 120 sclipiri/minut**.',
  '**Overtaking:** depășești când vii din > **22,5°** înapoia traversului → vezi doar sternlight.',
  '**Reciprocal courses:** vezi masthead-urile în linie și/sau ambele sidelights.',
  '**Semnal luminos** (însoțește sunetul): lumină **albă tot orizontul**, sclipire ≈ **1 s**, interval între semnale ≥ **10 s**.',
  '1 sclipire = tribord · 2 = babord · 3 = mașina înapoi. Îndoială: **≥ 5 sclipiri scurte și rapide**.',
];

const LEGEND = [
  ['M', 'masthead'],
  ['B', 'sidelights'],
  ['S', 'sternlight'],
  ['T', 'towing'],
  ['stack:WR', 'tot orizontul, de sus în jos'],
  ['ball', 'minge'],
  ['dia', 'romb'],
  ['cyl', 'cilindru'],
  ['coneUp', 'con vârf sus'],
  ['coneDn', 'con vârf jos'],
];

const DISTANCES = [
  { value: '200 m', text: 'Lungimea remorcii (**length of tow**). Peste 200 m: remorcherul arată **3 masthead** (sub 200 m: **2**) și **romb** ziua, pe remorcher și pe remorcat. Obiect greu vizibil: sub 200 m un romb la capătul din urmă; peste 200 m rombul din urmă + încă unul cât mai la prova.' },
  { value: '150 m', text: 'Unealtă de pescuit (**outlying gear**) întinsă orizontal peste 150 m → lumină **albă tot orizontul** / con cu vârful în sus în direcția uneltei.' },
  { value: '100 m', text: 'Obiect remorcat > 100 m lung și > 25 m lat: **5** lumini albe, **≤ 100 m** între ele. · Ancoră ≥ 100 m: lumini de lucru pe punte. · Echipament sunet ≥ 100 m: fluier + clopot + gong (la pupa). · Fluiere la > 100 m distanță: se folosește unul.' },
  { value: '50 m', text: 'Sub 50 m = 1 masthead; ≥ 50 m = 2 masthead (al doilea în spate și mai sus). Ancoră: sub 50 m 1 lumină albă; peste 50 m 2 (prova + pupa, cea din pupa mai jos).' },
  { value: '25 m', text: 'Lățimea obiectului remorcat greu vizibil: sub 25 m → 2 lumini albe (prova + pupa); peste 25 m → 4 (prova, pupa, extremitățile lățimii).' },
  { value: '20 m', text: 'Velier sub 20 m: sidelights + sternlight pot fi într-un singur felinar, în vârful catargului. Treaptă pentru masthead (3 M vs 5 M).' },
  { value: '12 m', text: 'Sub 12 m: raze mai mici (vezi tabel); nava eșuată **nu** trebuie să arate luminile/semnele de eșuat; nu e obligată să aibă aparatele de semnal sonor prescrise.' },
  { value: '7 m / 7 kn', text: 'Sub 7 m **și** viteză max. ≤ 7 noduri: doar **o lumină albă tot orizontul** (+ sidelights dacă se poate). Velier < 7 m: lanternă/torță albă la îndemână. La ancoră < 7 m: fără lumini/semne dacă nu e în canal, drum navigabil, ancoraj sau unde navighează alte nave.' },
  { value: '1000 m', text: 'Nava la deminare (**mineclearance**): periculos să te apropii la mai puțin de **1000 m**.' },
  { value: '1 m', text: 'Înălțime minimă a replicii rigide a pavilionului „A” (scafandri), când nu se pot arăta toate luminile/semnele.' },
];

// [name, english, lights tokens, day tokens, note]
const VESSEL_GROUPS = [
  {
    title: 'Nave cu propulsie / vele',
    rows: [
      ['Motor < 50 m', 'power-driven underway', ['M', 'B', 'S'], [], 'Masthead + sidelights + sternlight.'],
      ['Motor ≥ 50 m', 'power-driven underway', ['M2', 'B', 'S'], [], '2 masthead: al doilea **în spate și mai sus**.'],
      ['Motor < 7 m, ≤ 7 kn', 'small power-driven', ['dot:W', '+', 'txt:B dacă se poate'], [], 'Minim: **1 lumină albă tot orizontul**.'],
      ['Pernă de aer', 'air-cushion, non-displacement', ['M', 'B', 'S', '+', 'flash:Y'], [], 'Ca motor + **galben tot orizontul intermitent**.'],
      ['Velier', 'sailing vessel underway', ['B', 'S', '+', 'stack:RG'], ['coneDn'], 'Sub 20 m: B + S pot fi într-un **singur felinar în vârful catargului**. Opțional roșu peste verde (vârf catarg). Ziua **con vârf jos** la prova dacă merge și cu motorul.'],
      ['Velier < 7 m / vâsle', 'sailing < 7 m / under oars', ['txt:lanternă / torță albă'], [], 'Gata la îndemână; se arată **din timp**, să prevină coliziunea.'],
    ],
  },
  {
    title: 'Remorcare / împingere',
    rows: [
      ['Remorcher, remorcă ≤ 200 m', 'towing, tow < 200 m', ['M2', 'B', 'S', 'T'], [], '2 masthead pe verticală + **towing light galben** deasupra sternlight. Valabil și la > 50 m (în loc de masthead prova/pupa).'],
      ['Remorcher, remorcă > 200 m', 'towing, tow > 200 m', ['M3', 'B', 'S', 'T'], ['dia'], '3 masthead; **romb** unde se vede cel mai bine.'],
      ['Împinge / remorcă la bord', 'pushing ahead / towing alongside', ['M2', 'B', 'S'], [], '2 masthead, **fără** towing light. **Unitate compusă** (composite unit) = lumini ca o singură navă cu motor.'],
      ['Nava împinsă / remorcată la bord', 'pushed / towed alongside', ['B', 'txt:la prova'], [], 'Împinsă: sidelights la capătul din față. Remorcată la bord: **sternlight + sidelights la prova**.'],
      ['Nava remorcată', 'vessel being towed', ['B', 'S'], ['dia', 'txt:> 200 m'], 'Sidelights + sternlight. Romb dacă remorca > 200 m.'],
      ['Obiect remorcat greu vizibil', 'inconspicuous, partly submerged', ['stack:WW'], ['dia'], '< 25 m lățime: 1 alb prova + 1 pupa. > 25 m: 4 albe (prova, pupa, laterale). > 100 m lung: 5 albe, ≤ 100 m între ele. Rază **3 M**. Ziua: romb la capătul din urmă (+ unul la prova dacă remorca > 200 m).'],
    ],
  },
  {
    title: 'Pescuit',
    rows: [
      ['Trauler (trawling)', 'making way', ['stack:GW', 'M', 'B', 'S'], ['shapes:coneUp,coneDn'], '**Verde peste alb** + masthead în spate și mai sus. Fără mers: doar cele 2 lumini + masthead (fără B, S). Ziua: 2 conuri vârf la vârf.'],
      ['Pescuit, nu trawl', 'fishing other than trawling', ['stack:RW', 'B', 'S'], ['shapes:coneUp,coneDn'], '**Roșu peste alb**. Fără mers: fără B, S. Ziua: 2 conuri vârf la vârf.'],
      ['Pescuit, unealtă > 150 m', 'outlying gear', ['stack:RW', 'dot:W', 'B', 'S'], ['shapes:coneUp,coneDn', 'coneUp'], '+ **alb tot orizontul** spre unealtă; ziua + con vârf sus spre unealtă.'],
      ['Trauler aproape de alții', 'extra lights', ['stack:WW', 'stack:WR', 'stack:RR'], [], '**Aruncă** plasa: 2 albe · **Trage** plasa: alb peste roșu · **Agățată**: 2 roșii. Pereche: proiector spre prova și spre cealaltă navă. Purse seine: 2 galbene alternând la 1 s.'],
    ],
  },
  {
    title: 'Nave cu manevrabilitate limitată / speciale',
    rows: [
      ['Not under command', 'NUC', ['stack:RR', '+', 'txt:B + S dacă are mers'], ['shapes:ball,ball'], '2 roșii tot orizontul; B + S doar când are mers prin apă. Ziua: 2 mingi.'],
      ['Restricted in ability to manoeuvre', 'RAM', ['stack:RWR', '+', 'txt:M, B, S dacă are mers'], ['shapes:ball,dia,ball'], 'Roșu–alb–roșu. Cu mers: + M, B, S. La ancoră: + lumini de ancoră. Ziua: minge–romb–minge (+ minge la prova la ancoră).'],
      ['RAM – remorcare', 'towing, cannot deviate', ['stack:RWR', 'M2', 'B', 'S', 'T'], ['shapes:ball,dia,ball'], 'Luminile/semnele RAM + cele de remorcare.'],
      ['Dragare / lucrări subacvatice', 'dredging, underwater ops', ['stack:RWR', 'stack:RR', 'stack:GG'], ['shapes:ball,dia,ball', 'shapes:ball,ball', 'shapes:dia,dia'], '**2 roșii** = partea cu obstacol · **2 verzi** = partea pe unde se poate trece. Ziua: 2 mingi (obstacol), 2 romburi (liber). La ancoră: aceleași, în locul celor de ancoră.'],
      ['Scafandri (nava mică)', 'diving', ['stack:RWR', 'flagA'], ['flagA'], '3 tot orizontul roșu–alb–roșu + replică rigidă a pavilionului „A”, **≥ 1 m** înălțime.'],
      ['Deminare', 'mineclearance', ['M', 'B', 'S', '+', 'stack:GGG'], ['shapes:ball,ball,ball'], '+ 3 verzi: unul la capul catargului prova, câte unul la fiecare capăt al vergii. Nu te apropia la < **1000 m**.'],
      ['Limitată de pescaj', 'constrained by her draught', ['M', 'B', 'S', '+', 'stack:RRR'], ['cyl'], 'Lumini de motor + **3 roșii** tot orizontul (opțional). Ziua: **cilindru**.'],
      ['Pilot în serviciu', 'pilot vessel on duty', ['stack:WR', '+', 'txt:B + S dacă are mers'], [], '**Alb peste roșu**. La ancoră: + lumini de ancoră. Nu în serviciu: ca o navă obișnuită.'],
    ],
  },
  {
    title: 'La ancoră / eșuată',
    rows: [
      ['Ancoră < 50 m', 'at anchor', ['dot:W'], ['ball'], '1 lumină albă tot orizontul; ziua **1 minge** la prova.'],
      ['Ancoră ≥ 50 m', 'at anchor', ['stack:WW'], ['ball'], 'Alb prova + alb pupa (**mai jos**). ≥ 100 m: + lumini de lucru pe punte.'],
      ['Eșuată', 'aground', ['stack:WW', '+', 'stack:RR'], ['shapes:ball,ball,ball'], 'Lumini de ancoră + **2 roșii** tot orizontul. Ziua: 3 mingi pe verticală (+ mingea de ancoră). < 12 m: scutită.'],
    ],
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function LightsCheatsheet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lc">
      <section className="exam-card">
        <h2>Lumini, semne și distanțe</h2>
        <p className="exam-subtitle">
          Extras din întrebările COLREG, Clasa A, B. Distanțe în mile marine (M). Termeni în
          engleză, ca în examen.
        </p>
      </section>

      <section className="exam-card">
        <h3>1. Cât de departe trebuie să se vadă luminile</h3>
        <div className="table-scroll">
          <table className="exam-table lc-ranges">
            <thead>
              <tr>
                <th>Lumina</th>
                <th className="lc-c">&lt; 12 m</th>
                <th className="lc-c">12–20 m</th>
                <th className="lc-c">20–50 m</th>
                <th className="lc-c">≥ 50 m</th>
              </tr>
            </thead>
            <tbody>
              {RANGE_ROWS.map((row) => (
                <tr key={row.light}>
                  <td>
                    <strong>{row.light}</strong>
                    <span className="lc-sub">{row.ro}</span>
                  </td>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="lc-c lc-range-val" colSpan={cell.span || 1}>
                      <span className={cell.hl ? 'lc-hl' : ''}>{cell.v}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lc-tip">
          <strong>De ținut minte:</strong> doar <strong>masthead</strong> are 4 trepte (
          <strong>2 · 3 · 5 · 6</strong>). Toate celelalte: <strong>2 M</strong> sub 50 m și{' '}
          <strong>3 M</strong> la ≥ 50 m. Excepție: <span className="lc-hl">sidelights &lt; 12 m = 1 M</span>.
          Obiect remorcat greu vizibil (inconspicuous, partly submerged): lumina albă tot orizontul{' '}
          <strong>3 M</strong>.
        </p>
      </section>

      <section className="exam-card">
        <h3>2. Tipuri de lumini și arcuri</h3>
        <ul className="lc-arcs">
          {ARCS.map((item) => (
            <li key={item.name}>
              <Tokens tokens={item.tokens} />
              <div>
                <strong>{item.name}</strong> · {item.color}
                <div className="lc-arc">
                  <span className="lc-arc-deg">{item.arc}</span>
                  {item.detail && <span className="lc-sub-inline"> {item.detail}</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="exam-card">
        <h3>3. Când se arată luminile și semnele</h3>
        <ul className="lc-list">
          {WHEN_SHOWN.map((line, i) => (
            <li key={i}>{rich(line)}</li>
          ))}
        </ul>
      </section>

      <section className="exam-card">
        <h3>4. Lumini și semne după tipul navei</h3>
        <ul className="lc-legend" aria-label="Legendă">
          {LEGEND.map(([token, label]) => (
            <li key={label}>
              <Token token={token} /> <span>{label}</span>
            </li>
          ))}
        </ul>

        {VESSEL_GROUPS.map((group) => (
          <div key={group.title} className="lc-group">
            <h4 className="lc-group-title">{group.title}</h4>
            {group.rows.map(([name, en, lights, day, note]) => (
              <article key={name} className="lc-vessel">
                <header>
                  <strong>{name}</strong>
                  <span className="lc-sub">{en}</span>
                </header>
                <div className="lc-vessel-body">
                  <div className="lc-vessel-col">
                    <span className="lc-label">Noaptea</span>
                    <Tokens tokens={lights} />
                  </div>
                  <div className="lc-vessel-col">
                    <span className="lc-label">Ziua</span>
                    {day.length ? <Tokens tokens={day} /> : <span className="lc-none">—</span>}
                  </div>
                </div>
                <p className="lc-note">{rich(note)}</p>
              </article>
            ))}
          </div>
        ))}
      </section>

      <section className="exam-card">
        <h3>5. Alte distanțe și dimensiuni din întrebări</h3>
        <ul className="lc-distances">
          {DISTANCES.map((item) => (
            <li key={item.value}>
              <span className="lc-dist-val">{item.value}</span>
              <span className="lc-dist-text">{rich(item.text)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
