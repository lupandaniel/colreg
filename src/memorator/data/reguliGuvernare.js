// COLREG – regulile de guvernare și conduită (Clasa A, B). Sursă: întrebările din questions.js.
const data = {
  title: 'COLREG · Reguli de guvernare',
  subtitle:
    'Cine cedează trecerea, cum se evită o coliziune, viteză sigură, canale înguste și dispozitive de separare a traficului.',
  sections: [
    {
      title: '1. Ierarhia navelor – cine se ferește de cine',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Nava', 'Se ferește de (trebuie să nu o stânjenească)'],
          rows: [
            ['Motor (power-driven)', 'NUC · RAM · nave la pescuit · veliere'],
            ['Velier (sailing)', 'NUC · RAM · nave la pescuit'],
            ['Pescuit (fishing, underway)', 'NUC · RAM – „pe cât posibil”'],
            ['Limitată de pescaj (CBD)', 'NUC · RAM'],
            ['NUC / RAM', 'Nu cedează nimănui (au prioritate)'],
          ],
        },
        {
          type: 'tip',
          text: '**Ordinea:** NUC → RAM → pescuit → velier → motor. Fiecare cedează tuturor celor dinaintea lui. **CBD** (limitată de pescaj) se ferește doar de NUC și RAM.',
        },
        {
          type: 'list',
          items: [
            'Nu stânjenesc nava **limitată de pescaj**: **motor** (underway), **velier** și **nave la pescuit**.',
            'Hidroavionul (seaplane) pe apă se ține **departe de toate navele** și nu le stânjenește.',
            'La întrebările cu o listă de nave („care trebuie să se ferească de toate celelalte”) alege nava cea mai jos în ierarhie.',
          ],
        },
      ],
    },
    {
      title: '2. Definiții',
      blocks: [
        {
          type: 'pairs',
          items: [
            ['**Vessel**', 'Orice ambarcațiune, inclusiv fără pescaj și hidroavioane, folosită sau capabilă să fie folosită ca mijloc de transport pe apă.'],
            ['**Power-driven**', 'Orice navă propulsată cu mașini.'],
            ['**Sailing vessel**', 'Navă sub vele, cu condiția ca mașina (dacă există) să **nu fie folosită**.'],
            ['**Underway**', 'Navă care **nu** este la ancoră, **nu** e legată de țărm și **nu** este eșuată.'],
            ['**Engaged in fishing**', 'Pescuiește cu plase, paranghele, traule sau alte unelte care îi **limitează manevrabilitatea**.'],
            ['**NUC** (not under command)', 'Din cauza unei circumstanțe excepționale nu poate manevra cum cer regulile și deci nu se poate feri de altă navă.'],
            ['**RAM** (restricted in ability to manoeuvre)', 'Din natura lucrului nu poate manevra cum cer regulile. Lista **nu e limitativă**.'],
            ['**CBD** (constrained by her draught)', 'Doar navă cu **motor**; din cauza pescajului față de adâncimea apei e foarte limitată în a-și schimba drumul. **Nu e RAM.**'],
            ['**Restricted visibility**', 'Orice condiții care reduc vizibilitatea: ceață, brumă, ninsoare, ploaie torențială, furtună de nisip.'],
            ['**In sight of one another**', 'Două nave se văd când una poate fi observată **vizual** de pe cealaltă.'],
            ['**Length / breadth**', 'Lungimea totală (LOA) / lățimea maximă.'],
          ],
        },
        {
          type: 'list',
          title: 'RAM – exemple',
          items: [
            '**RAM:** transfer de persoane/provizii/marfă în mers (replenishment) · așezarea / ridicarea / întreținerea unui semn de navigație · așezarea sau ridicarea unui cablu sau conducte submarine · deminare · dragare, măsurători hidrografice, oceanografice sau lucrări subacvatice · lansarea sau recuperarea aeronavelor · remorcaj care limitează sever remorcherul și remorca să-și schimbe drumul.',
            '**Nu e RAM:** nava limitată de pescaj.',
          ],
        },
      ],
    },
    {
      title: '3. Situații de întâlnire',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Situația', 'Regula', 'Cine cedează'],
          rows: [
            [
              'Depășire (overtaking)',
              'Vii din **> 22,5° înapoia traversului** celeilalte nave; noaptea ai vedea doar **sternlight**-ul ei.',
              '**Nava care depășește.** Dacă ai dubii că depășești, **consideri că depășești**.',
            ],
            [
              'Cap la cap (reciprocal courses)',
              'Noaptea vezi masthead-urile în linie și/sau ambele sidelights; ziua aspectul corespunzător.',
              '**Ambele** virează la **tribord** și se încrucișează **babord la babord**.',
            ],
            [
              'Încrucișare, 2 nave cu motor',
              'Risc de coliziune.',
              'Nava care o are pe cealaltă **la tribord**; dacă se poate, **nu trece prin fața** ei.',
            ],
            [
              '2 veliere, vânt pe borduri diferite',
              'Vânt pe borduri opuse.',
              'Cea cu **vântul din babord**.',
            ],
            [
              '2 veliere, vânt pe același bord',
              'Același bord.',
              'Cea de **deasupra vântului** (windward) se ferește de cea de sub vânt (leeward).',
            ],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Rol', 'Ce face'],
          rows: [
            ['Give-way', 'Acționează **din timp** și **substanțial**, ca să treacă bine la distanță.'],
            ['Stand-on', 'Își **menține drumul și viteza**.'],
            ['Stand-on – când manevrează', 'Imediat ce devine clar că give-way **nu acționează corect**; și obligatoriu când coliziunea nu mai poate fi evitată doar de give-way (va face ce ajută cel mai mult).'],
          ],
        },
      ],
    },
    {
      title: '4. Manevra de evitare a coliziunii',
      blocks: [
        {
          type: 'list',
          items: [
            'Se face **ferm, din timp** și respectând buna practică marinărească (good seamanship).',
            'Schimbările de drum/viteză trebuie să fie **suficient de mari** ca să fie vizibile altei nave, vizual sau pe radar.',
            'Numai schimbarea de drum e suficientă? Fă-o **din timp**, **substanțial**, fără a crea o nouă situație de apropiere.',
            'Trebuie să rezulte o trecere la **distanță sigură** (safe distance).',
            'Eficiența manevrei se verifică **până când cealaltă navă a trecut complet și e departe**.',
            'Pentru mai mult timp de evaluare: **reduce viteza** sau oprește / dă înapoi mașina (take all way off).',
          ],
        },
      ],
    },
    {
      title: '5. Viteză sigură, veghe și risc de coliziune',
      blocks: [
        {
          type: 'list',
          items: [
            '**Veghea (look-out):** permanent, **văz și auz** + toate mijloacele disponibile.',
            '**Viteza sigură (safe speed):** **în orice moment**, ca să poți acționa eficient și să te poți opri la o distanță potrivită.',
            '**Factori la viteza sigură:** vizibilitatea, densitatea traficului, manevrabilitatea (noaptea), lumina de fundal, starea vântului și a mării, pescajul.',
            '**În plus, cu radar:** caracteristicile și eficiența radarului, limitele scării de distanță folosite, starea mării, numărul, poziția și mișcarea navelor.',
            '**Radar:** folosire corectă, inclusiv **scanare la distanță mare** și plotare (sau observare sistematică echivalentă).',
            '**Risc de coliziune:** există când **relevmentul compas** al navei care se apropie **nu se schimbă apreciabil**.',
            'Poate exista risc **chiar dacă relevmentul se schimbă**: la o navă foarte mare, la un remorcaj sau la distanță mică.',
            'Pentru a stabili riscul se folosesc **toate mijloacele disponibile**.',
          ],
        },
      ],
    },
    {
      title: '6. Canale înguste (narrow channel)',
      blocks: [
        {
          type: 'list',
          items: [
            'Mergi cât mai aproape de **limita exterioară a canalului din tribord**, atât cât e sigur și practic.',
            '**Sub 20 m** și **velierele** nu stânjenesc o navă care poate naviga în siguranță **doar** în canal.',
            '**Nava la pescuit** nu stânjenește nicio altă navă din canal.',
            'Aproape de o curbă unde alte nave pot fi ascunse: **un sunet lung** și atenție deosebită.',
            'Îndoială la o navă care încrucișează canalul: **5 sunete scurte și rapide**.',
            'Depășire în canal: vezi memoratorul de semnale (2 lungi + 1 scurt = pe tribord; 2 lungi + 2 scurte = pe babord).',
          ],
        },
      ],
    },
    {
      title: '7. Dispozitive de separare a traficului (TSS)',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Situația', 'Regula'],
          rows: [
            ['Ce reglementează', 'Dispozitivele de separare adoptate de **Organizație** (IMO).'],
            ['În interiorul culoarului', 'Mergi în culoarul potrivit, în **direcția generală** a traficului, și te ții pe cât posibil **departe** de linia sau zona de separare.'],
            ['Intrare / ieșire', 'De regulă **la capătul culoarului**; dacă intri/ieși pe lateral, o faci sub **unghi cât mai mic** față de direcția traficului.'],
            ['Traversare', 'Cât mai aproape de **unghi drept** pe direcția traficului.'],
            ['Zona de separare / linia', 'Intri sau traversezi doar **în caz de urgență**, pentru pericol imediat, sau pentru **pescuit în zona de separare**.'],
            ['Nave care nu folosesc TSS', 'Se țin **la o distanță cât mai mare** de el.'],
            ['Pescarii', 'Nu stânjenesc nicio navă din culoar.'],
            ['Ancorare', 'Se **evită** în TSS și în apropierea capetelor lui.'],
            ['Capetele schemei', 'Navigație cu **grijă deosebită**.'],
            ['Zone de trafic de coastă', 'Nu pentru trafic de tranzit, **exceptând** navele **sub 20 m** și velierele.'],
            ['Scutiri', 'RAM la **menținerea siguranței navigației** în TSS; RAM la așezarea / ridicarea unui cablu submarin – în măsura necesară operației.'],
          ],
        },
      ],
    },
    {
      title: '8. Vizibilitate redusă și reguli generale',
      blocks: [
        {
          type: 'list',
          items: [
            'Regulile de vizibilitate redusă se aplică navelor **care nu se văd între ele**, în sau lângă zone cu vizibilitate redusă.',
            'Nava cu motor merge cu **viteză sigură** și cu **mașinile gata pentru manevră imediată**.',
            'COLREG se aplică tuturor navelor **pe marea liberă și în apele conectate**.',
            'Regulile speciale locale (rade, porturi, râuri, canale) **pot exista**, dar trebuie să semene cât mai mult cu COLREG.',
            'Abaterea de la reguli e permisă când e pericol de navigație, risc de coliziune sau circumstanțe speciale.',
            'Regulile **nu scutesc** nava, comandantul sau armatorul de consecințele neglijenței sau ale omiterii precauțiilor obișnuite.',
            'Semnale luminoase pentru statele care au reguli speciale (nave de război, convoi, pescuit în flotă): pot exista lumini suplimentare, dar **nu trebuie să poată fi confundate** cu cele din COLREG.',
          ],
        },
      ],
    },
  ],
};

export default data;
