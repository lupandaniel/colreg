// Legislație: brevet, ambarcațiune, pavilion, autorități, siguranța navigației (Clasa A, B). Sursă: questionsLegislatie.js.
const data = {
  title: 'Legislație · Brevet, ambarcațiune și autorități',
  subtitle:
    'Autoritățile, înmatricularea și pavilionul, echipaj și conducător, brevetul / certificatul (valabilitate, suspendare), asistență, retinere și poluare.',
  sections: [
    {
      title: '1. Autorități și control',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Cine', 'Ce face'],
          rows: [
            ['**IMO** (Organizația Maritimă Internațională)', 'Organizația interguvernamentală (ONU) cu competențe în **securitatea maritimă**.'],
            ['**ANR** (Autoritatea Navală Română)', 'Autoritatea de stat în **siguranța navigației**, în **administrația publică centrală**; **supraveghere și control** prin **căpitaniile de port**; eliberează **certificatele de conducător**; ține **evidența centralizată**; **protecția apelor** împotriva poluării (centrul de coordonare a prevenirii poluării și intervenției).'],
            ['**Căpitaniile de port**', 'Țin **evidența ambarcațiunilor** (registre matricole); **acceptul de intrare** și **permisul de plecare**; coordonează activitățile de salvare; aprobă **locurile de ancorare / acostare**; cercetează sesizările și abordajele.'],
            ['**ARSVOM**', 'Agenția Română de Salvare a Vieții Omenești pe Mare – îndeplinește obligațiile statului român privind **căutarea și salvarea**.'],
            ['**Administrația portului**', 'Acordă **permisele de acostare**.'],
            ['**Libera practică sanitară**', 'Pentru voiaj internațional, acceptul de intrare în port se dă numai **după** obținerea ei.'],
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Control', 'Se exercită asupra…'],
          rows: [
            ['**FSC** – Flag State Control (statul pavilionului)', 'ambarcațiunilor care arborează **pavilionul român**, **oriunde se află** (și pe mare liberă). Dreptul de vizită și control în orice port: **inspectorii FSC**.'],
            ['**PSC** – Port State Control (statul portului)', 'ambarcațiunilor aflate în **incinta unui port**, **indiferent de pavilion**; ANR le controlează doar în apele naționale navigabile și porturi, pentru respectarea acordurilor și convențiilor.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Dacă ambarcațiunea sub pavilion străin nu respectă convențiile: ANR o **reține până la remedierea** deficiențelor; poate **autoriza plecarea** spre alt port (cu notificare dacă e în alt stat) dacă poate naviga în condiții minime de siguranță.',
            'ANR poate **monitoriza** ambarcațiunile sub pavilion român și **în afara apelor naționale**.',
            'Nave **străine** de serviciu guvernamental **nu pot fi reținute**.',
          ],
        },
      ],
    },
    {
      title: '2. Înmatricularea și pavilionul',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Subiect', 'Regula'],
          rows: [
            ['**Înmatriculare**', 'În **registrele matricole**; = transcrierea unei ambarcațiuni **nou construite sau dobândite**. Cele în construcție: în registrul de evidență al celor în construcție.'],
            ['**Înregistrare**', 'Transcrierea **dreptului de proprietate** al noului proprietar.'],
            ['Ambarcațiune **neînmatriculată**', '**Nu are dreptul să navigheze** pe apele navigabile.'],
            ['Condiții', 'stare tehnică obligatorie și **nu mai veche de 20 de ani**; mai întâi se obține **dreptul de arborare a pavilionului român**.'],
            ['**Transcrierea drepturilor reale**', 'Are ca efect **opozabilitatea față de terți**.'],
            ['**Dreptul de arborare**', 'Se acordă ambarcațiunilor proprietate a persoanelor fizice / juridice **române**; străine: dacă au **domiciliu / filială în România** sau sunt **închiriate prin bare-boat / leasing** unui român.'],
            ['Dovada pavilionului', '**Certificatul de naționalitate** sau **Atestatul de bord**; el dă și naționalitatea.'],
            ['Un singur pavilion', 'Nu se poate arbora **și** altul. Se schimbă doar la **transfer real al proprietății** sau schimbarea înmatriculării.'],
            ['**Permis provizoriu**', 'Pentru ambarcațiuni nou construite / dobândite de la străini.'],
            ['**Suspendare**', 'Pe perioada închirierii către persoane străine.'],
            ['**Retragere**', 'La cererea proprietarului; când nu mai sunt îndeplinite condițiile; la încălcări **repetate** ale legislației.'],
            ['Se pierde dreptul', 'La **pierdere totală** sau **dezmembrare**.'],
            ['**Ambarcațiune fără naționalitate**', 'Nu e protejată de lege; **orice stat o poate confisca**.'],
            ['**Partea navei** (legal)', 'Echipamentele de **navigație și comunicații**, de **prevenire a poluării**, mașinile și proviziile.'],
            ['**Categorii juridice**', 'categoria **I, a II-a, de agrement**.'],
          ],
        },
      ],
    },
    {
      title: '3. Echipaj și conducător',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Subiect', 'Regula'],
          rows: [
            ['**Echipaj**', 'Totalitatea membrilor **certificați și necertificați** care îndeplinesc o funcție la bord.'],
            ['**Echipaj minim de siguranță**', 'Asigură siguranța navigației, vitalitatea, prevenirea incendiilor și poluării. **Certificatul de încadrare** cu personal minim e emis de **ANR** pentru fiecare ambarcațiune.'],
            ['**Conducerea**', '**Unică**, a conducătorului ambarcațiunii; are autoritate asupra **tuturor persoanelor ambarcate**.'],
            ['Persoane peste echipaj', 'Pot fi ambarcate, **în limita mijloacelor de salvare** de la bord.'],
            ['**Părăsirea ambarcațiunii**', 'Doar când **nu mai există șanse reale** de salvare.'],
            ['Ambarcațiune **arestată / reținută** în alt stat', 'Informezi de îndată **misiunea diplomatică** a României și **ANR**.'],
            ['**Conducătorul în marș**', 'Are calitatea de **ofițer de stare civilă sau notar** (naștere, căsătorie, deces, testament).'],
            ['**Răspunderea**', 'Proprietarul – **în limita valorii ambarcațiunii, navlului și accesoriilor**. Conducătorul și echipajul **nu își pot limita** răspunderea față de terți.'],
            ['**În exploatare**', 'Corp cu flotabilitate, dotări și echipaj complete, **apt de folosire imediată**.'],
            ['**Scoasă din exploatare**', 'Fără flotabilitate asigurată, dotări scoase din funcțiune, echipaj redus; apt doar după reparații.'],
          ],
        },
      ],
    },
    {
      title: '4. Brevet / certificat de conducător',
      blocks: [
        {
          type: 'facts',
          items: [
            { value: '5 ani', text: 'Valabilitatea maximă a certificatului de conducător; **cursurile STCW** sunt valabile **5 ani** de la absolvire.' },
            { value: '1–12 luni', text: '**Suspendarea** brevetului / certificatului.' },
            { value: '10 zile', text: 'Anularea sau suspendarea se face prin **decizie comunicată în 10 zile**, cu retragerea documentului.' },
            { value: '30 zile', text: '**Contestația** împotriva suspendării considerate nejustificate.' },
          ],
        },
        {
          type: 'list',
          items: [
            'Se obține **din oficiu** sau **prin examen**; se **eliberează** de **ANR**.',
            '**Suspendarea** se dispune de **ANR**, organele penale sau judecătorești.',
            'Motive de suspendare: nerespectarea **regulamentelor de navigație**; consum de **alcool sau droguri** și exercitarea atribuțiilor sub influența lor; **poluare intenționată**; incompetență (și sancțiune disciplinară).',
            'Suspendarea **nu înlătură** răspunderea civilă sau penală.',
            '**Anularea**: săvârșirea unei **infracțiuni specifice** navigației.',
            'Brevet **pierdut**: se eliberează unul nou **după publicarea pierderii în Monitorul Oficial**.',
          ],
        },
      ],
    },
    {
      title: '5. Siguranța navigației, asistență, retinere, poluare',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Subiect', 'Regula'],
          rows: [
            ['**Ape interioare navigabile**', 'fluvii, râuri, canale, lacuri, ape de frontieră navigabile, ape maritime interioare'],
            ['**Ape naționale navigabile**', '**marea teritorială + apele interioare navigabile**'],
            ['**Zona maritimă / fluvială**', 'Fâșia de teren de **30 m** de la marginea apei spre uscat; în porturi **coincide cu incinta portuară**.'],
            ['**Acostare / ancorare în afara portului**', 'Doar în **locurile stabilite și semnalizate**, aprobate de **căpitania de port**; în afara lor numai în **forță majoră**, cu informarea imediată a căpităniei (și a poliției de frontieră); forța majoră se atestă de căpitanie.'],
            ['**Asistență**', 'Obligatorie pentru orice conducător, **cu toată viteza**, către o ambarcațiune în pericol care cere ajutor. Încetează dacă ajutorul e **refuzat expres** sau nu mai e necesar. După abordaj îți **spui numele**, portul de înmatriculare și cel mai apropiat port.'],
            ['**Căutare și salvare**', 'Se face **gratuit**, de statul român, pentru **orice persoană**, indiferent de naționalitate.'],
            ['**Poluare**', 'Cheltuielile de depoluare: **poluatorul**. Protecția apelor: **ANR**.'],
            ['**Epave / eșuate**', 'Pericol pentru siguranța navigației; **dezeșuarea / ranfluarea** și curățarea albiei = obligația **proprietarului sau operatorului**.'],
            ['**Interdicția de plecare**', 'Dată de capitaniile de port. Motive: gaură de apă, lipsă mijloace de salvare / stins incendii / semnalizare / ancorare, **număr de pasageri depășit**, lipsa echipajului minim, pericol sau poluare evidentă, **debite** ale proprietarului. Durata **maximum 24 de ore**; răspunde **solicitantul**.'],
            ['**Reținerea** unei ambarcațiuni', 'Până la **încetarea cauzei**; încetează dacă se dau **garanții suficiente**; peste limita legală doar cu o **încheiere executorie** a instanței.'],
            ['**Plecare din port**', '**Permis de plecare** (ANR prin capitanie).'],
          ],
        },
      ],
    },
  ],
};

export default data;
