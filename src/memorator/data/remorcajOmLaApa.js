// Manevra navei: remorcaj, om la apă, ecluze, urgențe (Clasa A, B). Sursă: questionsManevra.js.
const data = {
  title: 'Manevra · Remorcaj, om la apă, ecluze și urgențe',
  subtitle:
    'Procedee de remorcaj și reguli de siguranță, manevre de recuperare a omului căzut în apă, comportamentul în ecluze, situații de urgență.',
  sections: [
    {
      title: '1. Remorcaj',
      blocks: [
        {
          type: 'pairs',
          items: [
            ['**Procedee**', '**în siaj**, **la ureche**, **prin împingere**, **la edec**, **mixt**.'],
            ['**În siaj, prova înainte**', 'Mai **avantajos**: pot fi folosite și ambarcațiuni **nespecializate**.'],
            ['**La ureche** (alături)', 'Pentru ambarcațiuni **mici**, pe **distanțe scurte**, pe **mare calmă**, în **zona portuară**.'],
            ['**Pregătirea**', 'alegerea remorcherului, a remorcii, pregătirea ambarcațiunii remorcate, pregătirea remorcherului.'],
            ['**Alegerea remorcii**', 'după **material, rezistență, lungime, grosime**; să fie **rezistentă, lungă, grea și suficient de elastică**.'],
            ['**Pistolul de aruncare**', 'Bate **bandula** între remorcher și ambarcațiunea remorcată.'],
            ['**Apropierea**', 'Pe **drum paralel**, la **20 – 30 m**, prin bordul **din vânt**.'],
            ['**Lungimea remorcii**', 'Astfel încât remorcata să **nu suporte curentul respins de elicea** remorcherului; egală cu **lungimea de undă a valului** sau un multiplu. În **port**: mai mică, **≈ 25 – 30 m**.'],
            ['**Întinderea remorcii**', '**Lent, progresiv**, ca să nu se rupă.'],
            ['**Schimbările de drum**', '**Lent**, cu **puține grade**; maximum **5 – 8 puncte la cârmă**.'],
            ['**Pe timpul mersului**', '**Supraveghere permanentă** a remorcii și respectarea vitezei de remorcaj; navigația cu **COLREG 72**.'],
            ['**Efectul remorcajului**', 'Afectează **viteza, inerția și giratia**.'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Remorcaj cuplat – virare', 'Ce faci'],
          rows: [
            ['Virezi în bordul **remorcherului**', '**Stopezi mașina** remorcherului și pui cârma în bordul virării; inerția ambarcațiunii ajută virarea.'],
            ['Virezi în bordul **remorcatei**', 'Stopezi mașina până când remorcata își pierde din inerție, apoi pui cârma în bordul virării și dai mașina **treptat** până la viteza de marș.'],
          ],
        },
        {
          type: 'warn',
          title: 'Întrebările „NU este corect”',
          text: [
            '**Greșit:** „remorcherul virează, remorcata pune cârma în bordul virării ca să slăbească parâma”.',
            '**Greșit:** „pe timpul remorcajului nu se mai modifică lungimea parâmei”.',
            '**Nu e măsură de siguranță:** calculul rezistenței la rupere a remorcii în funcție de direcția vântului și curentului, de diametrul și lungimea remorcii.',
            'Ruperea parâmei pe marș lung: nu s-a folosit o parâmă **rezistentă, lungă, grea și suficient de elastică**.',
          ],
        },
        {
          type: 'list',
          title: 'Remorchere',
          items: [
            'Se deosebesc prin **zona de navigație, puterea motorului, dependența de portul de bază**; cele **oceanice** au zonă **nelimitată**.',
            'Misiuni: **stingerea incendiilor**, **prevenirea și limitarea poluării** cu hidrocarburi.',
          ],
        },
      ],
    },
    {
      title: '2. Omul căzut în apă (man overboard)',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Manevra', 'Cum se execută'],
          rows: [
            ['**Giratie simplă**', 'Cârma banda în bordul în care a căzut omul; după **250°** față de drumul inițial aduci cârma la zero și **stopezi mașina**.'],
            ['**Curba Williamson**', 'După o întoarcere de **60°** cu cârma banda în bordul căderii, pui cârma banda în bordul **opus** pentru a ajunge pe **drumul inițial inversat**.'],
            ['**Curba Schranow**', 'Cârma banda în **oricare bord**; după întoarcerea la drumul de salvare **Ds = Di + 180° ± 60°** navighezi pe acel drum până găsești omul.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Manevra clasică de recuperare ține cont de **vânt și curent**, ca ambarcațiunea să **nu derive peste om**.',
            'Apropierea de om se face **din inerție, cu mașina stopată**, omul rămânând **sub vântul** ambarcațiunii.',
            'Dacă nu vezi clar efectul curentului și vântului: vii cu **prova pe direcția inversă a rezultantei**, cu derivă minimă, și te apropii **cu viteză scăzută**.',
            'Butonul **„Man overboard” al GPS-ului** ghidează permanent spre locul accidentului (indică **relevmentul și distanța**).',
            'Pe VHF (RTF) anunți celelalte ambarcațiuni cu **MAYDAY MAYDAY MAYDAY**.',
            'Lansarea ambarcațiunii de salvare pe vreme rea: poziția **cu vântul în bordul opus lansării**.',
          ],
        },
      ],
    },
    {
      title: '3. Ecluze',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Etapa', 'Regula'],
          rows: [
            ['**Zona ecluzei**', 'Ecluze + suprafețele de apă din interiorul și din afara sasurilor (**avanporturile**) pentru legare, înșiruire, așteptare.'],
            ['Trecerea prin **avanporturi** / intrarea', '**Reduci viteza** ca să te poți opri în siguranță cu cabluri și parâme, fără coliziune cu porțile.'],
            ['Înainte de intrare', '**Parâmele ținute din scurt**; echipamentul **nu depășește limitele navei**.'],
            ['Ancorele', '**Ridicate la post și asigurate**.'],
            ['Stația radio', 'Pe **canalul ecluzei**, comutată la **recepție**.'],
            ['Ordinele personalului', 'Pot completa sau deroga de la reguli; conducătorii **trebuie să le urmeze**.'],
            ['**Depășirea**', '**Interzisă** în zona de ecluzare; poți trece pe lângă nave care așteaptă doar dacă tu trebuie ecluzat înainte sau pentru a ocupa locuri libere.'],
            ['**Ordinea ecluzării**', 'navele **administrației** → nave în **misiuni excepționale** → nave **grav avariate** → **pompieri și salvare** în drum spre accident → **celelalte**.'],
            ['În camera ecluzei', 'Rămâi în **limitele marcate**; **interzisă curățarea și măturarea**; **tranșeții** (fenders) trebuie să fie **flotabili** dacă nu sunt legați fix.'],
            ['După legare', 'Propulsia mecanică și instalația de guvernare **prova** sunt **interzise** (doar pentru fracțiuni scurte de timp).'],
            ['**Pasagerii**', 'Nu urcă / coboară **fără permisiunea** personalului ecluzei.'],
            ['**Ambarcațiuni mici**', 'Păstrează **distanță** suficientă față de alte nave.'],
          ],
        },
      ],
    },
    {
      title: '4. Situații de urgență',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Situația', 'Acțiuni'],
          rows: [
            ['**Defecțiune la sistemul de guvernare**', 'informezi **comandantul**, semnalizezi situația, **oprești motorul principal**, pregătești **guvernarea de avarie**, instalațiile de **ancorare și remorcaj**, informezi cea mai apropiată **autoritate** și ambarcațiunile din vecinătate'],
            ['**Coliziune pe mare**', 'anunți comandantul, constați **avariile** la corp și marfă, evaluezi pierderile, iei **sonde** în compartimentul avariat, echipajul așteaptă ordine, pregătești instalația de **salvare**, ai în vedere **legătura radio**, semnalizezi'],
            ['**Coliziune în port**, ambarcațiune grav avariată', 'anunți comandantul, verifici **răniții** și avariile, pregătești echipamentul de salvare, ții stația radio în **stand-by**, dai semnalul corespunzător, **înregistrezi ora și poziția**'],
            ['**Raportare** a situației de urgență', 'către **paza de coastă**, **autoritatea portuară** și **companie**'],
          ],
        },
      ],
    },
  ],
};

export default data;
